import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';

import {
  mainReducer,
  stepReducer,
} from './reducers/reducers';

// const incrementType = 'INCREMENT_TYPE';
// const decrementType = 'DECREMENT_TYPE';
// const setStepType = 'SET_STEP_TYPE';
// const resetType = 'RESET_TYPE';

// const increment = (value = 1) => ({
//   type: incrementType,
//   payload: value,
// });
// const decrement = (value = 1) => ({
//   type: decrementType,
//   payload: value,
// });
// const setStep = (value = 1) => {
//   return { type: setStepType, payload: value };
// };
// const reset = () => ({ type: resetType });

// const initialState = {
//   count: 0,
//   images: [],
//   isActive: true,
// };

// const mainReducer = (state = initialState, action) => {
//   const { type, payload } = action;
//   switch (type) {
//     case incrementType:
//       return { ...state, count: state.count + payload };
//     case decrementType:
//       return { ...state, count: state.count - payload };
//     case resetType:
//       return initialState;

//     default:
//       return state;
//   }
// };

// const stepReducer = (state = '1', action) => {
//   switch (action.type) {
//     case setStepType:
//       return action.payload;
//     case resetType:
//       return '1';

//     default:
//       return state;
//   }
// };
// export { increment, decrement, reset, setStep };

const rootReducer = combineReducers({
  step: stepReducer,
  main: mainReducer,
});

const enhancer = devToolsEnhancer();

const store = createStore(rootReducer, enhancer);

console.log('store :>> ', store);

export default store;
