import { React, useRef, useContext } from "react";
import Country from "./Country";
import { IoChevronDown, IoSearchOutline } from "react-icons/io5";
import Loading from "./Loading";
import DataContext from "../contexts/DataContext";
import ErrorPage from "./ErrorPage";

const HomeFeed = () => {
  const {
    isLoading,
    fetchError,
    filteredResults,
    search,
    setSearch,
    filter,
    setFilter,
  } = useContext(DataContext);

  const accordionRef = useRef(null);
  const inputRef = useRef(null);

  const handleAccordion = () => {
    accordionRef.current.classList.toggle("flex");
    accordionRef.current.classList.toggle("hidden");
  };

  return (
    <main className="w-full">
      <div className="sync-padding w-full flex flex-col gap-y-12 mb-12 dark:text-white">
        <h2 className="sr-only">Countries in the world</h2>
        <div className="flex justify-between items-center flex-col gap-y-4 sm:gap-y-0 sm:flex-row">
          <div
            id="search"
            className="w-full sm:w-6/12 lg:w-5/12 flex items-center px-6 md:px-8 gap-x-6 bg-white dark:bg-dm-dBlue p-4 rounded-md shadow-custom-1"
          >
            <IoSearchOutline className="text-2xl text-slate-500 dark:text-white" />
            <input
              ref={inputRef}
              type="text"
              id="searchForCountry"
              className="flex border-none outline-none w-full text-base sm:text-xl font-semibold text-slate-800 dark:text-white bg-transparent"
              placeholder="Search for a country..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              autoComplete="off"
            />
            <label htmlFor="searchForCountry" className="sr-only">
              Search for a country
            </label>
          </div>
          <div className="w-2/3 self-start sm:self-auto sm:w-1/3 md:w-5/12 2lg:w-1/4 text-base md:text-lg relative z-10">
            <div
              className=" relative flex items-center justify-between gap-x-8 bg-white dark:bg-dm-dBlue p-4 px-6 rounded-md shadow-custom-2 shadow-shadow-custom text-slate-800 dark:text-white hover:cursor-pointer z-20 min-w-[213px]"
              onClick={handleAccordion}
            >
              <h2 className="font-semibold">{filter}</h2>
              <IoChevronDown className="text-black dark:text-white" />
            </div>
            {filter === "Filter By Region" ? (
              <ul
                ref={accordionRef}
                className="absolute top-[3.75rem] md:top-16 left-0 w-full h-auto hidden flex-col items-start gap-y-4 bg-white dark:bg-dm-dBlue p-4 px-6 rounded-md shadow-custom-4 shadow-shadow-custom transform font-semibold z-10"
              >
                <li
                  className="hover:opacity-50 w-full transform hover:font-extrabold hover:text-lg md:hover:text-xl  hover:cursor-pointer"
                  data-name="Africa"
                  onClick={(e) => {
                    setFilter(e.target.dataset.name);
                  }}
                >
                  Africa
                </li>
                <li
                  className="hover:opacity-50 w-full transform hover:font-extrabold hover:text-lg md:hover:text-xl  hover:cursor-pointer"
                  data-name="America"
                  onClick={(e) => {
                    setFilter(e.target.dataset.name);
                  }}
                >
                  America
                </li>
                <li
                  className="hover:opacity-50 w-full transform hover:font-extrabold hover:text-lg md:hover:text-xl  hover:cursor-pointer"
                  data-name="Asia"
                  onClick={(e) => {
                    setFilter(e.target.dataset.name);
                  }}
                >
                  Asia
                </li>
                <li
                  className="hover:opacity-50 w-full transform hover:font-extrabold hover:text-lg md:hover:text-xl  hover:cursor-pointer"
                  data-name="Europe"
                  onClick={(e) => {
                    setFilter(e.target.dataset.name);
                  }}
                >
                  Europe
                </li>
                <li
                  className="hover:opacity-50 w-full transform hover:font-extrabold hover:text-lg md:hover:text-xl  hover:cursor-pointer"
                  data-name="Oceania"
                  onClick={(e) => {
                    setFilter(e.target.dataset.name);
                  }}
                >
                  Oceania
                </li>
              </ul>
            ) : (
              <ul
                ref={accordionRef}
                className="absolute top-[3.75rem] md:top-16 left-0 w-full h-auto hidden flex-col items-start gap-y-4 bg-white dark:bg-dm-dBlue p-4 px-6 rounded-md shadow-custom-4 shadow-shadow-custom transform font-semibold z-10"
              >
                <li
                  className="hover:opacity-50 w-full transform hover:font-extrabold hover:text-lg md:hover:text-xl hover:cursor-pointer"
                  data-name="Africa"
                  onClick={(e) => {
                    setFilter(e.target.dataset.name);
                  }}
                >
                  Africa
                </li>
                <li
                  className="hover:opacity-50 w-full transform hover:font-extrabold hover:text-lg md:hover:text-xl hover:cursor-pointer"
                  data-name="America"
                  onClick={(e) => {
                    setFilter(e.target.dataset.name);
                  }}
                >
                  America
                </li>
                <li
                  className="hover:opacity-50 w-full transform hover:font-extrabold hover:text-lg md:hover:text-xl hover:cursor-pointer"
                  data-name="Asia"
                  onClick={(e) => {
                    setFilter(e.target.dataset.name);
                  }}
                >
                  Asia
                </li>
                <li
                  className="hover:opacity-50 w-full transform hover:font-extrabold hover:text-lg md:hover:text-xl hover:cursor-pointer"
                  data-name="Europe"
                  onClick={(e) => {
                    setFilter(e.target.dataset.name);
                  }}
                >
                  Europe
                </li>
                <li
                  className="hover:opacity-50 w-full transform hover:font-extrabold hover:text-lg md:hover:text-xl hover:cursor-pointer"
                  data-name="Oceania"
                  onClick={(e) => {
                    setFilter(e.target.dataset.name);
                  }}
                >
                  Oceania
                </li>
                <li
                  className="hover:opacity-50 w-full transform hover:font-extrabold hover:text-lg md:hover:text-xl hover:cursor-pointer"
                  data-name="All"
                  onClick={(e) => {
                    setFilter(e.target.dataset.name);
                  }}
                >
                  All
                </li>
              </ul>
            )}
          </div>
        </div>
        <div className="w-full flex flex-col items-center">
          {isLoading && !fetchError ? (
            <Loading />
          ) : !isLoading && fetchError ? (
            <ErrorPage fetchError={fetchError} />
          ) : (
            <section className="w-11/12 mdsm:w-[500px] md:w-full h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 3lg:grid-cols-4 gap-12 md:gap-16">
              <h2 className="sr-only">Countries</h2>
              {filteredResults.length === 0 && search !== "" ? (
                <p className="text-2xl col-span-2 tracking-widest font-bold">
                  No Country Matched Your Search!
                </p>
              ) : (
                <>
                  {filteredResults.map((dataUnit, index) => {
                    return (
                      <Country
                        key={index}
                        data={dataUnit}
                        index={dataUnit.trueIndex}
                      />
                    );
                  })}
                </>
              )}
            </section>
          )}
        </div>
      </div>
    </main>
  );
};

export default HomeFeed;
