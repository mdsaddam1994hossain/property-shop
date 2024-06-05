import React, { useState } from "react";
import Button from "@/components/Basic/Button";
import AparmentItem from "./AparmentItem/AparmentItem";
import { property } from "../../utils/data";
import { RootState } from "@/redux/store";
import { useAppSelector } from "@/redux/hooks";
import SecondaryBanner from "@/components/Banner/SecondaryBanner";
import HomeBanner from "@/components/Banner/HomeBanner";
import { useRouter } from "next/router";
import GoogleReactMap from "@/components/Map";

const Aparments = () => {
  const { isMobile } = useAppSelector((item: RootState) => item.app);
  const router = useRouter();
  const [tab, setTab] = useState<string>("list");

  const handleClick = (id: number) => {
    router.push(`/aparments/${id}`);
  };

  const handleSetTab = (tabName: string) => {
    setTab(tabName);
  };

  return (
    <div>
      {!isMobile && (
        <SecondaryBanner
          textStyle="text-white text-lg font-bold  md:text-5xl xl:text-4xl"
          img="/images/flat.webp"
        />
      )}
      <div className="flex justify-between items-center mb-6 lg:my-16">
        <p className="text-[26px] font-bold text-center lg:text-4xl">
          Recently Add
        </p>
        <div className="flex gap-3 lg:gap-6 transition duration-300">
          <Button
            onClick={() => handleSetTab("list")}
            className={`${
              tab === "list" && "bg-secondary text-greenLight "
            } rounded-[10px] text-primary text-m h-12 w-[70px] lg:w-[166px] lg:rounded-2xl transition duration-300 ease-in-out lg:text-xl font-medium`}
          >
            List View
          </Button>
          <Button
            onClick={() => handleSetTab("map")}
            className={`text-m text-primary w-[70px] rounded-[10px] lg:rounded-2xl lg:w-[166px] transition duration-300 ease-in-out lg:text-xl font-medium ${
              tab === "map" && "bg-secondary text-greenLight  "
            }`}
          >
            Map View
          </Button>
        </div>
      </div>

      {tab === "list" ? (
        <>
          <div className="grid grid-cols-12 gap-4 lg:gap-10 ">
            {property?.map((item, index) => {
              return (
                <div
                  className="col-span-6 md:col-span-3 cursor-pointer"
                  key={index}
                  onClick={() => handleClick(item?.id)}
                >
                  <AparmentItem
                    price={`${item?.price}/month`}
                    name={item?.name}
                    address={item?.address}
                    rooms={item?.rooms}
                    bathRooms={item?.bathroom}
                    area={item?.area}
                    mainStyle="h-44 lg:h-[358px] col-span-1 rounded-[10px] bg-primary"
                    bottomStyle="px-3 py-[6px]  text-greenLight"
                    img={item.img[0]}
                    hrStyle="h-[1px] my-1 lg:my-3 bg-greenLight bg-opacity-30"
                    favBorderStyle="border-greenLight"
                  />
                </div>
              );
            })}
          </div>
          <p className="text-[26px] lg:text-5xl font-bold my-5 lg:my-16">
            Featured Properties
          </p>
          <div className="grid grid-cols-12 gap-4 lg:gap-10">
            {property?.map((item, index) => {
              return (
                <div className="col-span-6  md:col-span-3" key={index}>
                  <AparmentItem
                    price={`${item?.price}/month`}
                    name={item?.name}
                    address={item?.address}
                    rooms={item?.rooms}
                    bathRooms={item?.bathroom}
                    area={item?.area}
                    mainStyle=" rounded-[10px] bg-greenLight h-44 lg:h-[358px] col-span-1 "
                    bottomStyle="px-3 py-[6px] text-primary"
                    img={item.img[0]}
                    hrStyle="h-[1px] my-1  bg-primary   lg:my-3  bg-opacity-30"
                    favBorderStyle="border-primary"
                  />
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <div>
          <GoogleReactMap />
        </div>
      )}

      <div className="my-8 lg:my-20">
        <HomeBanner
          img={"/images/homebanner.jpg"}
          text="When Dreams Comes True"
          className="absolute bottom-4  lg:bottom-10 text-greenLight  text-xl lg:text-5xl font-bold"
        />
      </div>
    </div>
  );
};

export default Aparments;
