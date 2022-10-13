import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth/authSlice';

export const store = configureStore({
  reducer: authSlice.reducer,
  middleware: (getDefaultMidlewars) =>
    getDefaultMidlewars({
      serializableCheck: { ignoreActions: true },
    }),
});
