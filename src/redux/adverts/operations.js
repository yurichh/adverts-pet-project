import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL =
  'https://658bf2b8859b3491d3f5226d.mockapi.io/adverts/campers';

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

      const { data } = await axios.get(`?page=${page}&limit=4`, {
        params,
      });

      console.log('----------------');
      console.log('data', '>>>', data);
      console.log('----------------');

      return {
        data,
        lastPage: Math.ceil(total / 4) === Number(page),
        firstPage: Number(page) === 1,
      };
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
