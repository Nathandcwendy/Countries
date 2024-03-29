import { React, useRef, useContext, useState, useEffect } from "react";
import Country from "../components/Country";
import { IoChevronDown, IoSearchOutline } from "react-icons/io5";
import { FaArrowCircleDown, FaArrowCircleUp } from "react-icons/fa";
import Loading from "../components/Loading";
import DataContext from "../contexts/DataContext";
import ErrorPage from "../components/Error";

const HomeFeed = () => {
  const {
    isLoading,
    fetchError,
    finalResults,
    search,
    setSearch,
    filter,
    setFilter,
  } = useContext(DataContext);

  const accordionRef = useRef(null);
  const inputRef = useRef(null);

  const [splicedResults, setSplicedResults] = useState(finalResults || []);

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setSplicedResults(finalResults);
  }, [finalResults]);

  useEffect(() => {
    accordionRef.current?.classList.add("hidden");
  }, []);

  return (
    <main className="w-full text-black dark:text-neutral-300">
      <div className="sync-padding w-full flex flex-col gap-y-12 mb-12">
        <h2 className="sr-only">Countries in the world</h2>
        <div className="flex justify-between items-center flex-col gap-y-4 sm:gap-y-0 sm:flex-row">
          <div
            id="search"
            className="w-full sm:w-6/12 lg:w-5/12 flex items-center px-6 md:px-8 gap-x-6 bg-white dark:bg-dm-dBlue p-4 rounded-md shadow-custom-1 animate__animated animate__fadeInLeft animate__faster"
          >
            <IoSearchOutline className="text-2xl text-neutral-600 dark:text-neutral-300" />
            <input
              ref={inputRef}
              type="text"
              id="searchForCountry"
              className="flex border-none outline-none w-full text-base sm:text-sm font-semibold bg-transparent"
              placeholder="Search for a country..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              autoComplete="off"
            />
            <label htmlFor="searchForCountry" className="sr-only">
              Search for a country
            </label>
          </div>
          <div className="w-2/3 self-start sm:self-auto sm:w-1/3 md:w-5/12 2lg:w-2/12 min-w-max 3lg:w-max text-base md:text-sm relative z-10 select-none animate__animated animate__fadeInRight animate__faster">
            <div
              className=" relative flex items-center justify-between gap-x-12 bg-white dark:bg-dm-dBlue p-4 px-6 3lg:px-4 rounded-md shadow-custom-2 shadow-shadow-custom hover:cursor-pointer z-20 min-w-max font-medium "
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <h2 className="min-w-[14ch]">{filter}</h2>
              <IoChevronDown />
            </div>
            {menuOpen && (
              <ul
                ref={accordionRef}
                className="absolute flex top-[3.75rem] md:top-14 left-0 w-full h-0 flex-col items-start bg-white dark:bg-dm-dBlue p-0 rounded-md shadow-custom-3 shadow-shadow-custom transform z-10 box-border overflow-hidden animate-expandDown"
              >
                <li
                  className="hover:opacity-50 w-full transform hover:font-extrabold hover:text-lg md:hover:text-lg transition-all duration-200 delay-75 hover:cursor-pointer mb-2"
                  data-name="Africa"
                  onClick={(e) => {
                    setFilter(e.target.dataset.name);
                  }}
                >
                  Africa
                </li>
                <li
                  className="hover:opacity-50 w-full transform hover:font-extrabold hover:text-lg md:hover:text-lg transition-all duration-200 delay-75 hover:cursor-pointer mb-2"
                  data-name="America"
                  onClick={(e) => {
                    setFilter(e.target.dataset.name);
                  }}
                >
                  America
                </li>
                <li
                  className="hover:opacity-50 w-full transform hover:font-extrabold hover:text-lg md:hover:text-lg transition-all duration-200 delay-75 hover:cursor-pointer mb-2"
                  data-name="Asia"
                  onClick={(e) => {
                    setFilter(e.target.dataset.name);
                  }}
                >
                  Asia
                </li>
                <li
                  className="hover:opacity-50 w-full transform hover:font-extrabold hover:text-lg md:hover:text-lg transition-all duration-200 delay-75 hover:cursor-pointer mb-2"
                  data-name="Europe"
                  onClick={(e) => {
                    setFilter(e.target.dataset.name);
                  }}
                >
                  Europe
                </li>
                <li
                  className="hover:opacity-50 w-full transform hover:font-extrabold hover:text-lg md:hover:text-lg transition-all duration-200 delay-75 hover:cursor-pointer"
                  data-name="Oceania"
                  onClick={(e) => {
                    setFilter(e.target.dataset.name);
                  }}
                >
                  Oceania
                </li>
                {filter !== "Filter by Region" && (
                  <li
                    className="hover:opacity-50 w-full transform hover:font-extrabold hover:text-lg md:hover:text-lg hover:cursor-pointer transition-all duration-200 delay-75 mt-2"
                    data-name="All"
                    onClick={(e) => {
                      setFilter(e.target.dataset.name);
                    }}
                  >
                    All
                  </li>
                )}
              </ul>
            )}
            {!menuOpen && (
              <ul
                ref={accordionRef}
                className="absolute top-[3.75rem] md:top-14 left-0 w-full h-0 flex-col items-start bg-white dark:bg-dm-dBlue p-0 rounded-md shadow-custom-3 shadow-shadow-custom transform z-10 box-border overflow-hidden animate-contractUp"
              >
                <li
                  className="hover:opacity-50 w-full transform hover:font-extrabold hover:text-lg md:hover:text-lg transition-all duration-200 delay-75 hover:cursor-pointer mb-2"
                  data-name="Africa"
                  onClick={(e) => {
                    setFilter(e.target.dataset.name);
                  }}
                >
                  Africa
                </li>
                <li
                  className="hover:opacity-50 w-full transform hover:font-extrabold hover:text-lg md:hover:text-lg transition-all duration-200 delay-75 hover:cursor-pointer mb-2"
                  data-name="America"
                  onClick={(e) => {
                    setFilter(e.target.dataset.name);
                  }}
                >
                  America
                </li>
                <li
                  className="hover:opacity-50 w-full transform hover:font-extrabold hover:text-lg md:hover:text-lg transition-all duration-200 delay-75 hover:cursor-pointer mb-2"
                  data-name="Asia"
                  onClick={(e) => {
                    setFilter(e.target.dataset.name);
                  }}
                >
                  Asia
                </li>
                <li
                  className="hover:opacity-50 w-full transform hover:font-extrabold hover:text-lg md:hover:text-lg transition-all duration-200 delay-75 hover:cursor-pointer mb-2"
                  data-name="Europe"
                  onClick={(e) => {
                    setFilter(e.target.dataset.name);
                  }}
                >
                  Europe
                </li>
                <li
                  className="hover:opacity-50 w-full transform hover:font-extrabold hover:text-lg md:hover:text-lg transition-all duration-200 delay-75 hover:cursor-pointer"
                  data-name="Oceania"
                  onClick={(e) => {
                    setFilter(e.target.dataset.name);
                  }}
                >
                  Oceania
                </li>
                {filter !== "Filter by Region" && (
                  <li
                    className="hover:opacity-50 w-full transform hover:font-extrabold hover:text-lg md:hover:text-lg hover:cursor-pointer transition-all duration-200 delay-75 mt-2"
                    data-name="All"
                    onClick={(e) => {
                      setFilter(e.target.dataset.name);
                    }}
                  >
                    All
                  </li>
                )}
              </ul>
            )}
          </div>
        </div>
        <div className="w-full flex flex-col items-center">
          {/* <Loading /> */}
          {isLoading && !fetchError ? (
            <Loading />
          ) : !isLoading && fetchError ? (
            <ErrorPage fetchError={fetchError} />
          ) : !isLoading &&
            !fetchError &&
            finalResults.length === 0 &&
            search.length === 0 ? (
            <Loading />
          ) : (
            <section className="w-11/12 mdsm:w-[500px] md:w-full h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 3lg:grid-cols-4 gap-12 md:gap-x-[4.5rem] md:gap-y-[4.55rem]">
              <h2 className="sr-only">Countries</h2>
              {finalResults.length === 0 && search.length !== 0 ? (
                <p className="text-2xl col-span-2 tracking-widest font-bold">
                  No Country Matched Your Search!
                </p>
              ) : (
                <>
                  {splicedResults.map((dataUnit, index) => {
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

      <FaArrowCircleUp
        className="fixed bottom-[20%] right-2 sm:right-4 3xl:right-48 4xl:right-96 font-bold text-3xl lg:text-4xl hover:cursor-pointer z-10"
        onClick={() => {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        }}
      />
      <FaArrowCircleDown
        className="fixed bottom-[12.5%] right-2 sm:right-4 3xl:right-48 4xl:right-96 font-bold text-3xl lg:text-4xl hover:cursor-pointer z-10"
        onClick={() => {
          window.scrollTo({
            top: document.body.scrollHeight,
            left: 0,
            behavior: "smooth",
          });
        }}
      />
    </main>
  );
};

export default HomeFeed;
