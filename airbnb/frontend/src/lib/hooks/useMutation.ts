import { useState } from 'react'
import { server } from 'lib/api'

interface State<TData> {
  data: TData | null
  loading: boolean
  error: boolean
}

type MutationHook<TData, TVariables> = [
  (variables?: TVariables | undefined) => Promise<void>,
  State<TData>
]
/**
 * Hook for using GraphQL mutations.
 * @param query GraphQL mutation query.
 * @param TData The shape of data that can be returned from the mutation.
 * @param TVariables The shape of variables the mutation accepts.
 * @return [state, mutate]
 */
export const useMutation = <TData = any, TVariables = any>(
  query: string
): MutationHook<TData, TVariables> => {
  const [state, setState] = useState<State<TData>>({
    data: null,
    loading: false,
    error: false
  })

  const mutate = async (variables?: TVariables) => {
    try {
      setState({
        data: null,
        loading: true,
        error: false
      })

      const { data, errors } = await server.fetch<TData, TVariables>({
        query,
        variables
      })

      if (errors) throw new Error(errors[0].message)

      setState({
        data,
        loading: false,
        error: false
      })
    } catch (error) {
      setState({
        data: null,
        loading: false,
        error: true
      })
      throw console.error(error)
    }
  }

  return [mutate, state]
}
