import React from "react";
import { BsTwitter } from "react-icons/bs";
import { ImFacebook2 } from "react-icons/im";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-light grid grid-cols-11 pt-10 pb-20 px-4 md:px-28 lg:px-40   xl:px-48 2xl:px-80 gap-6 text-primary ">
      <div className="col-start-1 col-span-5 md:col-span-3">
        <p className="font-serif text-2xl">
          <Image
            src="/images/logo.svg"
            alt="logo"
            height={40}
            width={40}
            className="h-10 w-10 md:h-20 md:w-20"
          />
        </p>
        <p className="text-lg mt-6">
          Real Estate investing, even on a very small scale, remains a tried and
          true means of building an individual`s cash flow.
        </p>
      </div>
      <div className="col-start-7 md:col-start-5  md:col-span-2 col-span-5">
        <p className="font-bold text-2xl">Services</p>
        <p className="text-lg mt-6">Email Marketing</p>
        <p className="text-lg mt-2">Campaings</p>
      </div>
      <div className="col-start-1  md:col-start-7 col-span-5 md:col-span-2">
        <p className="font-bold text-2xl">About</p>
        <p className="text-lg mt-6">Our Story</p>
        <p className="text-lg mt-2">Benefites</p>
        <p className="text-lg mt-2">Awards</p>
      </div>
      <div className="col-start-7 md:col-start-9 col-span-5  md:col-span-2">
        <p className="font-bold text-2xl md:text-center">Follow Us</p>
        <div className="flex gap-4 mt-6 md:justify-center">
          <ImFacebook2 className="text-primary" />
          <BsTwitter className="text-primary text-lg" />
          <AiFillYoutube className="text-primary text-lg" />
          <AiFillInstagram className="text-primary text-lg" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
