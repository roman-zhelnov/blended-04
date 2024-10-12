import { configureStore } from '@reduxjs/toolkit';
import { todosReducer } from './todoSlice';

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
import storage from 'redux-persist/lib/storage';
import { filterReducer } from './todoFilter';

const persistConfig = {
  key: 'todos',
  storage,
  whitelist: ['items'],
  blacklist: ['_persist'],
};

const persistedReducer = persistReducer(persistConfig, todosReducer);

export const store = configureStore({
  reducer: {
    todos: persistedReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
