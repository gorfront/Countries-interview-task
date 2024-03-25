import { combineReducers } from "@reduxjs/toolkit";
import { currentCountryReducer } from "./slices/currentCountry/currentCountrySlice";
import { aboutReducer } from "./slices/about/aboutSlice";
import searchReducer from "./slices/search/searchSlice";
import { countriesReducer } from "./slices/countries/countriesSlice";

const rootReducer = combineReducers({
  currentCountry: currentCountryReducer,
  about: aboutReducer,
  searchInput: searchReducer,
  countries: countriesReducer,
});

export default rootReducer;
