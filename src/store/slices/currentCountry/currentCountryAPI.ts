import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCurrentCountry = createAsyncThunk(
  "currentCountry/fetchCurrentCountry",
  async (currentCountry: string) => {
    const res = await axios.get(
      `https://restcountries.com/v3.1/name/${currentCountry}?fullText=true`
    );
    const data = await res.data[0].name;

    return data;
  }
);
