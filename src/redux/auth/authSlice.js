import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, refresh, register } from './operations';

export const handlePending = state => state;
export const handleReject = state => ({
  ...state,
  isLoggedIn: false,
  isRefreshing: false,
});

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: builder =>
    builder
      .addCase(logIn.pending, handlePending)
      .addCase(logIn.fulfilled, (state, action) => ({
        ...state,
        ...action.payload,
        isLoggedIn: true,
      }))
      .addCase(logIn.rejected, handleReject)

      .addCase(register.pending, handlePending)
      .addCase(register.fulfilled, (state, action) => ({
        ...state,
        ...action.payload,
        isLoggedIn: true,
      }))
      .addCase(register.rejected, handleReject)

      .addCase(logOut.pending, handlePending)
      .addCase(logOut.fulfilled, state => ({
        ...state,
        user: { name: null, email: null },
        token: null,
        isLoggedIn: false,
      }))
      .addCase(logOut.rejected, handleReject)

      .addCase(refresh.pending, state => ({ ...state, isRefreshing: true }))
      .addCase(refresh.fulfilled, (state, action) => ({
        ...state,
        user: { ...action.payload },
        isLoggedIn: true,
        isRefreshing: false,
      }))
      .addCase(refresh.rejected, handleReject),
});
