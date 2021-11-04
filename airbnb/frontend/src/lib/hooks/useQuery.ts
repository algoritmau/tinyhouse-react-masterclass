import { server } from 'lib/api'
import { useCallback, useEffect, useState } from 'react'

interface State<TData> {
  data: TData | null
  loading: boolean
  error: boolean
}

interface QueryResult<TData> extends State<TData> {
  refetch: () => void
}

export const useQuery = <TData = any>(query: string): QueryResult<TData> => {
  const [state, setState] = useState<State<TData>>({
    data: null,
    loading: false,
    error: false
  })

  // Memoize function result to avoid unnecessary re-fetches
  const setData = useCallback(() => {
    const fetchData = async () => {
      try {
        setState({ data: null, loading: true, error: false })

        const { data, errors } = await server.fetch<TData>({ query })

        if (errors && errors.length) throw new Error(errors[0].message)

        setState({ data, loading: false, error: false })
      } catch (error) {
        setState({ data: null, loading: false, error: true })
        throw console.error(error)
      }
    }

    fetchData()
  }, [query])

  useEffect(() => {
    setData()
  }, [setData])

  return { ...state, refetch: setData }
}
