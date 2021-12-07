import { gql } from 'apollo-server-express'

export const typeDefs = gql`
  type Listing {
    id: String!
    listing_url: String!
    name: String!
    space: String!
    summary: String!
    description: String!
    neighborhood_overview: String!
    notes: String!
    transit: String!
    access: String!
    interaction: String!
    house_rules: String!
    property_type: String!
    room_type: String!
    bed_type: String!
    minimum_nights: String!
    maximum_nights: String!
    cancellation_policy: String!
    last_scraped: String!
    calendar_last_scraped: String!
    first_review: String!
    last_review: String
    accommodates: Int!
    bedrooms: Int!
    beds: Int!
    number_of_reviews: Int!
    bathrooms: Int!
    amenities: [String!]!
    price: Float!
    security_deposit: Int!
    cleaning_fee: Int!
    extra_people: Int!
    guests_included: Int!
    images: Image!
    host: Host!
    address: Address!
    availability: Availability!
    review_scores: ReviewScores
    reviews: [Review!]!
  }

  type Image {
    thumbnail_url: String
    medium_url: String
    picture_url: String!
    xl_picture_url: String
  }

  type Host {
    host_id: String!
    host_url: String!
    host_name: String!
    host_location: String!
    host_about: String!
    host_response_time: String!
    host_thumbnail_url: String
    host_picture_url: String
    host_neighbourhood: String
    host_response_rate: Int
    host_is_superhost: Boolean!
    host_has_profile_pic: Boolean!
    host_identity_verified: Boolean!
    host_listings_count: Int
    host_total_listings_count: Int
    host_verifications: [String!]!
  }

  type Address {
    street: String!
    suburb: String!
    government_area: String
    market: String
    country: String!
    country_code: String!
    location: Location!
  }

  type Location {
    type: String!
    coordinates: [Int!]!
    is_location_exact: Boolean!
  }

  type Availability {
    availability_30: Int!
    availability_60: Int!
    availability_90: Int!
    availability_365: Int!
  }

  type ReviewScores {
    review_scores_accuracy: Int
    review_scores_cleanliness: Int
    review_scores_checkin: Int
    review_scores_communication: Int
    review_scores_location: Int
    review_scores_value: Int
    review_scores_rating: Int
  }

  type Review {
    _id: String!
    date: String!
    listing_id: String!
    reviewer_id: String!
    reviewer_name: String!
    comments: String!
  }

  type Query {
    listings: [Listing!]!
  }

  type Mutation {
    deleteListing(id: String!): Listing!
  }
`
