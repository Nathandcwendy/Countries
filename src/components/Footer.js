import React from "react";
import { FaInstagram, FaPinterest, FaTwitter } from "react-icons/fa";
import { GrFacebook } from "react-icons/gr";

const Footer = () => {
  return (
    <footer className="sync-padding absolute left-0 bottom-0 w-full flex justify-between items-center bg-white dark:bg-dm-dBlue py-4 shadow-custom-4 shadow-shadow-custom dark:text-white">
      <div className="w-full flex flex-col xsm:flex-row items-center justify-center gap-y-4 xsm:gap-y-0 gap-x-8 ssm:gap-x-12 text-dm-bg-vdBlue dark:text-lm-bg-vlGray">
        <div className="flex gap-x-4">
          <a href="/" aria-label="facebook">
            <GrFacebook className="h-6 xs:h-7 w-6 xs:w-7 hover:text-Cyan focus:text-Cyan hover:cursor-pointer" />
          </a>
          <a
            href="https://twitter.com/nathanielsdiary"
            target="_blank"
            rel="noreferrer"
            aria-label="twitter"
          >
            <FaTwitter className="h-6 xs:h-7 w-6 xs:w-7 hover:text-Cyan focus:text-Cyan hover:cursor-pointer" />
          </a>
          <a href="/" aria-label="pinterest">
            <FaPinterest className="h-6 xs:h-7 w-6 xs:w-7 hover:text-Cyan focus:text-Cyan hover:cursor-pointer" />
          </a>
          <a
            href="https://www.instagram.com/nathanielsdiary"
            target="_blank"
            rel="noreferrer"
            aria-label="instagram"
          >
            <FaInstagram className="h-6 xs:h-7 w-6 xs:w-7 hover:text-Cyan focus:text-Cyan hover:cursor-pointer" />
          </a>
        </div>
        <div>
          <a
            href="https://www.frontendmentor.io/profile/Nathandcwendy"
            target="_blank"
            rel="noreferrer"
            className="font-extrabold tracking-wider pb-3 text-lg md:text-xl lg:text-3xl hover:cursor-pointer transition hover:brightness-125"
          >
            Coded By Nate
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
