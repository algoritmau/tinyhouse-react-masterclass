import { config } from 'dotenv'
config()

import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { typeDefs, resolvers } from './graphql'
import { connectDatabase } from './database'

const app = express()
const port = 9000

async function startApolloServer() {
  const db = await connectDatabase()
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => ({ db })
  })

  await server.start()

  server.applyMiddleware({ app, path: '/graphql' })
}

startApolloServer()

app.listen(port, () =>
  console.log(
    `🚀 App listening on port ${port}! Visit http://localhost:${port} to see the app.\nVisit http://localhost:${port}/graphql to access the GraphQL Playground.`
  )
)
