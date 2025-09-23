import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counterVal: 0 },
  reducers: {
    increment: (state) => {
      state.counterVal++;
    },
    derement: (state) => {
      
      state.counterVal--;
    },

    add: (state,action) => {
      state.counterVal += Number(action.payload)
    },

    subtract: (state,action) => {
     state.counterVal -= Number(action.payload)
    },
  },
});

export const counterAction = counterSlice.actions;

export default counterSlice;
