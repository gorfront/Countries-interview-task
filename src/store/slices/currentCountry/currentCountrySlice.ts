import { createSlice } from "@reduxjs/toolkit";
import { fetchCurrentCountry } from "./currentCountryAPI";

const currentCountrySlice = createSlice({
    name: 'currentCountry',
    initialState: [],
    reducers: {},
    extraReducers: builder => builder.addCase(fetchCurrentCountry.fulfilled, (_state, { payload }) => {
            return payload
        })
    ,
})

export const currentCountryReducer = currentCountrySlice.reducer

export const selectCurrentCountry = (state: { currentCountry: any; }) => state.currentCountry