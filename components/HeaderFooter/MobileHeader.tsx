import React, { useState } from "react";
import { Select } from "antd";
import { RiMenu5Fill, RiSearchLine } from "react-icons/ri";
import { MdFavoriteBorder } from "react-icons/md";
import { BsCaretDownFill } from "react-icons/bs";
import InputText from "../Basic/InputText";
import SideNav from "./SideNav";
import Image from "next/image";
const { Option } = Select;

const MobileHeader = () => {
  const [hideHeader, setHideHeader] = useState(false);
  const [visible, setVisible] = useState(false);

  const checkHeader = (path: string, arr: string[]) => {
    if (arr.includes(path)) {
      setHideHeader(true);
    } else {
      setHideHeader(false);
    }
  };

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  if (hideHeader) {
    return null;
  } else {
    return (
      <div className={`relative  bg-light `}>
        <div className="px-4 grid grid-cols-11 items-center gap-3">
          <div className="relative col-span-2 my-2 ">
            <Image
              src="/images/logo.svg"
              alt="logo"
              height={40}
              width={40}
              className="h-10 w-10 md:h-20 md:w-20"
            />
          </div>
          <div className="col-span-7 flex">
            <div className="relative w-full">
              <Select
                style={{
                  width: 70,
                  height: "35px",
                  fontSize: "12px",
                  position: "absolute",
                  left: 0,
                  paddingTop: 5,
                  color: "#1B75C7",
                  fontWeight: 700,
                  zIndex: 10000,
                  borderRight: "1px solid #003b33",
                }}
                dropdownStyle={{ zIndex: 10000 }}
                defaultValue={"buy"}
                bordered={false}
                suffixIcon={
                  <BsCaretDownFill className="text-primary text-m " />
                }
              >
                <Option value="buy">Buy</Option>
                <Option value="sell">Sell</Option>
              </Select>
              <InputText
                type="text"
                className="h-[35px] rounded-full bg-light pl-[75px] pr-10  w-full  text-xs border-primary border "
                placeholder={"Search here.."}
              />
              <RiSearchLine className="absolute right-3 top-[10px] z-40 font-semibold text-sm text-primary " />
            </div>
          </div>

          <div className="col-span-2 flex items-center gap-2 ">
            <MdFavoriteBorder className="ml-2" />
            <button onClick={showDrawer}>
              <RiMenu5Fill className="right-4 text-primary text-xl" />
            </button>
          </div>
        </div>

        <SideNav onClose={onClose} visible={visible} />
      </div>
    );
  }
};

export default MobileHeader;
