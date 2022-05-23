import { configureStore } from '@reduxjs/toolkit'
import { contactsFilterSlice } from './contactsFilterSlice'
import { contactsItemApi } from './contactsItemSlice';

export const store = configureStore({
    reducer: {
        [contactsItemApi.reducerPath]: contactsItemApi.reducer,
        filter: contactsFilterSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contactsItemApi.middleware),
});



