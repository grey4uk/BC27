import {
  incrementType,
  decrementType,
  setStepType,
  resetType,
} from '../types/types';

const initialState = {
  count: 0,
  images: [],
  isActive: true,
};

export const mainReducer = (
  state = initialState,
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case incrementType:
      return { ...state, count: state.count + payload };
    case decrementType:
      return { ...state, count: state.count - payload };
    case resetType:
      return initialState;

    default:
      return state;
  }
};

export const stepReducer = (state = '1', action) => {
  switch (action.type) {
    case setStepType:
      return action.payload;
    case resetType:
      return '1';

    default:
      return state;
  }
};
