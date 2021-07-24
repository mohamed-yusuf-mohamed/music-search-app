import { AnyAction } from '@reduxjs/toolkit';

export interface Data {
  artistName: string,
  kind: string,
  trackName: string, 
  artworkUrl30: string,
  artworkUrl60: string   
}

interface State {
  loading: boolean,
  error: boolean,
  parsedInput: string,
  input: string,
  data: Record<string, Data>,
  page: number
}

const initialState = {
    loading: false,
    parsedInput: "",
    input: "",
    data: {},
    page: 0,
    error: false
}

const reducer = (state: State = initialState, action: AnyAction): State => {
  switch (action.type) {
    case "LOAD":
      return {
        ...state,
        loading: true
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
        loading: false,
        page: state.page - 1
      }
    case "INPUT":
      return {
        ...state,
        input: action.payload,
        parsedInput: action.payload.split(' ').join('+')
      }
    default:
      return state
  }
}

export default reducer
