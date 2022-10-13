import { createSlice } from '@reduxjs/toolkit';
import { addTodoOperation } from './todosOperations';

const initialState = {
  todos: [],
  todosError: '',
  todosLoading: false,
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  // extraReducers: {
  //   [addTodoOperation.fulfilled]: (state, action) => {
  //     return {
  //       ...state,
  //       todosLoading: false,
  //       todos: [...state.todos, action.payload],
  //     };
  //   },
  // },
  reducers: {
    getTodos: (state, { payload }) => {
      state.todos = payload;
    },
    addTodo: (state, { payload }) => {
      state.todos = [...state.todos, payload];
    },
    deleteTodo: (state, { payload }) => {
      //       state.todos = state.todos.filter(
      //         ({ id }) => id !== payload
      //       );
      return {
        ...state,
        todos: state.todos.filter(
          ({ id }) => id !== payload
        ),
      };
    },
    updateTodo: (state, { payload }) => {
      state.todos = state.todos.map((el) =>
        el.id === payload.id ? payload : el
      );
    },
    onTodosLoading: (state) => {
      return { ...state, todosLoading: true };
    },
    offTodosLoading: (state) => {
      state.todosLoading = false;
    },
    setTodosError: (state, { payload }) => {
      state.todosError = payload;
    },
    clearTodosError: (state) => {
      state.todosError = '';
    },
  },

  extraReducers: (builder) =>
    builder
      .addCase(addTodoOperation.pending, (state) => {
        state.error = '';
        state.todosLoading = true;
      })
      .addCase(
        addTodoOperation.fulfilled,
        (state, action) => {
          return {
            ...state,
            todosLoading: false,
            todos: [...state.todos, action.payload],
          };
        }
      )
      .addCase(
        addTodoOperation.rejected,
        (state, { payload }) => {
          state.todosLoading = false;
          state.error = payload;
        }
      ),
});

export const {
  setTodosError,
  clearTodosError,
  offTodosLoading,
  onTodosLoading,
  addTodo,
  deleteTodo,
  updateTodo,
  getTodos,
} = todosSlice.actions;

export default todosSlice.reducer;
