import {Data} from "redux/reducer"
class Api {
  toRecord(data: Array) {
    return data.reduce((agg: Record<string, Data>, el: Data) => ({
      ...agg,
      [el.trackId]: {
        ...el
      }
    }), {})
  }
  async fetch(url = ""): Promise<Record<string, Data>> {
    try {
      const api  = await fetch(url)
      const res  = await api.json()
      // return res.results
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