import { MongoClient } from 'mongodb'
import { Database } from 'types'

const URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_PORT}/${process.env.DB_NAME}?retryWrites=true&w=majority&ssl=true`

const client = new MongoClient(URI)

export const connectDatabase = async (): Promise<Database> => {
  await client.connect()

  const db = client.db(`${process.env.DB_NAME}`)

  return {
    listingsAndReview: db.collection(`${process.env.DB_COLLECTION_NAME}`)
  }
}
