import { createSlice } from '@reduxjs/toolkit';
import { signup, signin, signout } from './authOperations';

const initialState = {
  token: '',
  user: { mail: '' },
  isLogin: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCurrentUser(state, { payload }) {
      state.token = payload.accessToken;
      state.user.mail = payload.email;
      state.isLogin = true;
    },
  },
  extraReducers: {
    [signup.fulfilled]: (state, { payload }) => {
      state.token = payload.accessToken;
      state.user.mail = payload.email;
      state.isLogin = true;
    },
    [signin.fulfilled]: (state, { payload }) => {
      state.token = payload.accessToken;
      state.user.mail = payload.email;
      state.isLogin = true;
    },
    [signout.fulfilled]: () => initialState,
  },
});
export const { setCurrentUser } = authSlice.actions;
