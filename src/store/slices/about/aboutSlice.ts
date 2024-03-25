import { createSlice } from "@reduxjs/toolkit";
import { fetchAbout } from "./aboutAPI";

const aboutSlice = createSlice({
  name: "about",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAbout.fulfilled, (_state, { payload }) => {
      return payload;
    });
  },
});

export const aboutReducer = aboutSlice.reducer;

export const selectAbout = (state: { about: any }) => state.about;
