import Main_About from "../Main_About/Main_About";
import Main_Diagram from "../Main_Diagram/Main_Diagram";
import "./Main.scss";

const Main = () => {
  return (
    <div className="main">
      <Main_About />
      <Main_Diagram />
    </div>
  );
};

export default Main;
