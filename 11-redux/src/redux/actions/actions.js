import {
  incrementType,
  decrementType,
  setStepType,
  resetType,
} from '../types/types';

const increment = (value = 1) => ({
  type: incrementType,
  payload: value,
});
const decrement = (value = 1) => ({
  type: decrementType,
  payload: value,
});
const setStep = (value = 1) => {
  return { type: setStepType, payload: value };
};
const reset = () => ({ type: resetType });

export { increment, decrement, reset, setStep };
