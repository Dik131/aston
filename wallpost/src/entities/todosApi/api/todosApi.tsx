import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Todo } from '../../todo/model/types';

export const todosApi = createApi({
  reducerPath: 'todosApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  tagTypes: ['Todos'],
  endpoints: (builder) => ({
    getTodos: builder.query<Todo[], void>({
      query: () => 'todos',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Todos' as const, id })),
              { type: 'Todos', id: 'LIST' },
            ]
          : [{ type: 'Todos', id: 'LIST' }],
    }),
    getTodosByUser: builder.query<Todo[], number>({
      query: (userId) => `users/${userId}/todos`,
      providesTags: (result, error, userId) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Todos' as const, id })),
              { type: 'Todos', id: `USER-${userId}` },
            ]
          : [{ type: 'Todos', id: `USER-${userId}` }],
    }),
    toggleTodo: builder.mutation<Todo, Partial<Todo>>({
      query: ({ id, ...patch }) => ({
        url: `todos/${id}`,
        method: 'PATCH',
        body: patch,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'Todos', id }],
    }),
  }),
});

export const { useGetTodosQuery, useGetTodosByUserQuery, useToggleTodoMutation } = todosApi;
