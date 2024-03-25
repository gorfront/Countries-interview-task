import Footer_Navbar from "../Footer_Navbar/Footer_Navbar";
import Footer_Search from "../Footer_Search/Footer_Search";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <img src="logo.png" alt="logo" />
      </div>
      <div className="footer--search">
        <Footer_Search />
      </div>
      <ul className="footer--list">
        <Footer_Navbar />
      </ul>
    </div>
  );
};

export default Footer;
