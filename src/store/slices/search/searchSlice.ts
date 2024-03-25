import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SearchInputState {
  value: string;
}

const initialState: SearchInputState = {
  value: "",
};

const searchInputSlice = createSlice({
  name: "searchInput",
  initialState,
  reducers: {
    updateSearchInput: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
    clearSearchInput: (state) => {
      state.value = "";
    },
  },
});

export const { updateSearchInput, clearSearchInput } = searchInputSlice.actions;

export default searchInputSlice.reducer;
