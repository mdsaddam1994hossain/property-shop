import HomeBanner from "@/components/Banner/HomeBanner";
import SecondaryBanner from "@/components/Banner/SecondaryBanner";
import Button from "@/components/Basic/Button";
import LandItem from "@/components/LandItem/LandItem";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { land } from "@/utils/data";
import { useRouter } from "next/router";
import React, { useState } from "react";

const LandShare = () => {
  const { isMobile } = useAppSelector((item: RootState) => item.app);
  const [tab, setTab] = useState<string>("list");
  const router = useRouter();

  const handleClick = (id: number) => {
    router.push(`/landshare/${id}`);
  };

  const handleSetTab = (tabName: string) => {
    setTab(tabName);
  };

  return (
    <div>
      {!isMobile && (
        <SecondaryBanner
          textStyle="text-white text-lg font-bold  text-5xl"
          img="/images/flat.webp"
        />
      )}
      <div className="flex justify-between items-center lg:my-16 mb-4 ">
        <p className="text-[26px] text-primary lg:text-5xl  font-bold">
          Recently Add
        </p>
        <div className="flex gap-3 lg:gap-6">
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-10 ">
            {land?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="col-span-2 lg:col-span-2 cursor-pointer"
                  onClick={() => handleClick(item?.id)}
                >
                  <LandItem
                    img={`/${item?.img[0]}`}
                    name={item?.name}
                    address={item?.address}
                  />
                </div>
              );
            })}
          </div>
          <p className="text-[26px] font-bold text-primary  text-center lg:text-5xl my-16">
            Popular Land Share
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-10">
            {land?.map((item, index) => {
              return (
                <div key={index} className="col-span-2 lg:col-span-2">
                  <LandItem
                    img={`/${item?.img[0]}`}
                    name={item?.name}
                    address={item?.address}
                  />
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <div>
          <p>Map view</p>
        </div>
      )}

      <div className="my-16">
        <HomeBanner
          img={"/images/homebanner.jpg"}
          text="When Dreams Comes True"
          className="absolute bottom-4  lg:bottom-10 text-greenLight  text-xl lg:text-5xl font-bold"
        />
      </div>
    </div>
  );
};

export default LandShare;
