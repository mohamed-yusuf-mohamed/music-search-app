class Api {
  async fetch(url: string) {
    const api  = await fetch(url)
    const res = await api.json()

    return res.results.reduce((agg: any, el: any) => ({
      ...agg,
      [el.trackId]: {
        ...el
      }
    }), {})
  }
}

export default Api