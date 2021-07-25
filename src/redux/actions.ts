import Api from "../api"
import {Dispatch, GetState, Thunk} from "./store"
import { AnyAction } from '@reduxjs/toolkit';
import { ThunkDispatch } from "./store";

const api = new Api()

export const reset = () => ({
  type: "RESET"
})

export const load = () => ({
  type: "LOAD"
})

export const newSearch = () => (dispatch: Dispatch) => {
  dispatch(reset())
  return (dispatch as ThunkDispatch)(fetchData())
}

export const fetchData = (): Thunk => async (dispatch: Dispatch, getState: GetState) => {
    const state = getState()
    const {parsedInput, page, data} = state
    const offset = page * 10
    const url = `https://itunes.apple.com/search?term=${parsedInput}&offset=${offset}&limit=10`

    dispatch(load())

    try {
      const res = await api.fetch(url)
      return dispatch({
        type: "FETCH",
        payload: {
          data: {
            ...res,
            ...data
          }
        }
      })
    } catch(err) {
      // add your logger here for the error
      return dispatch({
        type: "ERROR",
        payload: {
          error: true,
          loading: false
        }
      })
    }
}

export const handleInput = (e: React.ChangeEvent<HTMLInputElement>): AnyAction => ({ 
  type: "INPUT", 
  payload: {
    input: e.target.value 
  }
})