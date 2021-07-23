// import { combineReducers } from 'redux'
import {ResponseData} from "./types"

// COUNTER REDUCER
// const counterReducer = (state = 0, { type }) => {
//   switch (type) {
//     case types.INCREMENT:
//       return state + 1
//     case types.DECREMENT:
//       return state - 1
//     case types.RESET:
//       return 0
//     default:
//       return state
//   }
// }

// INITIAL TIMER STATE
const initialState = {
    loading: false,
    parsedInput: "",
    input: "",
    data: [] as ResponseData[],
    fetchCount: 0,
    error: false
}

// TIMER REDUCER
// TODO: types
// TODO: refactor
const reducer = (state = initialState, action: any) => {
  // ...state.data
  // ...action.payload.data
  // action.payload.data
  
  switch (action.type) {

    
    case "FETCH_STARTED":
      return {
        ...state,
        loading: true
        // fetchCount: state.fetchCount + 1
      }
    case "TEST":
      return {
        ...state,
        fetchCount: state.fetchCount + 1,
        data: action.payload.data
        // fetchCount: state.fetchCount + 1
      }
    case "FETCH_SUCCESS":
      return {
        ...state,
        data: action.payload.data,
        // fetched: action.payload.data,
        loading: false,
        fetchCount: state.fetchCount + 1
      }
    case "FETCH_ERROR":
      return {
        ...state,
        error: true,
        loading: false,
        fetchCount: state.fetchCount - 1
      }
    case "CHANGE_INPUT":
      return {
        ...state,
        input: action.payload,
        parsedInput: action.payload.split(' ').join('+')
      }
    default:
      return state
  }
}

// COMBINED REDUCERS
// const reducers = {
//   counter: counterReducer,
//   timer: timerReducer,
// }

export default reducer

// export default combineReducers(reducers)
