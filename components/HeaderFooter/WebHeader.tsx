import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Select } from "antd";
import { TfiSearch } from "react-icons/tfi";
import { BsCaretDownFill } from "react-icons/bs";
import Link from "next/link";
import InputText from "../Basic/InputText";
import LanguageSelector from "../Language";
const { Option } = Select;

export const myNavbar = [
  { title: "Home", path: "/" },
  { title: "Aparments", path: "/aparments" },
  { title: "Land Share", path: "/landshare" },
  { title: "Favourite", path: "/favourite" },
  { title: "Account", path: "/account" },
];
type Props = {
  // clientSideLanguageChange: (event: string | undefined | unknown) => any;
  onToggleLanguageClick: (event: string | undefined | unknown) => any;
  changeTo: string;
};

const WebHeader = ({
  // clientSideLanguageChange,
  changeTo,
  onToggleLanguageClick,
}: Props) => {
  const router = useRouter();
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY > 0) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", changeBackground);
    }
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <div
      className={`sticky top-0 bg-light md:block ${navbar ? "shadow" : ""}`}
      style={{ zIndex: 9000 }}
    >
      <div className={`sticky top-0 w-full `}>
        <div className="mx-4 grid grid-cols-8 gap-4 py-4  items-center md:mx-30 lg:mx-40 xl:mx-50 2xl:mx-64">
          <div className={`col-span-2 `}>
            <Link href={"/"} passHref>
              <Image src="/images/logo.svg" alt="logo" height={80} width={80} />
            </Link>
          </div>
          <div className="col-span-4 ">
            <ul className="nav-link  flex  justify-between  gap-5 text-primary ">
              {myNavbar.map((item, index) => {
                return (
                  <li
                    key={index}
                    className={`${
                      router.pathname == item.path ? "active" : ""
                    }`}
                  >
                    <Link
                      href={item.path}
                      passHref
                      className="text-base font-normal text-secondary"
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={`col-span-1 flex justify-center gap-2`}>
            {/* <LanguageSelector/> */}
            <Select
              style={{
                width: 90,
                height: "48px",
                left: "3px",
                paddingTop: "10px",
              }}
              dropdownStyle={{ zIndex: 10000 }}
              defaultValue={changeTo}
              value={changeTo}
              bordered={false}
              suffixIcon={<BsCaretDownFill className="text-primary text-m" />}
              onChange={onToggleLanguageClick}
            >
              <Option value="bn">Bangla</Option>
              <Option value="en">English</Option>
            </Select>
          </div>
          <div className="flex col-span-1 flex-col gap-4 md:flex-row md:gap-6">
            {/* <div className="flex gap-4"> */}
            <button className="bg-primary text-white py-2 px-6 rounded-lg hover:bg-primary-dark transition duration-300">
              Login
            </button>
            <button className="bg-secondary text-white py-2 px-6 rounded-lg hover:bg-secondary-dark transition duration-300">
              Register
            </button>
            {/* </div> */}
          </div>
        </div>
        <div className="grid grid-cols-10 gap-4 pb-10">
          <div className="relative col-start-2 col-span-10 md:col-start-4 md:col-span-4">
            <Select
              style={{
                width: 80,
                height: "48px",
                position: "absolute",
                left: "3px",
                paddingTop: "10px",
                color: "#1B75C7",
                borderRight: "1px solid #003b33",
              }}
              dropdownStyle={{ zIndex: 10000 }}
              defaultValue={"buy"}
              bordered={false}
              suffixIcon={<BsCaretDownFill className="text-primary text-m" />}
            >
              <Option value="buy">Buy</Option>
              <Option value="sell">Sell</Option>
            </Select>
            <InputText
              type="text"
              className="h-12 rounded-full bg-light pl-[90px] pr-10 w-full text-base font-normal border-primary border"
              placeholder={"Search here.."}
            />
            <TfiSearch className="absolute right-4 top-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebHeader;
