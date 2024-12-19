import prisma from '@prisma-rw'
import { unfeatureListingTask } from '@trigger/unfeature-listing'

export async function PATCH(_request, props) {
  const params = await props.params
  try {
    const listingId = Number(params.id)

    const listing = await prisma.listing.update({
      where: {
        id: listingId,
      },
      data: {
        featured: true,
      },
    })

    const handle = await unfeatureListingTask.trigger({ listingId })
    console.log('[RW]Task is running with handle', handle.id)

    return Response.json({
      listing,
    })
  } catch (e) {
    console.error(`[RW] Unable to feature listing - ${e}`)
    return new Response(`Unable to feature listing - ${e}`, {
      status: 500,
    })
  }
}