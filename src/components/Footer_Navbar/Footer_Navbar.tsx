import "./Footer_Navbar.scss";

interface ILinks {
  id: string;
  text: string;
}

const Footer_Navbar: React.FC<ILinks[]> = () => {
  const FOOTER_LINKS = [
    {
      id: "1",
      text: "Logo 2022",
    },
    {
      id: "2",
      text: "Privacy policy",
    },
    {
      id: "3",
      text: "Cookies policy",
    },
    {
      id: "4",
      text: "Terms of use",
    },
  ];
  return (
    <>
      {FOOTER_LINKS.map((link) => (
        <li key={link.id} className="footer--links">
          {link.text}
        </li>
      ))}
    </>
  );
};

export default Footer_Navbar;
