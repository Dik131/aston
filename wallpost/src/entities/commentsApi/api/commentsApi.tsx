import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Comment } from '../../comment/model/types';

export const commentsApi = createApi({
  reducerPath: 'commentsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  tagTypes: ['Comments'],
  endpoints: (builder) => ({
    getCommentsByPost: builder.query<Comment[], number>({
      query: (postId) => `posts/${postId}/comments`,
      providesTags: (result, error, postId) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Comments' as const, id })),
              { type: 'Comments', id: `POST-${postId}` },
            ]
          : [{ type: 'Comments', id: `POST-${postId}` }],
    }),
  }),
});

export const { useGetCommentsByPostQuery } = commentsApi;
