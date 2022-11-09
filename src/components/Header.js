import { React, useContext } from "react";
import { IoMoonOutline, IoMoonSharp } from "react-icons/io5";
import ThemeContext from "../contexts/ThemeContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <header className="sync-padding w-full flex justify-between items-center bg-white dark:bg-dm-dBlue py-6 shadow-custom-4 shadow-shadow-custom  dark:text-white">
      <Link preventScrollReset={true} to={"/"}>
        <h1 className="text-base ssm:text-2xl mdsm:text-2xl font-extrabold">
          Where in the world?
        </h1>
      </Link>
      <div
        className="flex gap-x-2 items-center hover:cursor-pointer"
        onClick={() => {
          theme === "dark" ? setTheme("light") : setTheme("dark");
        }}
      >
        {theme === "light" ? (
          <IoMoonOutline className="fill-blue-800" />
        ) : (
          <IoMoonSharp />
        )}
        <p className="font-bold text-base mdsm:text-base sr-only xsm:not-sr-only">
          Dark Mode
        </p>
      </div>
    </header>
  );
};

export default Header;
