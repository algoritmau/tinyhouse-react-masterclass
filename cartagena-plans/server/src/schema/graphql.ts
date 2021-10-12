import { GraphQLObjectType, GraphQLSchema, GraphQLString } from 'graphql'

const query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    hello: {
      type: GraphQLString,
      resolve: () => '👋🏼 Hello from a GraphQL Query!'
    }
  }
})

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    hello: {
      type: GraphQLString,
      resolve: () => '👋🏼 Hello from a GraphQL Mutation!'
    }
  }
})

export const schema = new GraphQLSchema({
  query,
  mutation
})
