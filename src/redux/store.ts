import {ThunkAction, AnyAction, applyMiddleware, ThunkDispatch as _ThunkDispatch } from '@reduxjs/toolkit';
import reducer from "./reducer"
import thunk from "redux-thunk"
import { createStore } from 'redux';

export const store = createStore(reducer, applyMiddleware(thunk))

export type State = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;
export type ThunkDispatch = _ThunkDispatch<State, void, AnyAction>;
export type GetState = typeof store.getState;
export type Thunk<ReturnType = Promise<AnyAction>> = ThunkAction<
  ReturnType,
  State,
  unknown,
  AnyAction
>;

