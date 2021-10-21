interface Plan {
  id: string
  title: string
  description: string
  features: string[]
  price: number
  duration: number
  imageUrl: string
  rating: number
}

export interface PlansData {
  plans: Plan[]
}
