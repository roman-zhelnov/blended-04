import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter: (state, action) => {
      return action.payload;
    },
  },
});

export const filterReducer = slice.reducer;

export const { setFilter } = slice.actions;

export const selectFilter = state => state.filter;
