import { combineReducers } from '@reduxjs/toolkit';
// import {
//   mainReducer,
//   stepReducer,
// } from './reducers/reducers';
// import {
//   mainReducer,
//   stepReducer,
// } from './toolkit/reducers/reducers';

import reducers from './toolkit/slice';
const { main, step } = reducers;

export const rootReducer = combineReducers({
  step,
  main,
});
