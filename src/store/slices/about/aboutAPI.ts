import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAbout = createAsyncThunk(
  "about/fetchAbout",
  async (countryName: string) => {
    const res = await axios.get(
      `https://restcountries.com/v3.1/name/${countryName}?fields=name,flag,population,capital,languages,currencies,borders?fullText=true`
    );
    const data = await res.data;

    return data;
  }
);
