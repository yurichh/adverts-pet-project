import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL =
  'https://658bf2b8859b3491d3f5226d.mockapi.io/adverts/campers';

const perPageLimit = 4;

export const fetchAdverts = createAsyncThunk(
  'adverts/fetchAdverts',
  async (page, thunkAPI) => {
    try {
      const params = {
        form: '',
        // інші параметри пошуку, якщо потрібно
      };
      const allAdverts = await axios.get('', { params });
      const total = allAdverts.data.length;

      const { data } = await axios.get(`?page=${page}&limit=${perPageLimit}`, {
        params,
      });

      return {
        data,
        lastPage: Math.ceil(total / perPageLimit) === Number(page),
        firstPage: Number(page) === 1,
      };
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
