import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import type { RootState } from '../../../../app/providers/store/store';
import type { Post } from '../../../post/model/types';

const postsAdapter = createEntityAdapter<Post>();

const initialState = postsAdapter.getInitialState();

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addMany: postsAdapter.addMany,
    setAll: postsAdapter.setAll,
    updateOne: postsAdapter.updateOne,
  },
});

export const postsSelectors = postsAdapter.getSelectors<RootState>(
  (state) => state.posts,
);
