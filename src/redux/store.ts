import { configureStore, ThunkAction, Action, applyMiddleware } from '@reduxjs/toolkit';
import { combineReducers } from 'redux'
// import counterReducer from '../../DELETEME/counter/counterSlice';
import reducer from "./reducer"
import thunk from "redux-thunk"
import { createStore } from 'redux';

// const reducer = combineReducers({counterReducer, appReducer})
// import rootReducer from './reducers/index';

// Note: this API requires redux@>=3.1.0
// export const store = createStore(reducer, applyMiddleware(thunk));

export const store = createStore(reducer, applyMiddleware(thunk))

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//     app: appReducer
//   }
// });

// export const 

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
