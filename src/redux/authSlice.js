import { createSlice } from '@reduxjs/toolkit';
import { login, logout, refreshUser, register } from './authOperations';

// Slice Auth
const initialState = { 
    user: {
        name: null,
        email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing:false,
    loading: false,
    error: null,
 };

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      resetError: (state) => {
      state.error = null
    },  
    },
    extraReducers: {
        [register.pending](state) {
            state.loading = true;
            state.error = null;
        },
        [register.fulfilled](state, {payload}) {
            state.user = payload.user;
            state.token = payload.token;
            state.isLoggedIn = true;
            state.loading = false;
            state.error = null;
        },
        [register.rejected](state, {payload}) {
            state.loading = false;
            state.error = payload;
        },
        [login.pending](state) {
            state.loading = true;
            state.error = null;
        },
        [login.fulfilled](state, { payload }) {
            state.user = payload.user;
            state.token = payload.token;
            state.isLoggedIn = true;
            state.loading = false;
            state.error = null;
        },
        [login.rejected](state, {payload}) {
            state.loading = false;
            state.error = payload;
        },
        [logout.pending](state) {
            state.loading = true;
            state.error = null;
        },
        [logout.fulfilled](state) {
            state.user = {name: null,email: null,};
            state.token = null;
            state.isLoggedIn = false;
            state.loading = false;
            state.error = null;
        },
        [logout.rejected](state, {payload}) {
            state.loading = false;
            state.error = payload;
            
        },
        [refreshUser.pending](state) {
            state.isRefreshing = true;
            state.error = null;
        },
        [refreshUser.fulfilled](state, actions) {
            state.user = actions.payload;
            state.isLoggedIn = true;
            state.isRefreshing = false;
            state.error = null;
        },
        [refreshUser.rejected](state, {payload}) {
            state.isRefreshing = false;
            state.error = payload;
        },

    }
})
export default authSlice.reducer;
// Selectors
export const getIsLoggedIn = (state) => state.auth.isLoggedIn;
export const getUserName = (state) => state.auth.user.name;
export const getLoading = (state) => state.auth.loading;
export const getError = (state) => state.auth.error;
export const getIsRefreshing = (state) => state.auth.isRefreshing;

export const { resetError} = authSlice.actions
