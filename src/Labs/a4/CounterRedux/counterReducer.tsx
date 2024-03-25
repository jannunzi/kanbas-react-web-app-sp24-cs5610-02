import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  count: 123,
};
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      const incrementBy = action.payload;
      state.count += incrementBy;
    },
    decrement: (state, { payload }) => {
      state.count -= payload;
    },
  },
});
export default counterSlice.reducer;
export const { increment, decrement } = counterSlice.actions;
