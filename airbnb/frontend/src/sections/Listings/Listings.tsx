import { useMutation, useQuery } from 'lib/hooks'
import {
  DeleteListingData,
  DeleteListingVariables,
  ListingsData
} from './types'

const QUERY_LISTINGS = `
  query QUERY_LISTINGS {
    listings {
      id
      name
      description
      amenities
    }
  }
`

const MUTATION_DELETE_LISTING = `
  mutation MUTATION_DELETE_LISTING($id: String!) {
    deleteListing(id: $id) {
      id
      name
    }
  }
`

interface Props {
  name: string
}

export const Listings = ({ name }: Props) => {
  const { data, error, loading, refetch } =
    useQuery<ListingsData>(QUERY_LISTINGS)

  const [
    deleteListing,
    { loading: deleteListingLoading, error: deleteListingError }
  ] = useMutation<DeleteListingData, DeleteListingVariables>(
    MUTATION_DELETE_LISTING
  )

  const handleDeleteListing = async (id: string) => {
    await deleteListing({ id })
    refetch()
  }

  const listings = data?.listings || null

  return (
    <div>
      <h2>{name}</h2>
      {error && <div>Something went wrong. Please try again later.</div>}
      {deleteListingError && (
        <div>Something went wrong. Please try again later.</div>
      )}
      {loading && <p>Loading...</p>}
      {deleteListingLoading && <p>Deleting listing...</p>}
      <ul>
        {listings &&
          listings.map((listing) => (
            <li key={listing.id}>
              <span>{listing.name}</span>
              <button onClick={() => handleDeleteListing(listing.id)}>
                Delete Listing
              </button>
            </li>
          ))}
      </ul>
    </div>
  )
}
