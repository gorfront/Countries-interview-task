import { useEffect, useState } from "react";
import { selectAbout } from "../../store/slices/about/aboutSlice";
import { useAppDispatch, useAppSelector } from "../hooks";
import "./About.scss";
import { fetchAbout } from "../../store/slices/about/aboutAPI";
import { ICountry } from "../../App";
import Search_Result from "../Search_Params/Search_Result";
import { IValue } from "../Home/Home";

interface IAbout {
  currencies: { [code: string]: { name: string; symbol: string } };
  name: { official: string };
  capital: string[];
  languages: { [code: string]: string };
  flag: string;
  population: number;
}

const About: React.FC<ICountry & IValue> = ({ country, setCountry }) => {
  const searchInput = useAppSelector((state) => state.searchInput.value);
  const dispatch = useAppDispatch();
  const about = useAppSelector(selectAbout);
  const details = about.map((item: IAbout) => {
    const currencyCode = Object.keys(item.currencies)[0];
    const currency = item.currencies[currencyCode];
    return {
      name: item.name.official,
      currencies: `${currency.name} - ${currency.symbol}`,
      capital: item.capital.join(", "),
      languages: Object.values(item.languages).join(", "),
      flag: item.flag,
      population: item.population,
    };
  })[0];

  useEffect(() => {
    if (country) {
      dispatch(fetchAbout(country));
    }
  }, [country]);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedDropdown, setSelectedDropdown] = useState<string | null>(null);

  const toggleDropdown = (dropdownId: string) => {
    setIsOpen(!isOpen);
    setSelectedDropdown(dropdownId);
  };

  return (
    <>
      {!searchInput.length ? (
        about.length > 0 ? (
          <div className="click-dropdown">
            {Object.entries(details).map(([key, value]) => (
              <div key={key} className="dropdown">
                <button
                  onClick={() => toggleDropdown(key)}
                  className="dropdown-button"
                >
                  <span>{key}</span>
                  <span className="dropdown-arrow"></span>
                </button>
                {isOpen && selectedDropdown === key && (
                  <div className="dropdown-list">
                    <div className="dropdown-item">
                      <span>{value as string}</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="loading"></div>
        )
      ) : (
        <Search_Result setCountry={setCountry} />
      )}
    </>
  );
};

export default About;
