import { createSlice } from '@reduxjs/toolkit';
import {
  signup,
  signin,
  signout,
  getCurrentUser,
} from './authOperations';

const initialState = {
  token: '',
  user: { mail: '' },
  isLogin: false,
  error: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCurrentUser(state, { payload }) {
      state.token = payload.accessToken;
      state.user.mail = payload.email;
      state.isLogin = true;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(signup.fulfilled, (state, { payload }) => {
        state.token = payload.accessToken;
        state.user.mail = payload.email;
        state.isLogin = true;
      })
      .addCase(signin.fulfilled, (state, { payload }) => {
        state.token = payload.accessToken;
        state.user.mail = payload.email;
        state.isLogin = true;
      })
      .addCase(signout.fulfilled, () => initialState)
      .addCase(
        getCurrentUser.rejected,
        (state, { payload }) => {
          state.error = payload;
        }
      ),

  // extraReducers: {
  //   [signup.fulfilled]: (state, { payload }) => {
  //     state.token = payload.accessToken;
  //     state.user.mail = payload.email;
  //     state.isLogin = true;
  //   },
  //   [signin.fulfilled]: (state, { payload }) => {
  //     state.token = payload.accessToken;
  //     state.user.mail = payload.email;
  //     state.isLogin = true;
  //   },
  //   [signout.fulfilled]: () => initialState,
  //   [getCurrentUser.rejected]: (state, { payload }) => {
  //     state.error = payload;
  //   },
  // },
});
export const { setCurrentUser } = authSlice.actions;
export default authSlice.reducer;
