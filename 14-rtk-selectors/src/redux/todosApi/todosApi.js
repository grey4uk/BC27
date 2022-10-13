import {
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';

export const todosApi = createApi({
  reducerPath: 'todosApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://62d65f0a15ad24cbf2d59671.mockapi.io',
  }),
  tagTypes: ['todos'],
  endpoints: (builder) => {
    return {
      getTodos: builder.query({
        query: () => {
          return { url: '/todos', method: 'GET' };
        },
        providesTags: ['todos'],
      }),
      addTodo: builder.mutation({
        query: (todo) => {
          return {
            url: '/todos',
            method: 'POST',
            body: todo,
          };
        },
        invalidatesTags: ['todos'],
      }),
      deleteTodo: builder.mutation({
        query: (id) => {
          console.log('id', id);
          return { url: `/todos/${id}`, method: 'DELETE' };
        },
        invalidatesTags: ['todos'],
      }),
      updateTodo: builder.mutation({
        query: (todo) => {
          return {
            url: `/todos/${todo.id}`,
            method: 'PUT',
            body: todo,
          };
        },
        invalidatesTags: ['todos'],
      }),
    };
  },
});

export const {
  useLazyGetTodosQuery,
  useGetTodosQuery,
  useAddTodoMutation,
  useDeleteTodoMutation,
  useUpdateTodoMutation,
} = todosApi;
