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
          ? [...result.map(({ id }) => ({ type: 'Todos' as const, id })), { type: 'Todos', id: 'LIST' }]
          : [{ type: 'Todos', id: 'LIST' }],
    }),
    getTodosByUserId: builder.query<Todo[], number>({
      query: (userId) => `users/${userId}/todos`,
      providesTags: (result, error, userId) =>
        result ? [...result.map(({ id }) => ({ type: 'Todos' as const, id })), { type: 'Todos', id: `USER-${userId}` }] : [],
    }),
  }),
});

export const { useGetTodosQuery, useGetTodosByUserIdQuery } = todosApi;
