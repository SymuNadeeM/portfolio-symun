import { useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { CgMenuRight } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import { MdOutlineLightMode } from "react-icons/md";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/wingLogo.png";
import { menubarData } from "../../../data/menubarData";

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
      <nav className="container_fluid h-[70px] flex items-center relative">
        <div className="w-full flex items-center justify-between">
          <div className="w-[120px] h-[45px] md:w-[200px] md:h-[55px]">
            <img src={logo} alt="logo" className="w-full h-full object-fill" />
          </div>

          <div className="flex items-center gap-5">
            <button
              onClick={handleThemeSwitch}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-black dark:bg-white shadow-xl text-logoColor"
            >
              {theme === "dark" ? (
                <MdOutlineLightMode />
              ) : (
                <BsFillMoonStarsFill className="text-white" />
              )}
            </button>
            <button
              className={`lg:hidden w-10 h-10 flex items-center justify-center rounded-full text-white ${
                isMenuOpen ? "bg-wDarkBlueBg dark:bg-[#36C2CE]" : "bg-[#36C2CE] dark:bg-wDarkBlueBg"
              }`}
              onClick={toggleMenu}
            >
              <div
                className={
                  isMenuOpen
                    ? "icon-transition icon-close"
                    : "icon-transition icon-open"
                }
              >
                {isMenuOpen ? (
                  <IoMdClose size={24} />
                ) : (
                  <CgMenuRight size={24} />
                )}
              </div>
            </button>
          </div>
        </div>
      </nav>
      <div
        id="menu-open"
        className={`bg-[#36C2CE] dark:bg-black absolute top-[90px] z-[999] left-[20px] right-5 md:left-14 md:right-14 lg:hidden transition-all duration-300 ease-in-out shadow-bottom-white rounded-bl-2xl rounded-br-2xl ${
          isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="px-14 py-8 space-y-2">
          {menubarData.map((menuItem, index) => (
            <li key={index} onClick={closeMenu} className="text-white dark:text-grayText">
              <NavLink
                to={menuItem.link}
                className={({ isActive }) =>
                  `flex  items-center font-medium duration-300 gap-3  ${
                    isActive ? "text-pickPrimary" : ""
                  }`
                }
              >
                <menuItem.icon />
                {menuItem.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
