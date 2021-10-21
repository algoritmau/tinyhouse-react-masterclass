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

export interface DeletePlanData {
  deletePlan: Plan
}

export interface DeletePlanVariables {
  id: string
}
