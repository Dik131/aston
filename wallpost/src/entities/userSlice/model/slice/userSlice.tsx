import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import type { RootState } from '../../../../app/providers/store/store';
import type { User } from '../../../user/model/types';

const usersAdapter = createEntityAdapter<User>();

const initialState = usersAdapter.getInitialState();


export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addMany: usersAdapter.addMany,
    setAll: usersAdapter.setAll,
    updateOne: usersAdapter.updateOne,
  },
});


export const usersSelectors = usersAdapter.getSelectors<RootState>(
  (state) => state.users,
);
