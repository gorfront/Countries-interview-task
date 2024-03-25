import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { IValue } from "../components/Home/Home";

const Wrapper: React.FC<IValue> = ({ setCountry }) => {
  return (
    <>
      <Navbar {...{ setCountry }} />
      <Outlet />
      <div className="line"></div>
      <Footer />
    </>
  );
};

export default Wrapper;
