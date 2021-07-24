import Api from "../api"
import {Dispatch, State, GetState, Thunk} from "./store"
import { Action } from '@reduxjs/toolkit';
import { AnyAction } from '@reduxjs/toolkit';

// TODO: change commit author and name on all commits

const api = new Api()

export const fetchData = (): Thunk => async (dispatch: Dispatch, getState: GetState) => {
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
    } catch(err) {
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

export const handleInput = (e: React.ChangeEvent<HTMLInputElement>): AnyAction => ({ 
  type: "INPUT", 
  payload: e.target.value 
})