import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    type: '',
    equipment: [],
    location: '',
  },
  reducers: {
    changeType(state, action) {
      return {
        ...state,
        type: action.payload,
      };
    },
    changeEquipment(state, action) {
      return {
        ...state,
        equipment: action.payload,
      };
    },
    changeLocation(state, action) {
      return {
        ...state,
        location: action.payload,
      };
    },
  },
});

export const { changeType, changeEquipment, changeLocation } =
  filterSlice.actions;
