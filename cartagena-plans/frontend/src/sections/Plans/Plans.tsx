import { server } from '../../lib/api'
import { DeletePlanData, DeletePlanVariables, PlansData } from './types'

const PLANS_QUERY = `
  query PLANS_QUERY{
    plans {
      id
      title
      description
      features
      price
      duration
      imageUrl
      rating
    }
  }
`

const DELETE_PLAN_MUTATION = `
  mutation DELETE_PLAN_MUTATION($id: ID!) {
    deletePlan(id: $id) {
      id
    }
  }
`

interface Props {
  title: string
}

export const Plans = ({ title }: Props) => {
  const getPlans = async () => {
    const { data } = await server.fetch<PlansData>({ query: PLANS_QUERY })

    console.log(data.plans)
  }

  const deletePlan = async () => {
    const { data } = await server.fetch<DeletePlanData, DeletePlanVariables>({
      query: DELETE_PLAN_MUTATION,
      variables: { id: '61718931777e269cb6382ec6' }
    })

    console.log(data.deletePlan.id)
  }

  return (
    <div>
      <h2>{title}</h2>
      <button onClick={getPlans}>Ver Planes</button>
      <button onClick={deletePlan}>Eliminar Plan</button>
    </div>
  )
}
