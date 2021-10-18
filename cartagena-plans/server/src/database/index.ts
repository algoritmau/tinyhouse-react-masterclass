import { MongoClient } from 'mongodb'
import { Database } from 'types'

const URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER_URL}/${process.env.DB_NAME}?retryWrites=true&w=majority`

const client = new MongoClient(URI)

export const connectDatabase = async (): Promise<Database> => {
  await client.connect()

  const db = client.db(`${process.env.DB_NAME}`)

  return {
    plans: db.collection(`${process.env.DB_COLLECTION_NAME}`)
  }
}
