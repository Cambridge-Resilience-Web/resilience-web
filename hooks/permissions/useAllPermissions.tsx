import { useQuery } from '@tanstack/react-query'

async function fetchPermissionsRequest() {
    const response = await fetch('/api/permissions/all')
    const data = await response.json()
    const { editPermissions } = data
    return editPermissions
}

export default function usePermissions() {
    const {
        data: permissions,
        isLoading,
        isError,
    } = useQuery(['permissions'], fetchPermissionsRequest)

    return {
        permissions,
        isLoading,
        isError,
    }
}