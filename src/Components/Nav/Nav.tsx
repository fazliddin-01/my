import { FC } from "react";
import Logo from "../../assets/images/Logo.svg";
interface Icount {
  count: number;
  setCount: number;
}
const Navbar: FC<Icount> = () => {
  const handleLinkClick = (link: string): void => {
    console.log(link);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={Logo} alt="Nike Logo" />
      </div>
      <button onClick={() => handleLinkClick("Home")}>Home</button>
      <button onClick={() => handleLinkClick("Products")}>Products</button>
      <button onClick={() => handleLinkClick("Contact")}>Contact</button>
    </nav>
  );
};

export default Navbar;
