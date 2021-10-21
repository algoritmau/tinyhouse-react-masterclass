interface Body {
  query: string
}

export const server = {
  fetch: async <TData = any>(body: Body) => {
    const res = await fetch('/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })

    return res.json() as Promise<{ data: TData }>
  }
}
