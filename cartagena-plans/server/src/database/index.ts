import { MongoClient } from 'mongodb'

const URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER_URL}/${process.env.DB_NAME}?retryWrites=true&w=majority`

const client = new MongoClient(URI)

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const connectDatabase = async () => {
  await client.connect()

  const db = client.db('cartagena_plans')
  const plans = db.collection('test_plans')

  return {
    plans
  }
}
