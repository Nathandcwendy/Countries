import React from "react";
import { Link } from "react-router-dom";

const Country = ({ data, index }) => {
  let populationValue;

  if (data.population) {
    populationValue = new Intl.NumberFormat("en-US").format(data.population);
  }

  return (
    <Link to={`/country/${index}`}>
      <article
        className="flex flex-col overflow-hidden h-[450px] md:h-[375px] bg-white dark:bg-dm-dBlue rounded-lg shadow-custom-1"
        id={`country${index}`}
      >
        <div className="flex bg-white dark:bg-dm-dBlue h-1/2 w-full items-stretch">
          <img
            src={data.flags.svg}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="h-1/2 flex flex-col p-6 gap-y-4 text-base">
          <h3 className="font-extrabold text-xl">
            {data.name.common ? data.name.common : "N/A"}
          </h3>
          <div className="flex flex-col gap-2">
            <p>
              <span className="font-bold">Population: </span>
              {data.population ? populationValue : "N/A"}
            </p>
            <p>
              <span className="font-bold">Region: </span>
              {data.region ? data.region : "N/A"}
            </p>
            <p>
              <span className="font-bold">Capital: </span>
              {data.capital ? data.capital : "N/A"}
            </p>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default Country;
