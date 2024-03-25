import React from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { updateSearchInput } from "../../store/slices/search/searchSlice";
import "./Search.scss";

const Search: React.FC = () => {
  const searchInput = useAppSelector((state) => state.searchInput.value);
  const dispatch = useAppDispatch();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateSearchInput(event.target.value));
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search for Country"
        className="search__input"
        value={searchInput}
        onChange={handleInputChange}
      />
      <button role="button" className="search__btn">
        Search
      </button>
    </div>
  );
};

export default Search;
