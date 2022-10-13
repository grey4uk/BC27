import { createSlice } from '@reduxjs/toolkit';

const clickSlice = createSlice({
  name: 'click',
  initialState: 0,
  reducers: {
    click: (state) => {
      return state + 1;
    },
  },
});
export const { click } = clickSlice.actions;
export default clickSlice.reducer;
