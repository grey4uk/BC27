import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

// import todosReducer from './todos/todosSlice';
import { todosApi } from './todosApi/todosApi';

// const customMiddleware =
//   (store) => (next) => async (action) => {
//     console.log('store :>> ', store);
//     console.log('action :>> ', action);
//     // store.count+action.payload>10&&alert("sum>10");
//     // fetch().then.then((res)=>next({...action,payload:res})).catch.finally()
//     const newAction =
//       action.type === 'todos/getTodos'
//         ? {
//             ...action,
//             payload: [
//               ...action.payload,
//               { title: "I'm alive!!!!!!!!!!" },
//             ],
//           }
//         : action;
//     next(newAction);
//   };

export const store = configureStore({
  reducer: {
    [todosApi.reducerPath]: todosApi.reducer,
  },
  middleware: (getDefaultMiddlewares) => [
    ...getDefaultMiddlewares(),
    todosApi.middleware,
    // customMiddleware,
  ],
});

setupListeners(store.dispatch);
