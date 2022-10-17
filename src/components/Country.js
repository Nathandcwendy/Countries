import React from "react";

const Country = () => {
  return (
    <article className="flex flex-col overflow-hidden h-[350px] bg-white dark:bg-dm-dBlue rounded-lg shadow-custom-1">
      <div className="bg-white dark:bg-dm-dBlue h-1/2 w-full rounded-md shadow-custom-1">
        <img
          src="https://flagcdn.com/us.svg"
          alt=""
          className="h-full object-cover"
        />
      </div>
      <div className="h-1/2 flex flex-col p-6 gap-y-4">
        <h3 className="font-extrabold text-lg">United States of America</h3>
        <div className="flex flex-col gap-1">
          <p className="text-sm">
            <span className="font-bold text-sm">Population: </span>
            81,770,900
          </p>
          <p className="text-sm">
            <span className="font-bold text-sm">Region: </span>Europe
          </p>
          <p className="text-sm">
            <span className="font-bold text-sm">Capital: </span>Berlin
          </p>
        </div>
      </div>
    </article>
  );
};

export default Country;
