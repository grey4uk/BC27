import { createSelector } from '@reduxjs/toolkit';

export const getCounterSelector = (state) => state.counter;

export const getTodosSelector = (state) =>
  state.todos.todos.todos;
export const getTodosLoadingSelector = (state) =>
  state.todos.todos.todosLoading;

export const getFilteredTodosSelector = (filter) =>
  createSelector(
    [getTodosSelector, getTodosLoadingSelector],
    (todos, loading) => {
      console.log('run>>>>>>>>>>>>');
      return filter
        ? todos.filter((el) =>
            el.title
              .toLowerCase()
              .includes(filter.toLowerCase())
          )
        : todos;
    }
  );
