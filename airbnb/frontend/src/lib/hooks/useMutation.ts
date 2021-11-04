import { useReducer } from 'react'
import { server } from 'lib/api'
import { Action } from './types'

interface State<TData> {
  data: TData | null
  loading: boolean
  error: boolean
}

type MutationHook<TData, TVariables> = [
  (variables?: TVariables | undefined) => Promise<void>,
  State<TData>
]

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

export const useMutation = <TData = any, TVariables = any>(
  query: string
): MutationHook<TData, TVariables> => {
  const getReducer = reducer<TData>()

  const [state, dispatch] = useReducer(getReducer, {
    data: null,
    loading: false,
    error: false
  })

  const mutate = async (variables?: TVariables) => {
    try {
      dispatch({ type: 'SET_DATA' })

      const { data, errors } = await server.fetch<TData, TVariables>({
        query,
        variables
      })

      if (errors) throw new Error(errors[0].message)

      dispatch({ type: 'SET_DATA_SUCCESS', payload: data })
    } catch (error) {
      dispatch({ type: 'SET_DATA_ERROR' })
      throw console.error(error)
    }
  }

  return [mutate, state]
}
