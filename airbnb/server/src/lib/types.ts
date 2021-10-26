import { Collection } from 'mongodb'

export interface Listing {
  _id: string
  listing_url: string
  name: string
  summary: string
  space: string
  description: string
  neighborhood_overview: string
  notes: string
  transit: string
  access: string
  interaction: string
  house_rules: string
  property_type: string
  room_type: string
  bed_type: string
  minimum_nights: string
  maximum_nights: string
  cancellation_policy: string
  last_scraped: string // Date
  calendar_last_scraped: string // Date
  first_review: string // Date
  last_review: string // Date
  accommodates: number
  bedrooms: number
  beds: number
  number_of_reviews: number
  bathrooms: number
  amenities: string[]
  price: number
  security_deposit: number
  cleaning_fee: number
  extra_people: number
  guests_included: number
  images: Record<string, string>
  host: Host
  address: Address
  availability: Record<string, number>
  review_scores: Record<string, number>
  reviews: Review[]
}

interface Host {
  host_id: string
  host_url: string
  host_name: string
  host_location: string
  host_about: string
  host_response_time: string
  host_thumbnail_url: string
  host_picture_url: string
  host_neighbourhood: string
  host_response_rate: number
  host_is_superhost: boolean
  host_has_profile_pic: boolean
  host_identity_verified: boolean
  host_listings_count: number
  host_total_listings_count: number
  host_verifications: string[]
}

interface Address {
  street: string
  suburb: string
  government_area: string
  market: string
  country: string
  country_code: string
  location: Location
}

interface Location {
  type: string
  coordinates: number[]
  is_location_exact: boolean
}

interface Review {
  _id: string
  date: string // Date
  listing_id: string
  reviewer_id: string
  reviewer_name: string
  comments: string
}

export interface Database {
  listingsAndReview: Collection<Listing>
}
