import { server } from '../../lib/api'
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
  const getListings = async () => {
    const { data } = await server.fetch<ListingsData>({ query: QUERY_LISTINGS })

    console.log(data.listings)
  }

  const deleteListing = async () => {
    const { data } = await server.fetch<
      DeleteListingData,
      DeleteListingVariables
    >({
      query: MUTATION_DELETE_LISTING,
      variables: { id: '10115921' }
    })

    console.log(data.deleteListing.id)
  }

  return (
    <div>
      <h2>{name}</h2>
      <button onClick={getListings}>View Listings</button>
      <button onClick={deleteListing}>Delete Listing</button>
    </div>
  )
}
