import { createReducer } from '@reduxjs/toolkit';
import {
  increment,
  decrement,
  reset,
  setStep,
} from '../action/action';

const initialState = {
  count: 0,
  images: [],
  isActive: true,
};

export const mainReducer = createReducer(initialState, {
  [increment.type]: (state, action) => {
    return {
      ...state,
      count: state.count + action.payload,
    };
  },
  [decrement]: (state, { payload }) => ({
    ...state,
    count: state.count - payload,
  }),
  [reset]: () => initialState,
});

export const stepReducer = createReducer('1', {
  [setStep]: (_, action) => action.payload,
  [reset]: () => '1',
});
