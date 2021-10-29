import { useState } from 'react'
import { server } from 'lib/api'
import {
  DeleteListingData,
  DeleteListingVariables,
  Listing,
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
  const [listings, setListings] = useState<Listing[] | null>(null)
  const getListings = async () => {
    const { data } = await server.fetch<ListingsData>({ query: QUERY_LISTINGS })

    setListings(data.listings.slice(0, 10)) // TODO: add useMemo to prevent re-fetching
  }

  const deleteListing = async (id: string) => {
    await server.fetch<DeleteListingData, DeleteListingVariables>({
      query: MUTATION_DELETE_LISTING,
      variables: { id }
    })

    getListings()
  }

  return (
    <div>
      <h2>{name}</h2>
      <button onClick={getListings}>View Listings</button>
      <ul>
        {listings &&
          listings.map((listing) => (
            <li key={listing.id}>
              <span>{listing.name}</span>
              <button onClick={() => deleteListing(listing.id)}>
                Delete Listing
              </button>
            </li>
          ))}
      </ul>
    </div>
  )
}
