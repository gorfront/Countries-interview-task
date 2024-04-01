import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Wrapper from "./wrapper/wrapper";
import { useState } from "react";
import About from "./components/About/About";

export interface ICountry {
  country: string;
}

const App = () => {
  const [country, setCountry] = useState("");

  const urlCountryName = `country=${country}`;

  return (
    <>
      <Routes>
        <Route path="/" element={<Wrapper {...{ setCountry }} />}>
          <Route index element={<Home {...{ setCountry }} />} />

          <Route
            path={urlCountryName}
            element={<About {...{ country, setCountry }} />}
          />
        </Route>
      </Routes>
    </>
  );
};

export default App;
