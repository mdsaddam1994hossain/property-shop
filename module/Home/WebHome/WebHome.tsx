import React from "react";
import HomeBanner from "@/components/Banner/HomeBanner";
import SecondaryBanner from "@/components/Banner/SecondaryBanner";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import Tabs from "@/components/Tab";
import SliderPart from "./SliderPart/SliderPart";
import { useTranslation } from "next-i18next";
const tabsData = [
  { tabNumber: 1, label: "Recommended" },
  { tabNumber: 2, label: "Popular" },
];
const WebHome = () => {
  const { isMobile } = useAppSelector((item: RootState) => item.app);

  const { t } = useTranslation("common");
  return (
    <div className="px-4 lg:px-8 xl:px-16">
      <div>
        {isMobile ? (
          <HomeBanner
            img={"/images/homebanner.jpg"}
            text="When Dreams Comes True"
            className="absolute bottom-4 text-greenLight  text-xl font-bold"
          />
        ) : (
          <SecondaryBanner
            textStyle="text-greenLight font-bold tracking-tigh md:text-5xl lg:text-xl xl:text-3xl 2xl:text-5xl"
            img="/images/flat.webp"
          />
        )}
      </div>
      <div className="grid grid-cols-2  gap-4 lg:gap-10 my-8 lg:my-20   ">
        <div className="col-span-1 ">
          <HomeBanner
            url="/aparments"
            img="/images/aparment.jpg"
            text={t("title")}
            className="absolute bottom-4 lg:bottom-8 text-greenLight font-sans text-base lg:text-[40px] font-bold"
          />
        </div>
        <div>
          <HomeBanner
            url="/landshare"
            img="/images/land.jpg"
            text="Land Share"
            className="absolute bottom-4 lg:bottom-8 text-greenLight font-sans text-base lg:text-[40px] font-bold"
          />
        </div>
      </div>
      <div className="flex gap-6  justify-center">
        <Tabs tabs={tabsData} color="primary" />
      </div>
      <div className="mt-6 lg:mt-[70px]  -mr-4">
        <SliderPart />
      </div>

      <div className="mt-8 lg:mt-[65px]  mb-8 lg:mb-[70px] ">
        {isMobile ? (
          <SecondaryBanner
            textStyle="text-greenLight text-sm font-bold  text-lg lg:text-5xl "
            img="/images/aparment5.jpg"
          />
        ) : (
          <HomeBanner
            img={"/images/homebanner.jpg"}
            text={t("homebanner")}
            className="absolute bottom-4 lg:bottom-9 text-greenLight  text-xl lg:text-5xl font-bold"
          />
        )}
      </div>
    </div>
  );
};

export default WebHome;
