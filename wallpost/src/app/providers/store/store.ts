import { configureStore } from '@reduxjs/toolkit';
import { postsApi } from '../../../entities/postsApi/api/postsApi';
import { commentsApi } from '../../../entities/commentsApi/api/commentsApi';
import { albumsApi } from '../../../entities/albumsApi/api/albumsApi';
import { todosApi } from '../../../entities/todosApi/api/todosApi';
import { postSlice } from '../../../entities/postSlice/model/slice/postSlice';
import { userSlice } from '../../../entities/userSlice/model/slice/userSlice';

export const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
    [commentsApi.reducerPath]: commentsApi.reducer,
    [albumsApi.reducerPath]: albumsApi.reducer,
    [todosApi.reducerPath]: todosApi.reducer,
    posts: postSlice.reducer,
    users: userSlice.reducer,
  },
  middleware: (getDefault) =>
    getDefault().concat(
      postsApi.middleware,
      commentsApi.middleware,
      albumsApi.middleware,
      todosApi.middleware,
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
