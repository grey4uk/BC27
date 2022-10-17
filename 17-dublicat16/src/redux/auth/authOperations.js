import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

import { auth } from 'services/firebase';
import { setCurrentUser } from './authSlice';

export const signup = createAsyncThunk(
  'signup',
  async (user, thunkApi) => {
    const { email, password, reset } = user;
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      reset();
      console.log('result', result);
      return result.user;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const signin = createAsyncThunk(
  'signin',
  async (user, thunkApi) => {
    const { email, password, reset } = user;
    try {
      const result = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      //       console.log('result', result.user);
      reset();
      return result.user;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  'currentUser',
  (_, thunkApi) => {
    try {
      onAuthStateChanged(
        auth,
        (user) =>
          user && thunkApi.dispatch(setCurrentUser(user))
      );
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const signout = createAsyncThunk(
  'signout',
  async (_, thunkApi) => {
    try {
      await signOut(auth);
      //       console.log('result', result.user);
      return true;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
