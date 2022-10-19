import React from "react";
import Footer from "./Footer";
import Header from "./Header";

import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col font-body justify-center items-center w-screen min-h-screen h-auto overflow-y-auto overflow-x-hidden bg-lm-bg-vlGray dark:bg-dm-bg-vdBlue">
      <div className="relative flex flex-col justify-start items-center gap-12 w-full max-w-[1550px] min-h-screen antialiased h-auto pb-16">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
