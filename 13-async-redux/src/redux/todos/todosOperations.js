import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import {
  setTodosError,
  clearTodosError,
  offTodosLoading,
  onTodosLoading,
  // addTodo,
  deleteTodo,
  updateTodo,
  getTodos,
} from './todosSlice';

axios.defaults.baseURL =
  'https://62d65f0a15ad24cbf2d59671.mockapi.io/';

const start = (dispatch) => {
  dispatch(clearTodosError());
  dispatch(onTodosLoading());
};

const endError = (error, dispatch) => {
  dispatch(offTodosLoading());
  dispatch(setTodosError(error));
};

export const getTodosOperation = () => async (dispatch) => {
  try {
    start(dispatch);
    const { data } = await axios.get('/todos');
    dispatch(offTodosLoading());
    dispatch(getTodos(data));
  } catch (error) {
    endError(error.message, dispatch);
  }
};

// export const addTodoOperation =
//   (todoOptions) => async (dispatch) => {
//     const { todo, reset } = todoOptions;

//     try {
//       start(dispatch);
//       const { data } = await axios.post('/todos', todo);
//       dispatch(offTodosLoading());
//       dispatch(addTodo(data));
//       reset();
//     } catch (error) {
//       endError(error.message, dispatch);
//     }
//   };
export const addTodoOperation = createAsyncThunk(
  'todos/addTodoAsyncThunk',
  async (todoOptions, thunkApi) => {
    try {
      const { todo, reset } = todoOptions;
      const { data } = await axios.post('/todos', todo);
      reset();
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteTodoOperation =
  (id) => async (dispatch) => {
    try {
      start(dispatch);
      await axios.delete(`/todos/${id}`);
      dispatch(offTodosLoading());
      dispatch(deleteTodo(id));
    } catch (error) {
      endError(error.message, dispatch);
    }
  };

export const updateTodoOperation =
  (dataTodo) => async (dispatch) => {
    const { id } = dataTodo;
    try {
      start(dispatch);
      const { data: todo } = await axios.put(
        `/todos/${id}`,
        dataTodo
      );
      dispatch(offTodosLoading());
      dispatch(updateTodo(todo));
    } catch (error) {
      endError(error.message, dispatch);
    }
  };
