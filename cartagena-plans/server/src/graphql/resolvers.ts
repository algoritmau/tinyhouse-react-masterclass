import { IResolvers } from '@graphql-tools/utils'
import { plans } from './plans'

export const resolvers: IResolvers = {
  Query: {
    plans: () => {
      return plans
    }
  },

  Mutation: {
    deletePlan: (_root: undefined, { id }: { id: string }) => {
      for (let i = 0; i < plans.length; i++) {
        if (plans[i].id === id) {
          return plans.splice(i, 1)[0]
        }
      }

      throw new Error('Plan not found')
    }
  }
}
