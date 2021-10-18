import { Collection, Double, ObjectId } from 'mongodb'

export interface Plan {
  _id: ObjectId
  title: string
  description: string
  image: string
  features: string[]
  price: number
  duration: string
  rating: Double
}

export interface Database {
  plans: Collection<Plan>
}
