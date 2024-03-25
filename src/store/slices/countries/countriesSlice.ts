import { createSlice } from "@reduxjs/toolkit";
import { fetchCountries } from "./countriesAPI";

const countriesSlice = createSlice({
  name: "countries",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCountries.fulfilled, (_state, { payload }) => {
      return payload;
    });
  },
});

export const countriesReducer = countriesSlice.reducer;

export const selectCountries = (state: { countries: any }) => state.countries;
export { fetchCountries };
