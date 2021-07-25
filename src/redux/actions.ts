import Api from "../api"
import {Dispatch, State, GetState, Thunk} from "./store"
import { Action } from '@reduxjs/toolkit';
import { AnyAction } from '@reduxjs/toolkit';
import { ThunkDispatch } from "./store";

// TODO: change commit author and name on all commits

const api = new Api()

export const reset = () => ({
  type: "RESET"
})

// TODO: resets on a new input

export const load = () => ({
  type: "LOAD"
})

export const newSearch = () => (dispatch: Dispatch) => {
  // console.log('dispatch', dispatch);
  dispatch(reset())
  return (dispatch as ThunkDispatch)(fetchData())
}

export const fetchData = (): Thunk => async (dispatch: Dispatch, getState: GetState) => {
    const state = getState()
    const {parsedInput, page, data} = state
    const offset = page * 10
    // TODO: validate the offset is working as it should
    const url = `https://itunes.apple.com/search?term=${parsedInput}&offset=${offset}&limit=10`

    dispatch(load())

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
  payload: e.target.value 
})