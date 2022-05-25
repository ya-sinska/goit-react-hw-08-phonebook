import { createSlice } from '@reduxjs/toolkit';
import { login, logout, refreshUser, register } from './authOperations';

// Slice Auth
const initialState = { 
    user: {
        name: null,
        email: null,
    },
    token: null,
    isLoggedIn:false, 
 };

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [register.fulfilled](state, actions) {
            state.user = actions.payload.user;
            state.token = actions.payload.token;
            state.isLoggedIn = true;
        },
        [login.fulfilled](state, actions) {
            state.user = actions.payload.user;
            state.token = actions.payload.token;
            state.isLoggedIn = true;
        },
        [logout.fulfilled](state, actions) {
            state.user = {name: null,email: null,};
            state.token = null;
            state.isLoggedIn = false;
        },
        [refreshUser.fulfilled](state, actions) {
            state.user = actions.payload;
            state.isLoggedIn = true;
        },

    }
})
export default authSlice.reducer;
// Selectors
export const getIsLoggedIn = (state) => state.auth.isLoggedIn;
export const getUserName = (state) => state.auth.user.name;