import React from "react";
import { IoChevronDown, IoSearchOutline } from "react-icons/io5";
import HomeFeed from "./HomeFeed";

const Main = () => {
  return (
    <main className="sync-padding w-full flex flex-col gap-12 mb-8 dark:text-white">
      <h2 className="sr-only">Countries in the world</h2>
      <div className="flex justify-between items-center">
        <div
          id="search"
          className="w-5/12 flex items-center px-8 gap-x-6 bg-white dark:bg-dm-dBlue p-4 rounded-md shadow-custom-1"
        >
          <IoSearchOutline className="text-2xl text-slate-500 dark:text-white" />
          <input
            type="text"
            id="searchForCountry"
            className="flex border-none outline-none w-full text-base font-semibold text-slate-800 dark:text-white bg-transparent"
            placeholder="Search for a country..."
          />
          <label htmlFor="searchForCountry" className="sr-only">
            Search for a country
          </label>
        </div>
        <div className="accordion relative flex items-center gap-x-8 bg-white dark:bg-dm-dBlue p-4 px-6 rounded-md shadow-custom-2 text-slate-800 dark:text-white">
          <h2 className="font-semibold">Filter by Region</h2>
          <IoChevronDown className="text-black dark:text-white" />
          <ul className="absolute top-0 left-0 w-full h-auto flex flex-col items-start gap-y-4 bg-white dark:bg-dm-dBlue p-4 px-6 rounded-md shadow-custom-3 transform translate-y-1/2 -mt-12 font-semibold">
            <li>Africa</li>
            <li>America</li>
            <li>Asia</li>
            <li>Europe</li>
            <li>Oceania</li>
          </ul>
        </div>
      </div>
      <div>
        <HomeFeed />
      </div>
    </main>
  );
};

export default Main;
