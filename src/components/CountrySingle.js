import React from "react";
import { Link } from "react-router-dom";

const CountrySingle = ({ country, data }) => {
  let languages = [];

  if (country.languages) {
    languages = Object.entries(country.languages).map(([key, value]) => value);
  }
  const borders = country.borders;
  let borderIndex = [];

  if (borders) {
    borderIndex = data.filter((countries) => borders.includes(countries.cca3));
  }

  let populationValue;

  if (country.population) {
    populationValue = new Intl.NumberFormat("en-US").format(country.population);
  }

  if ("scrollRestoration" in window.history) {
    window.history.scrollRestoration = "manual";
  }

  console.log(country);

  return (
    <article className="flex overflow-hidden h-full w-full text-base">
      <div className="flex flex-1 items-center flex-col 2lg:flex-row gap-y-12 2lg:gap-y-0 2lg:gap-x-4 3lg:gap-x-28 h-auto">
        <div className="bg-white dark:bg-dm-dBlue shadow-custom-1 flex-1">
          <img
            src={country.flags.svg}
            alt=""
            className="object-cover w-screen ssm:w-full aspect-auto ssm:aspect-video md:aspect-auto h-full min-h-[200px] max-h-[200px] mdsm:min-h-[300px] mdsm:max-h-[300px] md:min-h-[400px] md:max-h-[400px]"
          />
        </div>
        <div className="flex flex-col 2lg:p-6 gap-y-8 flex-1 w-full lg:w-5/6 2lg:w-auto">
          <h3 className="font-extrabold text-3xl">
            {country.name.common ? country.name.common : "N/A"}
          </h3>
          <div className="flex flex-col sm:flex-row sm:justify-between gap-y-12 sm:gap-y-0 2lg:justify-start sm:gap-x-4 2lg:gap-x-12 3lg:gap-x-10 mb-4 sm:mb-8">
            <div className="flex 2lg:w-6/12 flex-col gap-y-2">
              <p>
                <span className="font-bold ">Native Name: </span>
                {country.name.nativeName
                  ? Object.keys(country.name.nativeName)[2]
                    ? country.name.nativeName[
                        Object.keys(country.name.nativeName)[2]
                      ].common
                    : country.name.nativeName[
                        Object.keys(country.name.nativeName)[0]
                      ].common
                  : "N/A"}
              </p>
              <p>
                <span className="font-bold">Population: </span>
                {country.population ? populationValue : "N/A"}
              </p>
              <p>
                <span className="font-bold">Region: </span>
                {country.region ? country.region : "N/A"}
              </p>
              <p>
                <span className="font-bold">Sub Region: </span>
                {country.subregion ? country.subregion : "N/A"}
              </p>
              <p>
                <span className="font-bold">Capital: </span>
                {country.capital ? country.capital : "N/A"}
              </p>
            </div>
            <div className="flex 2lg:w-6/12 flex-col gap-y-2">
              <p>
                <span className="font-bold">Top Level Domain: </span>
                {country.tld ? country.tld : "N/A"}
              </p>
              <p>
                <span className="font-bold">Currencies: </span>
                {country.currencies
                  ? country.currencies[Object.keys(country.currencies)[0]].name
                  : "N/A"}
              </p>
              <p>
                <span className="font-bold">Languages: </span>
                {languages.length !== 0
                  ? languages.reverse().join(", ")
                  : "N/A"}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-2 mdsm:gap-y-0 mdsm:flex-row mdsm:gap-x-4 mdsm:items-center">
            <p className="font-bold min-w-max">Border Countries:</p>
            <div className="flex p-1 gap-2 flex-wrap mdsm:items-center">
              {country.borders ? (
                borderIndex.map((border, index) => (
                  <Link key={index} to={`../country/${border.trueIndex}`}>
                    <span className="bg-white dark:bg-dm-dBlue py-[.15rem] text-sm ssm:text-base px-4 shadow-custom-4 shadow-shadow-custom">
                      {border.name.common}
                    </span>
                  </Link>
                ))
              ) : (
                <span className="bg-white dark:bg-dm-dBlue py-[.1rem] text-sm ssm:text-base px-4 shadow-custom-4 shadow-shadow-custom">
                  No Bordering Country
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CountrySingle;
