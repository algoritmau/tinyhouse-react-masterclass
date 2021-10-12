import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { schema } from './schema/graphql'

const app = express()
const port = 9000

async function startApolloServer() {
  const apolloServer = new ApolloServer({ schema })

  await apolloServer.start()

  apolloServer.applyMiddleware({ app, path: '/graphql' })
}

startApolloServer()

app.listen(port, () =>
  console.log(
    `🚀 App listening on port ${port}! Visit http://localhost:${port} to see the app.`
  )
)
