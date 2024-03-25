import React from "react";
import Main from "../Main/Main";
import "./Home.scss";
import Search_Params from "../Search_Params/Search_Result";
import { useAppSelector } from "../hooks";

export interface IValue {
  setCountry: React.Dispatch<React.SetStateAction<string>>;
}

const Home: React.FC<IValue> = ({ setCountry }) => {
  const searchInput = useAppSelector((state) => state.searchInput.value);

  return <>{searchInput.length > 0 ? <Search_Params {...{ setCountry }} /> : <Main />}</>;
};

export default Home;
