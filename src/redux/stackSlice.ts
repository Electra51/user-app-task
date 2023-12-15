import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface stackState {
  value: number;
}

const initialState: stackState = {
  value: 0,
};

export const stackSlice = createSlice({
  name: "stack",
  initialState,
  reducers: {},
});

export const {} = stackSlice.actions;

export default stackSlice.reducer;
