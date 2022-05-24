import { configureStore } from '@reduxjs/toolkit'
import { contactsFilterSlice } from './contactsFilterSlice'
import { contactsItemApi } from './contactsItemSlice';
import { authSlice } from './authSlice';

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        [contactsItemApi.reducerPath]: contactsItemApi.reducer,
        filter: contactsFilterSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contactsItemApi.middleware),
});



