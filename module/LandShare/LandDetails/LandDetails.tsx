import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { land } from "@/utils/data";
import { TLands } from "../model/LandModel";
import LandSlider from "./LandSlider/LandSlider";
import { Collapse } from "antd";
import { FaMapMarkerAlt, FaVideo } from "react-icons/fa";
import { MdOutlineFavorite, MdOutlineSupportAgent } from "react-icons/md";
import { IoArrowRedoSharp } from "react-icons/io5";
import { TButtons } from "../model/Button.type";
import { Slider } from "antd";
import { BsCheck2 } from "react-icons/bs";
import Button from "@/components/Basic/Button";
import HomeBanner from "@/components/Banner/HomeBanner";
import AliceCarousel from "react-alice-carousel";
import LandItem from "@/components/LandItem/LandItem";
import Item from "antd/es/list/Item";

const { Panel } = Collapse;

const buttonItem: TButtons[] = [
  {
    icon: <FaVideo className="  text-m lg:text-lg text-secondary " />,
    text: "Video",
  },
  {
    icon: <FaMapMarkerAlt className="  text-m  lg:text-lg text-secondary " />,
    text: "Map",
  },
  {
    icon: (
      <MdOutlineFavorite className="  text-m  lg:text-lg  text-secondary " />
    ),
    text: "Save",
  },
  {
    icon: (
      <IoArrowRedoSharp className="  text-m  lg:text-lg  text-secondary " />
    ),
    text: "Share",
  },
];

const LandDetails = () => {
  const [targetLand, setTargetLand] = useState<TLands>();
  const router = useRouter();
  const landId = router.query.landId;

  useEffect(() => {
    if (land) {
      land?.map((item: TLands) => {
        if (item?.id === parseInt(landId as string)) {
          setTargetLand(item);
        }
      });
    }
  }, []);
  return (
    <div>
      <div className="grid grid-cols-2 lg:gap-10">
        <div className="col-span-2 lg:col-span-1 lg:border-0">
          <LandSlider data={targetLand} />
        </div>
        <div className="col-span-2 lg:col-span-1">
          <div className="flex gap-3 my-4 lg:mt-0">
            {buttonItem?.map((item: TButtons, index: number) => {
              return (
                <div key={index}>
                  <Button
                    className={`h-[30px] px-4 lg:px-8 lg:text-lg lg:h-[50px] rounded-full border-0 bg-greenLight text-secondary text-m flex justify-center items-center gap-1 `}
                  >
                    {item?.icon} {item?.text}
                  </Button>
                </div>
              );
            })}
          </div>
          <p className="text-[28px] lg:text-5xl text-primary font-bold">
            {targetLand?.name}
          </p>
          <p className="text-justify lg:text-2xl text-primary text-sm ">
            {targetLand?.description}
          </p>

          <Button className="rounded-full hidden lg:block w-full h-11 lg:h-[55px] lg:mt-4 lg:text-2xl  bg-secondary text-light relative ">
            <MdOutlineSupportAgent className="text-xl text-light lg:text-2xl  absolute top-3 lg:top-4 left-16 lg:left-[20%]" />
            Contact With Agent
          </Button>
        </div>
      </div>
      <div className="my-4">
        <p className="text-[28px] lg:text-5xl text-primary font-bold my-4">
          Renovations Progress
        </p>

        {targetLand?.renovation?.map((item, index: number) => {
          return (
            <div key={index} className="grid grid-cols-3 gap-4 items-center">
              <div className="col-span-1">
                <p className="text-primary font-medium text-sm lg:text-2xl">
                  {item?.label}
                </p>
              </div>
              <div className="col-span-2">
                <p className="text-[8px] lg:text-base text-primary font-medium ml-1">
                  {item?.prograss}% Complete
                </p>
                <Slider
                  defaultValue={item?.prograss}
                  disabled={true}
                  className="!-mt-[1px]"
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="my-4">
        <p className="text-[28px] lg:text-5xl text-primary font-bold ">
          Completed
        </p>
        <div className="grid grid-cols-3 gap-4 mt-4 lg:grid-cols-10">
          {[1, 2, 3, 4, 5, 6]?.map((item, index) => {
            return (
              <div
                key={index}
                className={`${index === 2 && "mr-3 lg:mr-0"} ${
                  index === 3 && "ml-3 lg:ml-0"
                } ${
                  (index === 0 && "lg:col-start-3 lg:col-span-2") ||
                  (index === 1 && "lg:col-start-5 lg:col-span-2") ||
                  (index === 2 && "lg:col-start-7 lg:col-span-2") ||
                  (index === 3 && "lg:col-start-4 lg:col-span-2") ||
                  (index === 4 && "lg:col-start-6 lg:col-span-2") ||
                  (index === 5 && "lg:col-start-8 lg:col-span-2")
                }`}
              >
                <Button
                  className={`rounded-full h-[30px] lg:h-[50px] lg:text-2xl text-sm font-medium relative bg-secondary w-full text-greenLight `}
                >
                  <BsCheck2 className="absolute top-[6px] right-1 lg:right-5 lg:top-4 lg:font-bold lg:text-2xl text-lg  text-greenLight " />
                  Kitchen
                </Button>
              </div>
            );
          })}
        </div>
      </div>
      <div className="my-4">
        <p className="text-[28px] lg:text-5xl text-primary font-bold mb-4 ">
          Financials Summary
        </p>

        {targetLand?.financialSummary?.map((item, index: number) => {
          return (
            <div
              key={index}
              className={`flex justify-between border-t  h-10 lg:h-16 items-center   text-sm lg:text-2xl text-primary  border-primary border-opacity-20 ${
                targetLand?.financialSummary?.length - 1 === index &&
                "border-b "
              }`}
            >
              <p className="font-medium">{item?.label}</p>
              <div className="flex">
                <p>
                  {item?.minRate} {item?.status}
                </p>
                {item?.maxRate > 0 && (
                  <p>
                    {" "}
                    - {item?.minRate} {item?.status}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div className="my-4">
        <p className="text-[28px] lg:text-5xl text-primary font-bold ">FAQ</p>
        <div>
          <Collapse
            className="!bg-light"
            bordered={false}
            defaultActiveKey={[0]}
            expandIconPosition={"end"}
          >
            {targetLand?.faq?.map((item, index) => {
              return (
                <Panel
                  header={
                    <p className="text-base lg:text-2xl font-medium">
                      {item?.title}
                    </p>
                  }
                  key={index}
                  className="!bg-none"
                >
                  <p className="text-sm lg:text-xl"> {item?.description}</p>
                </Panel>
              );
            })}
          </Collapse>
        </div>
      </div>

      <Button className="rounded-full  lg:hidden w-full h-11 lg:h-[55px] lg:mt-4 lg:text-2xl  bg-secondary text-light relative ">
        <MdOutlineSupportAgent className="text-xl text-light lg:text-2xl  absolute top-3 lg:top-4 left-16 lg:left-32" />
        Contact With Agent
      </Button>

      <div className="hidden lg:block my-4">
        <p className="text-[28px] lg:text-5xl text-primary font-bold mb-4 ">
          Similar Properties
        </p>
        <AliceCarousel
          responsive={{
            0: {
              items: 2,
            },
          }}
          disableDotsControls={false}
          disableButtonsControls={true}
          infinite={true}
          mouseTracking
          items={[1, 2, 3]?.map((item, index) => {
            return (
              <div key={index} className="mr-4">
                <LandItem
                  img="/images/slider2.jpg"
                  name="Appletree Lodge"
                  address="West Dhanmondi and Shangkar,Dhanmondi"
                />
              </div>
            );
          })}
        />
      </div>
      <div className="hidden lg:block my-4">
        <HomeBanner
          img={"/images/homebanner.jpg"}
          text="When Dreams Comes True"
          className="absolute bottom-4 text-white  text-xl font-bold"
        />
      </div>
    </div>
  );
};

export default LandDetails;
