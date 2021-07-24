import { TypedUseSelectorHook, useDispatch as _useDispatch, useSelector as _useSelector } from 'react-redux';
import type { State, Dispatch } from './store';
import { ThunkDispatch } from './store';

export const useDispatch = () => _useDispatch<ThunkDispatch>();
export const useSelector: TypedUseSelectorHook<State> = _useSelector;