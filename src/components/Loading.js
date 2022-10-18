import React from "react";

const count = 30;
const arr = [];
for (let i = 0; i <= count; i++) {
  arr.push(i);
}

const LoadingPreview = () => {
  return (
    <article className="flex flex-col overflow-hidden h-[350px] bg-white dark:bg-dm-dBlue rounded-lg shadow-custom-1 p-4 gap-y-4 animate-pulse">
      <div className="bg-white dark:bg-dm-dBlue h-1/2 w-full rounded-md ">
        <div className="w-full h-full bg-lm-input-dGray"></div>
      </div>
      <div className="h-1/2 flex flex-col gap-y-4">
        <h3 className="w-full bg-lm-input-dGray p-4 rounded-lg"> </h3>
        <div className="flex flex-col gap-y-2">
          <div className="flex gap-x-4">
            <p className="bg-lm-input-dGray p-3 flex-1 rounded-lg"></p>
            <p className="bg-lm-input-dGray p-3 flex-1 rounded-lg"></p>
          </div>
          <div className="flex gap-x-4">
            <p className="bg-lm-input-dGray p-3 flex-1 rounded-lg"></p>
            <p className="bg-lm-input-dGray p-3 flex-1 rounded-lg"></p>
          </div>
          <div className="flex gap-x-4">
            <p className="bg-lm-input-dGray p-3 flex-1 rounded-lg"></p>
            <p className="bg-lm-input-dGray p-3 flex-1 rounded-lg"></p>
          </div>
        </div>
      </div>
    </article>
  );
};

const Loading = () => {
  return (
    <section className="w-full h-auto grid grid-cols-4 gap-16">
      <h2 className="sr-only">Loading</h2>
      {arr.map((arrUnit, index) => (
        <LoadingPreview key={index} />
      ))}
    </section>
  );
};

export default Loading;
