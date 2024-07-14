import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Menubar from "../components/shared/Menubar/Menubar";
import Navbar from "../components/shared/Navbar/Navbar";
import SideBar from "../components/shared/SideBar";

const RootLayout = () => {
  const [theme, setTheme] = useState("light");

  useEffect(()=>{
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    }else{
      document.documentElement.classList.remove("dark")
    }
  },[theme])

  const handleThemeSwitch =()=>{
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <div className="pt-5 pb-20 bg-slate-500 dark:bg-black max-w-[1920px]">
      <Navbar handleThemeSwitch={handleThemeSwitch} theme={theme} />
      <div className="container_fluid pt-9 md:pt-14">
        <div className="lg:grid  lg:grid-cols-3 lg:gap-5 xl:gap-7">
          <div className="lg:col-span-1">
            <SideBar />
          </div>
          <main className="lg:col-span-2">
            <Menubar />
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default RootLayout;