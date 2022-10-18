import React from "react";
import { Link } from "react-router-dom";

const Country = ({ data, index }) => {
  return (
    <Link to={`/country/${index}`}>
      <article
        className="flex flex-col overflow-hidden h-[400px] bg-white dark:bg-dm-dBlue rounded-lg shadow-custom-1"
        id={`country${index}`}
      >
        <div className="flex bg-white dark:bg-dm-dBlue h-1/2 w-full rounded-md shadow-custom-1 items-stretch">
          <img
            src={data.flags.svg}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="h-1/2 flex flex-col p-6 gap-y-4">
          <h3 className="font-extrabold text-lg">{data.name.common}</h3>
          <div className="flex flex-col gap-1">
            <p className="text-sm">
              <span className="font-bold text-sm">Population: </span>
              {data.population}
            </p>
            <p className="text-sm">
              <span className="font-bold text-sm">Region: </span>
              {data.region}
            </p>
            <p className="text-sm">
              <span className="font-bold text-sm">Capital: </span>
              {data.capital}
            </p>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default Country;
