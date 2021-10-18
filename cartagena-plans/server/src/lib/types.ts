import { Collection, ObjectId } from 'mongodb'

export interface Plan {
  _id: ObjectId
  title: string
  description: string
  features: string[]
  price: number
  duration: number
  imageUrl: string
  rating: number
}

export interface Database {
  plans: Collection<Plan>
}
