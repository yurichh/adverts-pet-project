import { createSlice } from '@reduxjs/toolkit';

export const advertsSlice = createSlice({
  name: 'adverts',
  initialState: {
    favorites: [],
  },
  reducers: {
    addToFavorite: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFromFavorite: (state, action) => {
      state.favorites = state.favorites.filter(
        item => item._id !== action.payload
      );
    },
  },
});
