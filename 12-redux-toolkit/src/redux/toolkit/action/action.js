import { createAction } from '@reduxjs/toolkit';

const increment = createAction('incrementType');
const decrement = createAction('decrementType');
const setStep = createAction('setStepType');
const reset = createAction('resetType');

export { increment, decrement, reset, setStep };
