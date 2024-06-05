import Image from "next/image";
import React, { useState } from "react";

const Links = [
  { name: "Home", link: "/" },
  { name: "Buy Property", link: "/property" },
  { name: "Land Share", link: "/land-share" },
  { name: "Favourites", link: "/favourites" },
  { name: "Account", link: "/account" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <div className="shadow-md w-full fixed top-0 left-0">
        <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
          <div
            className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800"
          >
            <Image src="images/logo.svg" alt="logo" />
          </div>

          <div>
            <ul
              className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static  md:z-auto   h-screen md:h-auto  right-0 w-52 md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
                open
                  ? "right-0 bg-secondary z-50 h-screen top-0 bottom-0"
                  : "right-[-500px] top-0"
              }`}
            >
              <div onClick={() => setOpen(false)} className="md:block">
                Close
              </div>
              {Links.map((link) => (
                <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
                  <a
                    href={link.link}
                    className="text-gray-800 hover:text-gray-400 duration-500"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden md:block">
            <div className="flex gap-8 ">
              <p>lan</p>
              <p>log in</p>
              <p>sign up</p>
            </div>
          </div>
          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 top-4 cursor-pointer md:hidden"
          >
            <p> {open ? "" : "menu"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
