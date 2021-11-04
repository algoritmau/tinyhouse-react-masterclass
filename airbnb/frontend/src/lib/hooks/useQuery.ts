import { useCallback, useEffect, useReducer } from 'react'
import { server } from 'lib/api'
import { Action } from './types'

interface State<TData> {
  data: TData | null
  loading: boolean
  error: boolean
}

interface QueryResult<TData> extends State<TData> {
  refetch: () => void
}

const reducer =
  <TData>() =>
  (state: State<TData>, action: Action<TData>): State<TData> => {
    switch (action.type) {
      case 'SET_DATA':
        return {
          ...state,
          loading: true
        }

      case 'SET_DATA_SUCCESS':
        return {
          data: action.payload,
          loading: false,
          error: false
        }

      case 'SET_DATA_ERROR':
        return {
          ...state,
          loading: false,
          error: true
        }

      default:
        throw new Error()
    }
  }

export const useQuery = <TData = any>(query: string): QueryResult<TData> => {
  const getReducer = reducer<TData>()

  const [state, dispatch] = useReducer(getReducer, {
    data: null,
    loading: false,
    error: false
  })

  // Memoize function result to avoid unnecessary re-fetches
  const setData = useCallback(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: 'SET_DATA' })

        const { data, errors } = await server.fetch<TData>({ query })

        if (errors && errors.length) throw new Error(errors[0].message)

        dispatch({ type: 'SET_DATA_SUCCESS', payload: data })
      } catch (error) {
        dispatch({ type: 'SET_DATA_ERROR' })
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
