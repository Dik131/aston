import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Album } from '../../album/model/types';

export const albumsApi = createApi({
  reducerPath: 'albumsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  tagTypes: ['Albums'],
  endpoints: (builder) => ({
    getAlbums: builder.query<Album[], void>({
      query: () => 'albums',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Albums' as const, id })),
              { type: 'Albums', id: 'LIST' },
            ]
          : [{ type: 'Albums', id: 'LIST' }],
    }),
    getAlbumsByUser: builder.query<Album[], number>({
      query: (userId) => `users/${userId}/albums`,
      providesTags: (result, error, userId) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Albums' as const, id })),
              { type: 'Albums', id: `USER-${userId}` },
            ]
          : [{ type: 'Albums', id: `USER-${userId}` }],
    }),
  }),
});

export const { useGetAlbumsQuery, useGetAlbumsByUserQuery } = albumsApi;
