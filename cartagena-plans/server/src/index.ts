import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { typeDefs, resolvers } from './graphql'

const app = express()
const port = 9000

async function startApolloServer() {
  const apolloServer = new ApolloServer({ typeDefs, resolvers })

  await apolloServer.start()

  apolloServer.applyMiddleware({ app, path: '/graphql' })
}

startApolloServer()

app.listen(port, () =>
  console.log(
    `🚀 App listening on port ${port}! Visit http://localhost:${port} to see the app.\nVisit http://localhost:${port}/graphql to access the GraphQL Playground.`
  )
)
