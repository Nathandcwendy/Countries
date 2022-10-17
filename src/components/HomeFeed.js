import React from "react";
import Country from "./Country";

const HomeFeed = () => {
  return (
    <section className="w-full h-auto grid grid-cols-4 gap-16">
      <h2 className="sr-only">Countries</h2>
      <Country />
      <Country />
      <Country />
      <Country />
      <Country />
      <Country />
      <Country />
      <Country />
      <Country />
    </section>
  );
};

export default HomeFeed;
