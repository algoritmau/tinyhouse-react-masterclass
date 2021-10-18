import * as dotenv from 'dotenv'
dotenv.config({ path: __dirname + '/.env' })

import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { typeDefs, resolvers } from './graphql'
import { connectDatabase } from './database'
// import { seedDatabase } from './temp/seed'

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

  // seedDatabase()
}

startApolloServer()

app.listen(port, () =>
  console.log(
    `🚀 App listening on port ${port}! Visit http://localhost:${port} to see the app.\nVisit http://localhost:${port}/graphql to access the GraphQL Playground.`
  )
)
