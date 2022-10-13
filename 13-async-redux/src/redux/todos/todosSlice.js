import { createSlice } from '@reduxjs/toolkit';
import { addTodoOperation } from './todosOperations';

const initialState = {
  todos: { todos: [], todosError: '', todosLoading: false },
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
      state.todos.todos = payload;
    },
    addTodo: (state, { payload }) => {
      state.todos.todos = [...state.todos.todos, payload];
    },
    deleteTodo: (state, { payload }) => {
      //       state.todos = state.todos.filter(
      //         ({ id }) => id !== payload
      //       );
      return {
        ...state,
        todos: {
          ...state.todos,
          todos: state.todos.todos.filter(
            ({ id }) => id !== payload
          ),
        },
      };
    },
    updateTodo: (state, { payload }) => {
      state.todos.todos = state.todos.todos.map((el) =>
        el.id === payload.id ? payload : el
      );
    },
    onTodosLoading: (state) => {
      return {
        ...state,
        todos: { ...state.todos, todosLoading: true },
      };
    },
    offTodosLoading: (state) => {
      state.todos.todosLoading = false;
    },
    setTodosError: (state, { payload }) => {
      state.todos.todosError = payload;
    },
    clearTodosError: (state) => {
      state.todos.todosError = '';
    },
  },

  extraReducers: (builder) =>
    builder
      .addCase(addTodoOperation.pending, (state) => {
        state.todos.error = '';
        state.todos.todosLoading = true;
      })
      .addCase(
        addTodoOperation.fulfilled,
        (state, action) => {
          return {
            ...state,
            todos: {
              ...state.todos,
              todosLoading: false,
              todos: [...state.todos.todos, action.payload],
            },
          };
        }
      )
      .addCase(
        addTodoOperation.rejected,
        (state, { payload }) => {
          state.todos.todosLoading = false;
          state.todos.error = payload;
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
