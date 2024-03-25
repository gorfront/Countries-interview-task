import Search from "../Search/Search";
import "./Navbar.scss";
import { IValue } from "../Home/Home";
import { useNavigate } from "react-router-dom";
import { clearSearchInput } from "../../store/slices/search/searchSlice";
import { useAppDispatch } from "../hooks";

const Navbar: React.FC<IValue> = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleInputChange = () => {
    dispatch(clearSearchInput());
  };

  return (
    <div className="navbar">
      <div
        className="navbar__logo"
        onClick={() => {
          navigate("/");
          handleInputChange();
        }}
      >
        <img src="logo.png" alt="logo" />
      </div>
      <Search />
    </div>
  );
};

export default Navbar;
