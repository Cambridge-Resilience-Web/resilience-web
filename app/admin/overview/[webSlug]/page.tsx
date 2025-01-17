'use client'
import { useCallback, useMemo, use } from 'react'
import { useRouter } from 'next/navigation'
import {
  Box,
  Flex,
  Badge,
  Heading,
  Center,
  Spinner,
  Text,
  Link,
  Button,
} from '@chakra-ui/react'
import PermissionsTable from '@components/admin/permissions-table'
import useWeb from '@hooks/webs/useWeb'
import { PROTOCOL, REMOTE_HOSTNAME } from '@helpers/config'
import { HiArrowLeft } from 'react-icons/hi'
import usePublishWeb from '@hooks/webs/usePublishWeb'

export default function WebOverviewPage({ params }) {
  // @ts-ignore
  const { webSlug } = use(params)
  const router = useRouter()
  const { web, isPending: isLoadingWeb } = useWeb({
    webSlug,
    withAdminInfo: true,
  })
  const { mutate: publishWeb, isPending: isPublishingWeb } =
    usePublishWeb(webSlug)

  const goBack = useCallback(() => {
    router.back()
  }, [router])

  const decoratedOwnerships = useMemo(() => {
    if (!web || !web.ownerships) {
      return []
    }

    return web.ownerships
      .filter((ownership) => !ownership.user?.admin)
      .map((ownership) => ({ ...ownership, owner: true }))
  }, [web])

  const permissionsForCurrentWebWithoutOwners = useMemo(() => {
    if (!web || !web.ownerships || !web.permissions) {
      return []
    }

    const filteredPermissions = []
    const ownershipsEmails = web.ownerships?.map((o) => o.user?.email)
    web.permissions?.map((permission) => {
      if (!ownershipsEmails?.includes(permission.user.email)) {
        // @ts-ignore
        filteredPermissions.push(permission)
      }
    })

    return filteredPermissions
  }, [web])

  const mailToEmails = useMemo(() => {
    if (!web || !web.ownerships || !web.permissions) {
      return []
    }
    const ownershipsEmails = web.ownerships?.map((o) => o.user?.email)
    const permissionsEmails = web.permissions
      ?.map((p) => (p.user?.emailVerified ? p.user?.email : undefined))
      .filter(Boolean)

    return [...ownershipsEmails, ...permissionsEmails].join(',')
  }, [web])

  if (isLoadingWeb) {
    return (
      <Center height="50vh">
        <Spinner size="xl" />
      </Center>
    )
  }

  return (
    <>
      <Button
        leftIcon={<HiArrowLeft />}
        name="Back"
        mb={2}
        ml={2}
        onClick={goBack}
        variant="link"
        color="gray.700"
      >
        Back to main list
      </Button>
      <Flex justifyContent="space-between" alignItems="center">
        <Heading mb="1rem">{web.title}</Heading>
        {web.published ? (
          <Badge colorScheme="green" fontSize="lg">
            Published
          </Badge>
        ) : (
          <Flex gap="1rem" flexDirection="column" alignItems="center">
            <Badge fontSize="lg">Private</Badge>
            <Button
              variant="rw"
              onClick={() => publishWeb()}
              isLoading={isPublishingWeb}
            >
              Publish 🚀
            </Button>
          </Flex>
        )}
      </Flex>
      <Link
        href={`${PROTOCOL}://${web.slug}.${REMOTE_HOSTNAME}`}
        target="_blank"
        fontWeight={600}
        color="rw.900"
      >
        {`${web.slug}.${REMOTE_HOSTNAME}`}
      </Link>
      <Text mt="1rem">
        <strong>{web.listings.length}</strong> listings
      </Text>

      {(web.permissions?.length > 0 || decoratedOwnerships?.length > 0) && (
        <Box mt="2rem">
          <Heading as="h3" fontSize="1.75rem" mb="0.5rem">
            Team
          </Heading>
          <PermissionsTable
            permissions={[
              ...decoratedOwnerships,
              ...permissionsForCurrentWebWithoutOwners,
            ]}
          />
          <Button
            variant="rw"
            mb="2rem"
            as={Link}
            href={`mailto:${mailToEmails}`}
          >
            Send email to owners and editors
          </Button>
        </Box>
      )}
    </>
  )
}
