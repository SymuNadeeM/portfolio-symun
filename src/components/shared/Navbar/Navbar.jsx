import { useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { CgMenuRight } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import { MdOutlineLightMode } from "react-icons/md";
import { Link } from "react-router-dom";
import logo from "../../../assets/wingLogo.png";

const Navbar = ({ handleThemeSwitch, theme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="container_fluid h-[70px] flex items-center border border-white relative">
        {/* <div className="absolute w-[300px] h-[300px] bg-gradient-to-r from-[#017373] to-[#aad9d1] rounded-full top-0 right-0 overflow-hidden blur-[90px] z-10 opacity-20"></div> */}
        <div className="w-full flex items-center justify-between">
          {/* logo */}
          <div className="w-[120px] h-[45px] md:w-[200px] md:h-[55px]">
            <img src={logo} alt="logo" className="w-full h-full object-fill" />
          </div>

          <div className="flex items-center gap-5">
            <button
              onClick={handleThemeSwitch}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-xl"
            >
              {theme === "dark" ? (
                <BsFillMoonStarsFill />
              ) : (
                <MdOutlineLightMode />
              )}
            </button>
            <button className="lg:hidden" onClick={toggleMenu}>
              <CgMenuRight />
            </button>
          </div>
        </div>
      </nav>
      {isMenuOpen && 
      <div id="menu-open"
        className="bg-blue-400 absolute top-[90px] transition-transform duration-300 ease-in-out z-[999] left-[20px] right-5 md:left-14 md:right-14 lg:hidden"
      >
        <div className="flex items-center justify-between h-[96px] border-b-[.5px] border-primary px-8">
          <Link to={"/"} className="text-2xl leading-9">
            Astral Labs
          </Link>
          <button onClick={toggleMenu}>
            <IoClose size={28} />
          </button>
        </div>
        <div className="px-8">
          <ul className="flex flex-col text-center space-y-2 mt-5 text-textOffWhite">
            <li className="nav-hover-small">
              <Link to={"#"} onClick={closeMenu}>
                Platform
              </Link>
            </li>
            <li className="nav-hover-small">
              <Link to={"#"} onClick={closeMenu}>
                Playground
              </Link>
            </li>
            <li className="nav-hover-small">
              <Link to={"#"} onClick={closeMenu}>
                Integrations
              </Link>
            </li>
            <li className="nav-hover-small">
              <Link to={"#"} onClick={closeMenu}>
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>
      }
    </>
  );
};

export default Navbar;
