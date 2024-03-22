import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL =
  'https://658bf2b8859b3491d3f5226d.mockapi.io/adverts/campers';

export const fetchAdverts = createAsyncThunk(
  'adverts/fetchAdverts',
  async (page, thunkAPI) => {
    try {
      const { data } = await axios.get(`?page=${page}&limit=4`);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addToFavorite = createAsyncThunk(
  'adverts/addAdvertToFavorite',
  async (advertData, thunkAPI) => {
    try {
      return advertData;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const removeFromFavorite = createAsyncThunk(
  'adverts/removeAdvertToFavorite',
  async (advertId, thunkAPI) => {
    try {
      return advertId;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
