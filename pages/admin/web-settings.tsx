import { useCallback, useEffect } from 'react'
import { useRouter } from 'next/router'
import { signIn, useSession } from 'next-auth/react'
import { NextSeo } from 'next-seo'
import { Formik, Form, Field, FieldProps } from 'formik'
import {
  Box,
  Center,
  Spinner,
  Checkbox,
  Stack,
  Heading,
  chakra,
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  Text,
  useToast,
} from '@chakra-ui/react'

import LayoutContainer from '@components/admin/layout-container'
import ImageUpload from '@components/admin/listing-form/ImageUpload'
import { usePermissions } from '@hooks/permissions'
import { useWeb, useUpdateWeb } from '@hooks/webs'
import { useIsOwnerOfCurrentWeb } from '@hooks/ownership'
import { useAppContext } from '@store/hooks'

export default function Settings() {
  const router = useRouter()
  const { data: session, status: sessionStatus } = useSession()
  const isOwnerOfCurrentWeb = useIsOwnerOfCurrentWeb()
  const { isPending: isPendingPermissions } = usePermissions()
  const { selectedWebSlug } = useAppContext()
  const { web: webData } = useWeb(selectedWebSlug)
  const { updateWeb, isPending, isSuccess } = useUpdateWeb()

  const toast = useToast()
  useEffect(() => {
    if (isSuccess) {
      toast({
        title: 'Success',
        description: `Web updated successfully`,
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
    }
  }, [isSuccess, toast])

  useEffect(() => {
    async function signInIfNeeded() {
      if (!session && !(sessionStatus === 'loading')) {
        await signIn()
      }
    }
    signInIfNeeded()
  }, [session, sessionStatus])

  const onSubmit = useCallback(
    (data) => {
      updateWeb({
        ...data,
        slug: webData?.slug,
      })
    },
    [updateWeb, webData?.slug],
  )

  if (sessionStatus === 'loading' || isPendingPermissions) {
    return (
      <LayoutContainer>
        <Center height="100%">
          <Spinner size="xl" />
        </Center>
      </LayoutContainer>
    )
  }

  if (!session) {
    return null
  }

  if (isOwnerOfCurrentWeb === false) {
    router.push('/admin')
  }

  return (
    <>
      <NextSeo
        title="Admin | Resilience Web"
        openGraph={{
          title: 'Admin | Resilience Web',
        }}
      />
      <LayoutContainer>
        <Box
          px={{ base: '4', md: '10' }}
          py={4}
          mb="2rem"
          maxWidth="4xl"
          mx="auto"
        >
          <Stack spacing="1.5rem">
            <Box>
              <Heading>Web settings</Heading>
              <Text>This page is only accessible to web owners.</Text>
              <Box
                shadow="base"
                rounded={[null, 'md']}
                overflow={{ sm: 'hidden' }}
                bg="white"
                padding="1rem"
                mt="1rem"
              >
                <Formik
                  initialValues={{
                    published: Boolean(webData?.published),
                    image: webData?.image,
                  }}
                  enableReinitialize
                  onSubmit={onSubmit}
                >
                  {(props) => {
                    return (
                      <Form>
                        <chakra.div mb="2rem">
                          <Field name="published">
                            {({ field, form }: FieldProps) => {
                              return (
                                <FormControl
                                  isInvalid={Boolean(
                                    form.errors.published &&
                                      form.touched.published,
                                  )}
                                >
                                  <Checkbox
                                    isChecked={field.value}
                                    id="published"
                                    onChange={field.onChange}
                                    colorScheme="green"
                                  >
                                    Published
                                  </Checkbox>
                                  <FormErrorMessage>
                                    {form.errors.published?.toString()}
                                  </FormErrorMessage>
                                  <FormHelperText>
                                    Is this web ready to be publicly visible on
                                    the Resilience Web homepage?
                                  </FormHelperText>
                                </FormControl>
                              )
                            }}
                          </Field>
                        </chakra.div>

                        <Field name="image">
                          {({ field, form }: FieldProps) => (
                            <ImageUpload
                              field={field}
                              form={form}
                              formProps={props}
                              helperText={`This should be a picture that best represents ${webData?.title}`}
                            />
                          )}
                        </Field>

                        <Button
                          bg="rw.700"
                          colorScheme="rw.700"
                          mt={4}
                          variant="solid"
                          isDisabled={!props.isValid || !props.dirty}
                          isLoading={isPending}
                          type="submit"
                          _hover={{ bg: 'rw.900' }}
                        >
                          Update
                        </Button>
                      </Form>
                    )
                  }}
                </Formik>
              </Box>
            </Box>
          </Stack>
        </Box>
      </LayoutContainer>
    </>
  )
}
