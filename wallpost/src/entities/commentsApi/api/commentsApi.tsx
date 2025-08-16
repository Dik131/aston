import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Comment } from '../../comment/model/types';

export const commentsApi = createApi({
  reducerPath: 'commentsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  tagTypes: ['Comments'],
  endpoints: (builder) => ({
    getComments: builder.query<Comment[], void>({
      query: () => 'comments',
      providesTags: (result) =>
        result
          ? [...result.map(({ id }) => ({ type: 'Comments' as const, id })), { type: 'Comments', id: 'LIST' }]
          : [{ type: 'Comments', id: 'LIST' }],
    }),
    getCommentsByPostId: builder.query<Comment[], number>({
      query: (postId) => `posts/${postId}/comments`,
      providesTags: (result, error, postId) =>
        result ? [...result.map(({ id }) => ({ type: 'Comments' as const, id })), { type: 'Comments', id: `POST-${postId}` }] : [],
    }),
  }),
});

export const { useGetCommentsQuery, useGetCommentsByPostIdQuery } = commentsApi;
