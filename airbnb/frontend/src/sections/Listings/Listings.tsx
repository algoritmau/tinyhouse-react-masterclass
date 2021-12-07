import { gql } from 'apollo-boost'
import { useMutation, useQuery } from 'react-apollo'
import { Listings as ListingsData } from './__generated__/Listings'
import {
  DeleteListing as DeleteListingData,
  DeleteListingVariables
} from './__generated__/DeleteListing'
import { ListingCard } from 'components/ListingCard'

const QUERY_LISTINGS = gql`
  query QUERY_LISTINGS {
    listings {
      id
      name
      summary
      room_type
      images {
        picture_url
      }
      address {
        country
        market
      }
      number_of_reviews
      review_scores {
        review_scores_rating
      }
    }
  }
`

const MUTATION_DELETE_LISTING = gql`
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
    await deleteListing({ variables: { id } })
    refetch()
  }

  const listings = data?.listings || null

  return (
    <main className="main">
      <h1 className="main__title" tabIndex={0}>
        {name}
      </h1>
      {error && <div>Something went wrong. Please try again later.</div>}
      {deleteListingError && (
        <div>Something went wrong. Please try again later.</div>
      )}
      {loading && <p>Loading...</p>}
      {deleteListingLoading && <p>Deleting listing...</p>}
      <ul className="listing-cards">
        {listings &&
          listings.map((listing) => (
            <li key={listing.id} className="listing-card-item">
              <ListingCard
                title={listing.name}
                description={listing.summary}
                roomType={listing.room_type}
                imageUri={listing.images.picture_url}
                city={listing.address.market}
                reviewsCount={listing.number_of_reviews}
                reviewsAverage={listing.review_scores?.review_scores_rating}
                price={listing.price}
              />
              {/* <span>{listing.name}</span>
              <button onClick={() => handleDeleteListing(listing.id)}>
                Delete Listing
              </button> */}
            </li>
          ))}
      </ul>
    </main>
  )
}
