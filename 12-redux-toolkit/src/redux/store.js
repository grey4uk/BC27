import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { rootReducer } from './rootReducer';

const persistConfig = {
  key: 'main',
  storage,
  whitelist: ['main'],
  blacklist: ['step'],
};

const persistedReducer = persistReducer(
  persistConfig,
  rootReducer
);

const store = configureStore({
  reducer: {
    app: persistedReducer,
  },
  middleware: (gedDefaultMiddlewares) =>
    gedDefaultMiddlewares({
      serializableCheck: {
        ignoreActions: [
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
        ],
      },
      // serializableCheck: { ignoreActions: true },
    }),
});

export const persistor = persistStore(store);

export default store;
