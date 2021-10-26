import { IResolvers } from '@graphql-tools/utils'

import { Database, Listing } from 'types'

export const listingResolvers: IResolvers = {
  Query: {
    listings: async (
      _root: undefined,
      _args: unknown,
      { db }: { db: Database }
    ): Promise<Listing[]> => {
      return await db.listingsAndReview.find({}).toArray()
    }
  },

  Mutation: {
    deleteListing: async (
      _root: undefined,
      { id }: { id: string },
      { db }: { db: Database }
    ): Promise<Listing> => {
      const deletedListing = await db.listingsAndReview.findOneAndDelete({
        _id: id
      })

      if (!deletedListing.value)
        throw new Error('Failed to delete listing. Listing not found')

      return deletedListing.value
    }
  },

  Listing: {
    id: (listing: Listing): string => listing._id
  }
}
