import React from "react";

const ErrorPage = ({ fetchError }) => {
  return (
    <div className="text-black font-bold dark:text-white w-full flex flex-col items-center gap-y-8 pt-16">
      <h2 className="text-3xl font-extrabold text-red-500">{fetchError}</h2>
      <p className="text-2xl tracking-widest">Well, that's disappointing!</p>
    </div>
  );
};

export default ErrorPage;
