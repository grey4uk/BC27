import { configureStore } from '@reduxjs/toolkit';
import clickReducer from './click/clickSlice';

import todosReducer from './todos/todosSlice';

export const store = configureStore({
  reducer: { todos: todosReducer, counter: clickReducer },
});
