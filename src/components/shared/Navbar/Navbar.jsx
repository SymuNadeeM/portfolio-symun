import { BsFillMoonStarsFill } from "react-icons/bs";
import { MdOutlineLightMode } from "react-icons/md";
import logo from "../../../assets/wingLogo.png";

const Navbar = ({ handleThemeSwitch, theme }) => {
  return (
    <nav className="container_fluid h-[70px] flex items-center border border-white">
      {/* <div className="absolute w-[300px] h-[300px] bg-gradient-to-r from-[#017373] to-[#aad9d1] rounded-full top-0 right-0 overflow-hidden blur-[90px] z-10 opacity-20"></div> */}
      <div className="w-full flex items-center justify-between">
        {/* logo */}
        <div className="w-[120px] h-[45px] md:w-[200px] md:h-[55px]">
          <img src={logo} alt="logo" className="w-full h-full  object-fill" />
        </div>

        <button
          onClick={handleThemeSwitch}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-xl"
        >
          {theme === "dark" ? <BsFillMoonStarsFill /> : <MdOutlineLightMode />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
