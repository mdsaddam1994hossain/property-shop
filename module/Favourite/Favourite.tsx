import React, { useState } from "react";
import Button from "@/components/Basic/Button";
import PropertyFavItem from "./PropertyFavourite/PropertyFavItem";
import LandItem from "@/components/LandItem/LandItem";
import HomeBanner from "@/components/Banner/HomeBanner";

const Favourite = () => {
  const [tab, setTab] = useState<string>("property");

  const handleTab = (tabName: string) => {
    setTab(tabName);
  };

  return (
    <div>
      <p className="text-center text-[28px] lg:text-5xl  font-bold -mt-2">
        Favourite List
      </p>
      <div className="flex items-center justify-center p-1">
        <div className="bg-primary w-60 lg:w-[472px] gap-4 h-9 lg:h-16  rounded-full">
          <div className="grid grid-cols-2 gap-4 p-[7px] ">
            <Button
              onClick={() => handleTab("property")}
              className={`col-span-1  ${
                tab === "property" ? "bg-greenLight" : " text-greenLight"
              } h-[22px] lg:h-[42px] lg:mt-1 lg:text-xl rounded-full text-m`}
            >
              Property
            </Button>
            <Button
              onClick={() => handleTab("land")}
              className={`col-span-1 ${
                tab === "land" ? "bg-greenLight" : " text-greenLight"
              }  h-[22px] lg:h-[42px] lg:mt-1 lg:text-xl text-m rounded-full`}
            >
              Land Share
            </Button>
          </div>
        </div>
      </div>

      {tab === "property" ? (
        <div className="grid grid-cols-2 md:grid-cols-3  gap-4 lg:gap-10 my-8 lg:my-16">
          {[1, 2, 3, 4, 5, 6, 7, 8]?.map((item) => {
            return (
              <div className="col-span-1 " key={item}>
                <PropertyFavItem
                  img="/images/homebanner.jpg"
                  price="2.66 Lakh"
                  name="Appletree Lodge"
                  address="West Dhanmondi and Shangkar,Dhanmondi"
                />
              </div>
            );
          })}
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-10 my-8 lg:my-16">
          {[1, 2, 3, 4, 5, 6, 7, 8]?.map((item) => {
            return (
              <div className="col-span-2 " key={item}>
                <LandItem
                  img="/images/slider2.jpg"
                  name="Appletree Lodge"
                  address="West Dhanmondi and Shangkar,Dhanmondi"
                />
              </div>
            );
          })}
        </div>
      )}

      <div className="hidden lg:block lg:my-16">
        <HomeBanner
          img={"/images/homebanner.jpg"}
          text="When Dreams Comes True"
          className="absolute bottom-4 text-greenLight  text-xl font-bold"
        />
      </div>
    </div>
  );
};

export default Favourite;
