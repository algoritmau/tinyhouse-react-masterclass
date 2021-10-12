import { gql } from 'apollo-server-express'

export const typeDefs = gql`
  type Plan {
    id: ID!
    title: String!
    description: String!
    image: String!
    features: [String!]!
    price: Int!
    duration: Int!
    rating: Int!
  }

  type Query {
    plans: [Plan!]!
  }

  type Mutation {
    deletePlan(id: ID!): Plan!
  }
`
