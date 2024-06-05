import React, { useState } from "react";
import Account from "@/module/Account/Account";
import Aparments from "@/module/Aparments/Aparments";
import Favourite from "@/module/Favourite/Favourite";
import Home from "@/module/Home/Home";
import LandShare from "@/module/LandShare/LandShare";
import { MdFavoriteBorder } from "react-icons/md";
import { RiHomeLine } from "react-icons/ri";
import { FaHandHoldingUsd } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { FaMapMarked } from "react-icons/fa";
import { useRouter } from "next/router";
import WebHome from "../WebHome/WebHome";
import Login from "@/module/Login/Login";
import Image from "next/image";

const MobileHome = () => {
  const [selectedTab, setSelectedTab] = useState("home");
  const { pathname } = useRouter();
  const router = useRouter();

  return (
    <div className="bottom-tab-container">
      <div className="tab-content">
        {selectedTab === "home" && <WebHome />}
        {selectedTab === "aparments" && <Aparments />}
        {selectedTab === "landShare" && <LandShare />}
        {selectedTab === "favourite" && <Favourite />}
        {selectedTab === "account" && <Login />}
      </div>
      <div className="tab-bar">
        <div
          className={`tab ${selectedTab === "favourite" ? "selected" : ""}`}
          onClick={() => {
            setSelectedTab("favourite");
          }}
        >
          <div>
            <div className="flex justify-center mb-[1px]">
              <MdFavoriteBorder className="text-xl" />
            </div>
            <p className="font-DMSans "> Favourite</p>
          </div>
        </div>
        <div
          className={`tab ${selectedTab === "aparments" ? "selected" : ""}`}
          onClick={() => {
            setSelectedTab("aparments");
          }}
        >
          <div>
            <div className="flex justify-center mb-[1px]">
              {selectedTab === "aparments" ? (
                <Image
                  src={"/images/Group2.svg"}
                  alt="error"
                  className="h-5 w-5"
                  width={20}
                  height={20}
                />
              ) : (
                <Image
                  height={20}
                  width={20}
                  src={"/images/Group.svg"}
                  alt="error"
                  className="h-5 w-5"
                />
              )}
            </div>
            <p>Apartments</p>
          </div>
        </div>
        <div
          className={`tab ${selectedTab === "home" ? "selected" : ""}`}
          onClick={() => {
            setSelectedTab("home");
          }}
        >
          <div className="">
            <div className="flex justify-center mb-[1px]">
              <RiHomeLine className="text-xl" />
            </div>
            <p>Home</p>
          </div>
        </div>
        <div
          className={`tab ${selectedTab === "landShare" ? "selected" : ""}`}
          onClick={() => {
            setSelectedTab("landShare");
          }}
        >
          <div className="">
            <div className="flex justify-center mb-[1px]">
              {selectedTab === "landShare" ? (
                <Image
                  height={20}
                  width={20}
                  src={"/images/landIcon.svg"}
                  alt="error"
                  className="h-5 w-5"
                />
              ) : (
                <Image
                  height={20}
                  width={20}
                  src={"/images/landIcon2.svg"}
                  alt="error"
                  className="h-5 w-5"
                />
              )}
            </div>
            <p> Land Share</p>
          </div>
        </div>
        <div
          className={`tab ${selectedTab === "account" ? "selected" : ""}`}
          onClick={() => {
            setSelectedTab("account");
          }}
        >
          <div className="">
            <div className="flex justify-center mb-[1px]">
              <IoPersonOutline className="text-xl" />
            </div>
            <p> Account</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileHome;
