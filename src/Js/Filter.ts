import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 15,
};

export const counter = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setCount: (state) => {
      state.count++;
    },
  },
});

export const { setCount } = counter.actions;
export default counter.reducer;
