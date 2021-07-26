import { AnyAction } from '@reduxjs/toolkit';

export interface Data {
  artistName: string,
  kind: string,
  trackName: string, 
  artworkUrl100: string,
  trackId: number,
  [key: string]: string | number   
}

interface State {
  loading: boolean,
  error: boolean,
  parsedInput: string,
  input: string,
  data: Record<string, Data>,
  page: number
}

export const initialState = {
    loading: false,
    parsedInput: "",
    input: "",
    data: {},
    page: 0,
    error: false
}

const reducer = (state: State = initialState, action: AnyAction): State => {
  switch (action.type) {
    case "INPUT":
      return {
        ...state,
        input: action.payload.input,
        parsedInput: action.payload.input.split(' ').join('+')
      }
    case "LOAD":
      return {
        ...state,
        loading: true
      }
    case "RESET":
      return {
        ...state, 
        data: {},
        page: 0,
        error: false
      }
    case "FETCH":
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        page: state.page + 1
      }
    case "ERROR":
      return {
        ...state,
        error: true,
        loading: false
      }
    default:
      return state
  }
}

export default reducer
