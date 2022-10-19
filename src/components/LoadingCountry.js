import React from "react";

const LoadingCountry = () => {
  return (
    <section className="w-full h-auto">
      <h2 className="sr-only">Loading</h2>
      <div className="flex flex-1 items-center flex-col 2lg:flex-row gap-y-12 2lg:gap-y-0 2lg:gap-x-4 3lg:gap-x-20 h-auto animate-pulse">
        <div className="h-full w-full mdsm:max-w-[600px] bg-white dark:bg-dm-dBlue shadow-custom-1 flex-1">
          <div className="w-full h-full min-h-[200px] max-h-[200px] mdsm:min-h-[300px] mdsm:max-h-[300px] md:min-h-[400px] md:max-h-[400px] bg-lm-input-dGray dark:bg-dm-dBlue"></div>
        </div>
        <div className="flex flex-col 2lg:p-6 gap-y-8 flex-1 w-full lg:w-5/6 2lg:w-auto">
          <h3 className="w-1/2 mdsm:w-[35ch] bg-lm-input-dGray dark:bg-dm-dBlue p-4 rounded-lg">
            {" "}
          </h3>
          <div className="flex flex-col sm:flex-row sm:justify-between gap-y-12 sm:gap-y-0 2lg:justify-start gap-x-28 mb-4 sm:mb-8">
            <div className="flex flex-1 flex-col gap-y-4">
              <p className="bg-lm-input-dGray dark:bg-dm-dBlue p-3 w-3/4 sm:w-auto flex-1 rounded-lg"></p>
              <p className="bg-lm-input-dGray dark:bg-dm-dBlue p-3 w-2/4 sm:w-auto flex-1 rounded-lg"></p>
              <p className="bg-lm-input-dGray dark:bg-dm-dBlue p-3 w-2/4 sm:w-auto flex-1 rounded-lg"></p>
              <p className="bg-lm-input-dGray dark:bg-dm-dBlue p-3 w-3/4 sm:w-auto flex-1 rounded-lg"></p>
              <p className="bg-lm-input-dGray dark:bg-dm-dBlue p-3 w-1/4 sm:w-auto flex-1 rounded-lg"></p>
            </div>
            <div className="flex flex-1 flex-col gap-y-4">
              <p className="bg-lm-input-dGray dark:bg-dm-dBlue p-3 w-2/4 sm:w-auto rounded-lg"></p>
              <p className="bg-lm-input-dGray dark:bg-dm-dBlue p-3 w-1/4 sm:w-auto rounded-lg"></p>
              <p className="bg-lm-input-dGray dark:bg-dm-dBlue p-3 w-2/4 sm:w-auto rounded-lg"></p>
            </div>
          </div>
          <div className="flex flex-col gap-y-3 mdsm:gap-y-0 mdsm:flex-row mdsm:gap-x-4 mdsm:items-center">
            <p className="bg-lm-input-dGray dark:bg-dm-dBlue p-3 w-1/4 2lg:flex-1 rounded-lg min-w-max"></p>
            <div className="flex flex-1 p-1 gap-2 flex-wrap mdsm:items-center">
              <span className="flex w-3/4 2lg:flex-1 bg-white dark:bg-dm-dBlue text-sm ssm:text-base p-3 shadow-custom-4 shadow-shadow-custom"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoadingCountry;
