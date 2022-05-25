import { configureStore } from '@reduxjs/toolkit'
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { contactsFilterSlice } from './contactsFilterSlice'
import { contactsItemApi } from './contactsItemSlice';
import authReduser from './authSlice';

const persistAuthConfig = {
    key: 'auth',
    storage,
    whitelist: ['token']
};

export const store = configureStore({
    reducer: {
        auth: persistReducer(persistAuthConfig, authReduser),
        [contactsItemApi.reducerPath]: contactsItemApi.reducer,
        filter: contactsFilterSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(contactsItemApi.middleware),
});

export const persistor = persistStore(store);


