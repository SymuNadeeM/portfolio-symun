import { NavLink } from "react-router-dom";
import { menubarData } from "../../../data/menubarData";

const Menubar = () => {
  return (
    <div className="text-right hidden lg:block">
      <div className="p-7.5 rounded-2xl bg-black inline-block">
        <nav>
          <ul className="flex items-center gap-3">
            {menubarData.map((menuItem, index) => (
              <li key={index} className="">
                <NavLink
                  to={menuItem.link}
                  className={({ isActive }) =>
                    `flex flex-col items-center w-[84px] h-[84px]  rounded-lg  justify-center font-medium transition duration-300 hover:bg-gradient-to-r from-[#fa5252] to-[#dd2476] hover:text-white ${
                      isActive ? "bg-gradient-to-r from-[#fa5252] to-[#dd2476] text-white" : "bg-[#212425]"
                    }`
                  }
                >
                  <menuItem.icon className="text-2xl mb-3" />
                  {menuItem.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Menubar;
