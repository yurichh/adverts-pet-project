import { createSlice } from '@reduxjs/toolkit';
import { fetchAdverts, addToFavorite, removeFromFavorite } from './operations';

const handlePending = state => ({ ...state, isLoading: true });
const handleReject = (state, action) => ({
  ...state,
  isLoading: false,
  error: action.payload,
});

export const advertsSlice = createSlice({
  name: 'adverts',
  initialState: {
    items: [],
    favorites: [],
    isLoading: false,
    error: null,
    lastPage: true,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchAdverts.pending, handlePending)
      .addCase(fetchAdverts.fulfilled, (state, action) => {
        if (action.payload.firstPage)
          return {
            ...state,
            items: action.payload.data,
            isLoading: false,
            error: null,
            lastPage: action.payload.lastPage,
          };
        return {
          ...state,
          items: [...state.items, ...action.payload.data],
          isLoading: false,
          error: null,
          lastPage: action.payload.lastPage,
        };
      })
      .addCase(fetchAdverts.rejected, handleReject)

      .addCase(addToFavorite.pending, handlePending)
      .addCase(addToFavorite.fulfilled, (state, action) => {
        return {
          ...state,
          favorites: [...state.favorites, action.payload],
          isLoading: false,
          error: null,
        };
      })
      .addCase(addToFavorite.rejected, handleReject)

      .addCase(removeFromFavorite.fulfilled, (state, action) => {
        return {
          ...state,
          favorites: state.favorites.filter(
            item => item._id !== action.payload
          ),
          isLoading: false,
          error: null,
        };
      }),
});
