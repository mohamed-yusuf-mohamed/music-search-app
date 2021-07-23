import faker from "faker"


// fetch music data
// TODO: types
// TODO: redux thunk ? like this ?
// import {Action, ActionCreator, Dispatch} from 'redux';


// import { createAsyncThunk } from "@reduxjs/toolkit";
// // import { Dispatch } from "react";

// // createAsyncThunk
// export const fetchData = createAsyncThunk(
//   'app/fetchData',
//   async (dispatch: Dispatch) => {
//     // const response = await fetchCount(amount);
//     // The value we return becomes the `fulfilled` action payload
//     const url = `https://itunes.apple.com/search?term=justin&offset=0&limit=10`

//     try {
//       const api  = await fetch(url)
//       const res = await api.json()
//       console.log('res', res);
//       return dispatch({
//         type: "FETCH_SUCCESS",
//         payload: {
//           data: res.results, 
//           loading: false 
//         }
//       })
//     } catch(err) {
//       // TODO: error details to store
//       return dispatch({
//         type: "FETCH_FAIL",
//         payload: {
//           error: true,
//           loading: false
//         }
//       })
//     }
//     // return response.data;
//   }
// );

export const test = () => async (dispatch: any, getState: any) => {
  const {data} = getState()
  const url = `https://itunes.apple.com/search?term=justin&offset=10&limit=10`


  const api  = await fetch(url)
  const res = await api.json()

  const resObj = res.results.reduce((agg: any, el: any) => ({
    ...agg,
    [el.trackId]: {
      ...el
    }
  }), {})
  const dataObj = Object.values(data).reduce((agg: any, el: any) => ({
    ...agg,
    [el.trackId]: {
      ...el
    }
  }), {})
  
  console.log('dataObj', dataObj);
  console.log('obj', resObj);
  dispatch({
    type: "TEST",
    payload: {
      data: {
        ...dataObj as object,
        ...resObj
      }
    }
  })

  
}

export const fetchData = () => async (dispatch: any, getState: any) => {
    const state = getState()
    const {parsedInput, fetchCount, data} = state
    // TODO: call fetchOffset
    const offset = fetchCount * 10
    // TODO: system for offsetting
    // `https://itunes.apple.com/search?term=${state.parsedInput}&offset=${(state.fetchCount-1)*10}&limit=${state.fetchCount * 10}`
    // console.log(`https://itunes.apple.com/search?term=${state.parsedInput}&offset=${(state.fetchCount-1)*10}&limit=${state.fetchCount * 10}`);
    // const url = `https://itunes.apple.com/search?term=${state.parsedInput}&offset=${(state.fetchCount-1)*10}&limit=${state.fetchCount * 10}`
    const url = `https://itunes.apple.com/search?term=${parsedInput}&offset=${offset}&limit=10`

    // TODO: loading state
    // if(fetchCount * 10 !== data.length || fetchCount === 0) {
    //   dispatch({
    //     type: "FETCH_STARTED"
    //   })
    // }

    const api  = await fetch(url)
    const res = await api.json()

    const resObj = res.results.reduce((agg: any, el: any) => ({
      ...agg,
      [el.trackId]: {
        ...el
      }
    }), {})
    const dataObj = Object.values(data).reduce((agg: any, el: any) => ({
      ...agg,
      [el.trackId]: {
        ...el
      }
    }), {})
    
    console.log('dataObj', dataObj);
    console.log('obj', resObj);
      return dispatch({
      type: "FETCH_SUCCESS",
      payload: {
        data: {
          ...dataObj as object,
          ...resObj
        }
      }
    })
    
    // try {
    //   const api  = await fetch(url)
    //   const res = await api.json()
    //   console.log('res', res);
    //   return dispatch({
    //     type: "FETCH_SUCCESS",
    //     payload: {
    //       data: [...data, ...res.results]
    //       // loading: false 
    //     }
    //   })
    // } catch(err) {
    //   console.log('err', err);
    //   // TODO: error details to store
    //   return dispatch({
    //     type: "FETCH_FAIL",
    //     // payload: {
    //     //   error: true,
    //     //   loading: false
    //     // }
    //   })
    // }
}
  

// // INCREMENT COUNTER BY 1
// // TODO: types
export const handleInput = (e: any) => ({ type: "CHANGE_INPUT", payload: e.target.value })


export {}