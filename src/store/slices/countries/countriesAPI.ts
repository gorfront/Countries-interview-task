import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCountries = createAsyncThunk(
  "countries/fetchCountries",
  async () => {
    const res = await axios.get(`https://restcountries.com/v3.1/all`);
    const data = await res.data.map(
      (country: { name: { common: string } }) => country.name.common
    );

    return data;
  }
);
