import { server } from '../../lib/api'
import { PlansData } from './types'

const PLANS_QUERY = `
  query {
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

interface Props {
  title: string
}

export const Plans = ({ title }: Props) => {
  const getPlans = async () => {
    const { data } = await server.fetch<PlansData>({ query: PLANS_QUERY })

    console.log(data.plans)
  }

  return (
    <div>
      <h2>{title}</h2>
      <button onClick={getPlans}>Ver Planes</button>
    </div>
  )
}
