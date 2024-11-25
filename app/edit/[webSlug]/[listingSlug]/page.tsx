import getListing from '../../../[subdomain]/[slug]/getListing'
import EditListing from './EditListing'

export default async function EditListingPage(props) {
  const params = await props.params
  const listing = await getListing({
    webSlug: params.webSlug,
    listingSlug: params.listingSlug,
  })

  if (!listing) {
    console.log(
      `[RW] Listing not found for slugs ${params.webSlug}, ${params.listingSlug}`,
    )
    return null
  }

  return <EditListing listing={listing} webSlug={params.webSlug} />
}
