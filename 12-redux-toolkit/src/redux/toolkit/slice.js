import { createSlice } from '@reduxjs/toolkit';
import { reset } from './action/action';

const initialState = {
  count: 0,
  images: [],
  isActive: true,
};

const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    increment: (state, action) => ({
      ...state,
      count: state.count + action.payload,
    }),
    decrement: (state, { payload = 1 }) => {
      console.log('payload :>> ', payload);
      state.count = state.count - payload;
    },
    //     resetMain: () => ({ ...initialState, count: 2 }),
  },
  extraReducers: {
    [reset]: () => {
      console.log('reset');
      return initialState;
    },
  },
});

const stepSlice = createSlice({
  name: 'step',
  initialState: '1',
  reducers: {
    setStep: (_, { payload }) => payload,
  },
  extraReducers: {
    [reset]: () => '1',
  },
});

export const { setStep } = stepSlice.actions;
export const { increment, decrement, resetMain } =
  mainSlice.actions;

const reducer = {
  [mainSlice.name]: mainSlice.reducer,
  step: stepSlice.reducer,
};

export default reducer;
