export type Action<TData> =
  | { type: 'SET_DATA' }
  | { type: 'SET_DATA_SUCCESS'; payload: TData }
  | { type: 'SET_DATA_ERROR' }
