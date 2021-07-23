import Api from "../api"

// TODO: change commit author and name on all commits

// TODO: types;

const api = new Api()
export const fetchData = () => async (dispatch: any, getState: any) => {
    const state = getState()
    const {parsedInput, page, data} = state
    const offset = page * 10
    // TODO: validate the offset is working as it should
    const url = `https://itunes.apple.com/search?term=${parsedInput}&offset=${offset}&limit=10`

    try {
      const res = await api.fetch(url)
      return dispatch({
        type: "FETCH",
        payload: {
          data: {
            ...data,
            ...res
          }
        }
      })
    } catch(error) {
      // TODO: error details to store
      return dispatch({
        type: "ERROR",
        payload: {
          error: true,
          loading: false
        }
      })
    }
}
  
// // TODO: types
export const handleInput = (e: any) => ({ 
  type: "INPUT", 
  payload: e.target.value 
})