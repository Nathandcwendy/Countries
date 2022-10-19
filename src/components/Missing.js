import React from "react";
import { Link } from "react-router-dom";

const Missing = () => {
  return (
    <main className="text-black font-bold dark:text-white w-full flex flex-col items-center gap-y-8 pt-16">
      <h2 className="text-3xl font-extrabold">Page Not Found</h2>
      <p className="text-2xl">Well, that's disappointing.</p>
      <p className="text-2xl w-max px-8 bg-white dark:bg-dm-dBlue p-2 rounded-md shadow-custom-5 shadow-shadow-custom font-bold hover:cursor-pointer">
        <Link to="/" replace>
          Visit Our Homepage
        </Link>
      </p>
    </main>
  );
};

export default Missing;
