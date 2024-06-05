import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { property } from "@/utils/data";
import {
  TAparments,
  TFloorDetails,
  TPropertySummary,
} from "../Aparments/model/Aparments";
import AparmentSlider from "./AparmentSlider/AparmentSlider";
import ButtonSliding from "./ButtonSliding/ButtonSliding";
import { IoAppsSharp, IoArrowRedoSharp } from "react-icons/io5";
import { FaMapMarkerAlt, FaVideo } from "react-icons/fa";
import { GiWindowBars } from "react-icons/gi";
import {
  MdOutlineBathtub,
  MdOutlineFavorite,
  MdOutlineSupportAgent,
} from "react-icons/md";
import { TButtonSliding } from "../Aparments/model/ButtonSliding";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiArea, BiBed } from "react-icons/bi";
import Image from "next/image";
import Button from "@/components/Basic/Button";
import AliceCarousel from "react-alice-carousel";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import AparmentItem from "../Aparments/AparmentItem/AparmentItem";

const buttonItem: TButtonSliding[] = [
  {
    icon: <IoAppsSharp className="  text-m lg:text-lg text-secondary " />,
    text: "Floor Plans",
  },
  {
    icon: <FaVideo className="  text-m  lg:text-lg text-secondary " />,
    text: "Sea Video",
  },
  {
    icon: <FaMapMarkerAlt className="  text-m  lg:text-lg  text-secondary " />,
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

const AparmentsDetails = () => {
  const [targetProperty, setTargetProperty] = useState<TAparments>();
  const router = useRouter();
  const { isMobile } = useAppSelector((item: RootState) => item.app);
  const propertyId = router.query.propertyId;

  const buttonItem2: TButtonSliding[] = [
    {
      icon: <BiBed className="  text-m lg:text-xl text-light " />,
      text: `${targetProperty?.rooms} Rooms`,
    },
    {
      icon: <MdOutlineBathtub className="  text-m lg:text-xl text-light " />,
      text: `${targetProperty?.bathroom} Bathrooms`,
    },
    {
      icon: <GiWindowBars className="  text-m lg:text-xl text-light " />,
      text: `${targetProperty?.balconi} Balconies`,
    },
    {
      icon: <BiArea className="  text-m lg:text-xl text-light " />,
      text: `${targetProperty?.area} Square FT`,
    },
  ];

  useEffect(() => {
    if (property) {
      property?.map((item: TAparments) => {
        if (item?.id === parseInt(propertyId as string)) {
          setTargetProperty(item);
        }
      });
    }
  }, []);

  return (
    <div>
      <div className="grid grid-cols-2 lg:gap-10">
        <div className="col-span-2 lg:col-span-1 lg:border-0">
          <AparmentSlider data={targetProperty} />
        </div>
        <div className="col-span-2 lg:col-span-1">
          <ButtonSliding
            buttonItem={buttonItem}
            item={4}
            className="h-10 lg:h-12  relative flex items-center justify-center gap-2 rounded-full w-20 lg:w-32 text-[8px] lg:text-base bg-greenLight text-secondary"
          />
          <div className="my-4">
            <p className="font-serif text-[28px] lg:text-5xl relative text-primary">
              {targetProperty?.price} {targetProperty?.unit}{" "}
              <span className="text-m lg:text-base text-secondary absolute top-1 font-sans">
                BDT
              </span>
            </p>
            <p className="text-[28px] lg:text-5xl text-primary font-bold -mt-2">
              {targetProperty?.name}
            </p>
            <div className="flex gap-1 lg:-mt-2 items-center ">
              <HiOutlineLocationMarker className="text-sm lg:text-2xl -mt-1 text-primary " />
              <p className="text-xs text-primary lg:text-2xl">
                {targetProperty?.address}
              </p>
            </div>
          </div>
          <ButtonSliding
            buttonItem={buttonItem2}
            item={3}
            className="h-10 lg:h-12  relative flex items-center justify-center gap-2 rounded-full w-[104px] lg:w-44 text-[8px] lg:text-base bg-secondary text-light"
          />
          <div className="my-4 text-primary">
            <p className=" font-bold text-lg lg:text-3xl ">
              Covering A Beautiful Area In Dhaka Uddan
            </p>
            <p className="text-sm lg:text-xl">
              As a megacity and the over-croweded population, demand of ready
              flat for sale in Dhaka is increasing rapidly. are you trided of
              looking for a suitable flat in Dhaka begin residing.
            </p>
          </div>
          <Button className="rounded-full hidden lg:block w-full h-11 lg:h-[55px] bg-secondary text-light relative">
            <MdOutlineSupportAgent className="text-xl text-light lg:text-2xl absolute top-3 lg:top-4 left-16 lg:left-32" />
            Contact With Agent
          </Button>
        </div>
      </div>

      <div>
        <p className="font-bold text-[28px] text-primary lg:text-5xl mb-4">
          Property Summary
        </p>

        {targetProperty?.propertySumary?.map((item, index: number) => {
          return (
            <div
              key={index}
              className={`flex justify-between border-t  h-10 lg:h-16 items-center    text-sm lg:text-2xl text-primary  border-primary border-opacity-20 ${
                targetProperty?.propertySumary?.length - 1 === index &&
                "border-b "
              }`}
            >
              <p className="font-medium">{item?.lavel}</p>
              <p>{item?.value}</p>
            </div>
          );
        })}
      </div>

      <div className="my-4">
        <p className="font-bold text-[28px] text-primary lg:text-5xl">
          Property Features
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3">
          {targetProperty?.fetures?.map((item, index) => {
            return (
              <div key={index} className="flex gap-3 items-center h-10">
                <div className="h-[10px] w-[10px] bg-secondary rotate-45"></div>
                <p className="text-primary text-sm lg:text-2xl">{item}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <p className="font-bold text-[28px] lg:text-5xl text-primary">
          Floor Plans
        </p>
        <p className="text-center text-primary text-[22px] lg:text-5xl font-bold">
          {targetProperty?.area} sft
        </p>
        <div className="grid grid-cols-10 gap-3 items-center">
          <div className="col-start-2 col-span-3 h-[1px] bg-opacity-30 w-full bg-secondary"></div>
          <div className="col-start-5 col-span-2  w-full ">
            <p className="text-[8px] text-secondary font-medium text-center lg:text-2xl">
              Floor Details
            </p>
          </div>
          <div className="col-start-7 col-span-3 h-[1px] bg-opacity-30 w-full bg-secondary"></div>
        </div>
        <div className="grid grid-cols-10">
          <div className="col-start-1 lg:col-start-2 col-span-10 lg:col-span-8 grid grid-cols-6 gap-1">
            {targetProperty?.floorDetails?.map(
              (item: TFloorDetails, index: number) => {
                return (
                  <div
                    key={index}
                    className={`col-span-1 text-x lg:text-2xl mt-2 flex items-center border-r justify-center border-secondary gap-1 text-secondary ${
                      targetProperty?.floorDetails?.length - 1 === index &&
                      "border-r-0"
                    }`}
                  >
                    <p>{item?.numberOfRoom}</p>
                    <p>{item?.label}</p>
                  </div>
                );
              }
            )}
          </div>
        </div>

        <div className="my-4 lg:my-8 flex items-center justify-center">
          <Image
            src="/images/floor.png"
            alt="map"
            height={224}
            width={200}
            className="h-56 w-52 lg:h-[584px] lg:w-[406px]"
          />
        </div>
      </div>
      <Button className="rounded-full lg:hidden w-full h-11 bg-secondary text-light relative">
        <MdOutlineSupportAgent className="text-xl text-light absolute top-3 left-16" />
        Contact With Agent
      </Button>
      <div className="my-4">
        <p className="font-bold text-[28px] lg:text-5xl text-primary">
          Similar Properties
        </p>
        <AliceCarousel
          responsive={{
            0: {
              items: 2,
            },
            1024: {
              items: 3,
              itemsFit: "contain",
            },
          }}
          disableDotsControls={false}
          disableButtonsControls={true}
          infinite={isMobile ? true : false}
          mouseTracking
          items={property?.map((item: TAparments, index: number) => {
            return (
              <div key={index} className="mr-4 mt-4">
                <AparmentItem
                  price={`${item?.price}/month`}
                  name={item?.name}
                  address={item?.address}
                  rooms={item?.rooms}
                  bathRooms={item?.bathroom}
                  area={item?.area}
                  mainStyle={`h-44 lg:h-[358px] col-span-1 rounded-[10px] bg-primary `}
                  bottomStyle={`px-4 py-2 text-greenLight `}
                  img={item.img[0]}
                  hrStyle="h-[1px] my-1 lg:my-3 bg-greenLight bg-opacity-30"
                  favBorderStyle="border-greenLight"
                />
              </div>
            );
          })}
          paddingRight={isMobile ? 20 : 190}
        />
      </div>
    </div>
  );
};

export default AparmentsDetails;
