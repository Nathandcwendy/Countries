import { React, useRef, useContext } from "react";
import Country from "./Country";
import { IoChevronDown, IoSearchOutline } from "react-icons/io5";
import Loading from "./Loading";
import DataContext from "../contexts/DataContext";

const HomeFeed = () => {
  const { countries, isLoading, fetchError } = useContext(DataContext);
  const accordionRef = useRef(null);
  const handleAccordion = () => {
    accordionRef.current.classList.toggle("flex");
    accordionRef.current.classList.toggle("hidden");
  };
  return (
    <main className="w-full">
      <div className="sync-padding w-full flex flex-col gap-12 mb-8 dark:text-white">
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
          <div className="relative z-10">
            <div
              className=" relative flex items-center gap-x-8 bg-white dark:bg-dm-dBlue p-4 px-6 rounded-md shadow-custom-2 shadow-shadow-custom text-slate-800 dark:text-white hover:cursor-pointer z-20"
              onClick={handleAccordion}
            >
              <h2 className="font-semibold">Filter by Region</h2>
              <IoChevronDown className="text-black dark:text-white" />
            </div>
            <ul
              ref={accordionRef}
              className="absolute top-16 left-0 w-full h-auto hidden flex-col items-start gap-y-4 bg-white dark:bg-dm-dBlue p-4 px-6 rounded-md shadow-custom-3 shadow-shadow-custom transform font-semibold hover:cursor-pointer z-10"
            >
              <li className="hover:opacity-50 w-full transform hover:scale-110">
                Africa
              </li>
              <li className="hover:opacity-50 w-full transform hover:scale-110">
                America
              </li>
              <li className="hover:opacity-50 w-full transform hover:scale-110">
                Asia
              </li>
              <li className="hover:opacity-50 w-full transform hover:scale-110">
                Europe
              </li>
              <li className="hover:opacity-50 w-full transform hover:scale-110">
                Oceania
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full">
          {isLoading ? (
            <Loading />
          ) : (
            <section className="w-full h-auto grid grid-cols-4 gap-16">
              <h2 className="sr-only">Countries</h2>
              <>
                {countries.map((dataUnit, index) => (
                  <Country key={index} data={dataUnit} index={index} />
                ))}
              </>
            </section>
          )}
        </div>
      </div>
    </main>
  );
};

export default HomeFeed;
