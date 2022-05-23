import { createSlice } from '@reduxjs/toolkit';
// Slice Filter
const initialState = { inputValue: '', };

export const contactsFilterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        addFilter: (state, action) => {
            state.inputValue = action.payload
        } 
    }
})
export const { addFilter } = contactsFilterSlice.actions;

// Selectors
export const getFilterValue = (state) => state.filter.inputValue;