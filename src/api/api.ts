import {Data} from "../redux/reducer"

class Api {
  async fetch(url = ""): Promise<Record<string, Data>> {
    try {
      const api  = await fetch(url)
      const res  = await api.json()
      return res.results.reduce((agg: Record<string, Data>, el: Data) => ({
        ...agg,
        [el.trackId]: {
          ...el
        }
      }), {})
    } catch(err) {
      throw err
    }
  }
}

export default Api