import { connectDatabase } from '../database'
import { Listing } from '../lib/types'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const seedDatabase = async () => {
  try {
    const db = await connectDatabase()
    const listings: Listing[] = [
      {
        _id: 'id',
        listing_url: 'Text',
        name: 'Text',
        summary: 'Text',
        space: 'Text',
        description: 'Text',
        neighborhood_overview: 'Text',
        notes: 'Text',
        transit: 'Text',
        access: 'Text',
        interaction: 'Text',
        house_rules: 'Text',
        property_type: 'Text',
        room_type: 'Text',
        bed_type: 'Text',
        minimum_nights: 'Text',
        maximum_nights: 'Text',
        cancellation_policy: 'Text',
        last_scraped: 'Text',
        calendar_last_scraped: 'Text',
        first_review: 'Text',
        last_review: 'Text',
        accommodates: 1,
        bedrooms: 1,
        beds: 1,
        number_of_reviews: 1,
        bathrooms: 1,
        amenities: ['Text', 'Text'],
        price: 1,
        security_deposit: 1,
        cleaning_fee: 1,
        extra_people: 1,
        guests_included: 1,
        images: {
          thumbnail_url: '',
          medium_url: '',
          picture_url:
            'https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e...',
          xl_picture_url: ''
        },
        host: {
          host_id: '51399391',
          host_url: 'https://www.airbnb.com/users/show/51399391',
          host_name: 'Ana&Gonçalo',
          host_location: 'Porto, Porto District, Portugal',
          host_about:
            'Gostamos de passear, de viajar, de conhecer pessoas e locais novos, go...',
          host_response_time: 'within an hour',
          host_thumbnail_url:
            'https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7...',
          host_picture_url:
            'https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7...',
          host_neighbourhood: '',
          host_response_rate: 100,
          host_is_superhost: false,
          host_has_profile_pic: true,
          host_identity_verified: true,
          host_listings_count: 3,
          host_total_listings_count: 3,
          host_verifications: [
            'email',
            'phone',
            'reviews',
            'jumio',
            'offline_government_id',
            'government_id'
          ]
        },
        address: {
          street: 'Porto, Porto, Portugal',
          suburb: '',
          government_area:
            'Cedofeita, Ildefonso, Sé, Miragaia, Nicolau, Vitória',
          market: 'Porto',
          country: 'Portugal',
          country_code: 'PT',
          location: {
            type: 'Point',
            coordinates: [-8.61308, 41.1413],
            is_location_exact: false
          }
        },
        availability: {
          availability_30: 28,
          availability_60: 47,
          availability_90: 74,
          availability_365: 239
        },
        review_scores: {
          review_scores_accuracy: 9,
          review_scores_cleanliness: 9,
          review_scores_checkin: 10,
          review_scores_communication: 10,
          review_scores_location: 10,
          review_scores_value: 9,
          review_scores_rating: 89
        },
        reviews: [
          {
            _id: 'id',
            date: 'Date',
            listing_id: '10006546',
            reviewer_id: '51483096',
            reviewer_name: 'Cátia',
            comments:
              'A casa da Ana e do Gonçalo foram o local escolhido para a passagem de ...'
          }
        ]
      }
    ]

    for (const listing of listings) {
      await db.listingsAndReview.insertOne(listing)
    }

    console.log('[seed-database]: success')
  } catch (error) {
    console.log(error)
    throw new Error('Failed to seed database!')
  }
}
