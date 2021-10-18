import { IResolvers } from '@graphql-tools/utils'

import { Database, Plan } from '../lib/types'
import { ObjectId } from 'mongodb'

export const resolvers: IResolvers = {
  Query: {
    plans: async (
      _root: undefined,
      _args: unknown,
      { db }: { db: Database }
    ): Promise<Plan[]> => {
      return await db.plans.find({}).toArray()
    }
  },

  Mutation: {
    deletePlan: async (
      _root: undefined,
      { id }: { id: string },
      { db }: { db: Database }
    ): Promise<Plan> => {
      const deletedPlan = await db.plans.findOneAndDelete({
        _id: new ObjectId(id)
      })

      if (!deletedPlan.value)
        throw new Error('Failed to delete plan. Plan not found')

      return deletedPlan.value
    }
  },

  Plan: {
    id: (plan: Plan): string => plan._id.toString()
  }
}
