import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com'
// Add headers autorization with token
const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
    },
    unset() {
        axios.defaults.headers.common.Authorization = ''
    }
}
// operations
export const register = createAsyncThunk('auth/register', async (credentials, { rejectWithValue }) => {
    try {
        const { data } = await axios.post('/users/signup', credentials);
        token.set(data.token)
        return data
    } catch (error) {
        error.message = "Plese try again! Can't register new user whith this name and email!";
        return rejectWithValue(error.message); 
    }
})

export const login = createAsyncThunk('auth/login', async (credentials, { rejectWithValue }) => {
    try {
        const { data } = await axios.post('/users/login', credentials);
        token.set(data.token);
        return data
    } catch (error) {
      error.message = "Sorry, your name or email is incorrect! Try again!";
      return rejectWithValue(error.message);   
    }
})

export const logout = createAsyncThunk('auth/logout', async () => {
    try {
        await axios.post('/users/logout');
        token.unset();
    } catch (error) {
        console.log(error) 
    }
})

export const refreshUser = createAsyncThunk('auth/refresh', async (_,thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken===null) {
        return thunkAPI.rejectWithValue(); 
    }
    token.set(persistedToken);
    try {
        const {data} = await axios.get('/users/current');
        return data;
    } catch (error) {
        error.message="Something go wrong!!! Please LogIn or Register!"
        return thunkAPI.rejectWithValue(error.message);  
    }
})