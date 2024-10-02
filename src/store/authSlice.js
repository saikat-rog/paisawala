// src/store/authSlice.js
import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: !!Cookies.get('token'),
    token: Cookies.get('token') || null,
  },
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.token = action.payload;
      Cookies.set('token', action.payload, { expires: 365 });
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.token = null;
      Cookies.remove('token'); // Remove cookie on logout
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
