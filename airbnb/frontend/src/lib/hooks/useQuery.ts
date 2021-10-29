import { server } from 'lib/api'
import { useCallback, useEffect, useState } from 'react'

interface State<TData> {
  data: TData | null
}

export const useQuery = <TData = any>(query: string) => {
  const [state, setState] = useState<State<TData>>({ data: null })

  // Memoize function result to avoid unnecessary re-fetches
  const setData = useCallback(() => {
    const fetchData = async () => {
      const { data } = await server.fetch<TData>({ query })
      setState({ data })
    }

    fetchData()
  }, [query])

  useEffect(() => {
    setData()
  }, [setData])

  return { ...state, refetch: setData }
}
