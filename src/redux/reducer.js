/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

export const filmSlice = createSlice({
  name: "film",
  initialState: {
    film: [],
  },
  reducers: {
    add: (state, action) => {
      const index = state.film.findIndex(
        (el) => el.imdbID === action.payload.imdbID
      );
      console.log(index);
      if (index === -1) state.film.push(action.payload);
    },
    remove: (state, action) => {
      const index = state.film.findIndex((el) => el.imdbID === action.payload);
      state.film.splice(index, 1);
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, remove } = filmSlice.actions;

export default filmSlice.reducer;