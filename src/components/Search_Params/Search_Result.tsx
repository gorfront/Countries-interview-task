import {
  selectCountries,
  fetchCountries,
} from "../../store/slices/countries/countriesSlice";
import { useEffect, useMemo, useState } from "react";
import "./Search_Result.scss";
import { IValue } from "../Home/Home";
import { useAppDispatch, useAppSelector } from "../hooks";
import { fetchCurrentCountry } from "../../store/slices/currentCountry/currentCountryAPI";
import { NavLink } from "react-router-dom";
import { clearSearchInput } from "../../store/slices/search/searchSlice";

const Search_Result: React.FC<IValue> = ({ setCountry }) => {
  const [currentCountry, setCurrentCountry] = useState("");
  const dispatch = useAppDispatch();
  const countries = useAppSelector(selectCountries);
  const searchInput = useAppSelector((state) => state.searchInput.value);

  useEffect(() => {
    dispatch(fetchCountries());
    if (currentCountry) {
      dispatch(fetchCurrentCountry(currentCountry.toLocaleLowerCase()));
    }
  }, [searchInput, dispatch, currentCountry]);

  const products = useMemo(() => {
    const initialCountries = countries.filter(
      (country: string) =>
        country.toLowerCase().indexOf(searchInput.toLowerCase()) !== -1
    );
    return initialCountries;
  }, [searchInput, countries]);

  const handleInputClear = () => {
    dispatch(clearSearchInput());
  };

  return (
    <ul className="Search_Result">
      {products.length > 0 ? (
        products.map((country: string) => (
          <li
            key={country}
            className="Search_Result--item"
            onClick={() => {
              setCurrentCountry(country);
              handleInputClear();
              setCountry(country);
            }}
          >
            <NavLink to="/country">{country}</NavLink>
          </li>
        ))
      ) : (
        <p className="Search_Result--error">
          Not a country by name: <i>{searchInput}</i>
        </p>
      )}
    </ul>
  );
};

export default Search_Result;
