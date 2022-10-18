import React from "react";

const CountrySingle = ({ country, data }) => {
  const languages = Object.entries(country.languages).map(
    ([key, value]) => value
  );

  const borders = country.borders;
  let borderIndex = [];

  if (borders) {
    borderIndex = data.filter((countries) => borders.includes(countries.cca3));
  }

  return (
    <article className="flex overflow-hidden h-full w-full">
      <div className="flex items-center gap-x-20 h-[400px]">
        <div className="bg-white dark:bg-dm-dBlue shadow-custom-1 flex-1">
          <img
            src={country.flags.svg}
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col p-6 gap-y-8 flex-1">
          <h3 className="font-extrabold text-3xl">{country.name.common}</h3>
          <div className="flex gap-x-28 mb-12">
            <div className="flex flex-col gap-y-2">
              <p className="text-sm">
                <span className="font-bold text-base">Native Name: </span>
                {
                  country.name.nativeName[
                    Object.keys(country.name.nativeName)[0]
                  ].official
                }
              </p>
              <p className="text-base">
                <span className="font-bold text-base">Population: </span>
                {country.population}
              </p>
              <p className="text-base">
                <span className="font-bold text-base">Region: </span>
                {country.region}
              </p>
              <p className="text-base">
                <span className="font-bold text-base">Sub Region: </span>
                {country.subregion}
              </p>
              <p className="text-base">
                <span className="font-bold text-base">Capital: </span>
                {country.capital}
              </p>
            </div>
            <div className="flex flex-col gap-y-2">
              <p className="text-base">
                <span className="font-bold text-base">Top Level Domain: </span>
                {country.tld}
              </p>
              <p className="text-base">
                <span className="font-bold text-base">Currencies: </span>
                {country.currencies[Object.keys(country.currencies)[0]].name}
              </p>
              <p className="text-base">
                <span className="font-bold text-base">Languages: </span>
                {languages.reverse().join(", ")}
              </p>
            </div>
          </div>
          <div className="flex gap-x-4 items-center">
            <p className="font-bold min-w-max">Border Countries:</p>
            <div className="flex gap-2 flex-wrap items-center">
              {country.borders ? (
                borderIndex.map((border, index) => (
                  <span
                    key={index}
                    className="bg-white dark:bg-dm-dBlue p-1 px-6 shadow-custom-4 shadow-shadow-custom"
                  >
                    {border.name.common}
                  </span>
                ))
              ) : (
                <span className="bg-white dark:bg-dm-dBlue p-1 px-6 shadow-custom-4 shadow-shadow-custom">
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
