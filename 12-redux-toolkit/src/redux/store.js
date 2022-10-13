import { configureStore } from '@reduxjs/toolkit';
// import {applyMiddleware} from 'redux'
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

const customMiddleware1 = (store) => (next) => (action) => {
  console.log('store :>> ', store);
  // store.count+action.payload>10&&alert("sum>10");
  next(action);
};
const customMiddleware2 = (store) => (next) => (action) => {
  console.log('store :>> ', store);
  // store.count+action.payload>10&&alert("sum>10");
  next(action);
};

const store = configureStore({
  // reducer: persistedReducer,
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
    })
      .concat(customMiddleware1)
      .concat(customMiddleware2),
});

export const persistor = persistStore(store);

export default store;
