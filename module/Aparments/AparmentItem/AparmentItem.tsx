import React, { FC } from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdFavoriteBorder, MdOutlineBathtub } from "react-icons/md";
import { BiArea, BiBed } from "react-icons/bi";
import Image from "next/image";

type Props = {
  mainStyle: string;
  bottomStyle: string;
  img: string;
  hrStyle: string;
  price: string;
  name: string;
  address: string;
  rooms: number;
  bathRooms: number;
  area: number;
  favBorderStyle: string;
};

const AparmentItem: FC<Props> = ({
  mainStyle,
  bottomStyle,
  img,
  hrStyle,
  price,
  name,
  address,
  rooms,
  bathRooms,
  area,
  favBorderStyle,
}) => {
  return (
    <div className={mainStyle}>
      <Image
        height={200}
        width={400}
        src={`/${img}`}
        alt="error"
        className="object-cover w-full h-1/2 rounded-[10px]"
      />

      <div className={bottomStyle}>
        <div className="flex justify-between">
          <p className="font-serif text-sm lg:text-[22px] font-normal">
            {price}
          </p>
          <div
            className={`w-4 lg:h-8 lg:w-8 h-4 mt-1 lg:mt-2 rounded-full border flex justify-center items-center ${favBorderStyle} border-opacity-30`}
          >
            <MdFavoriteBorder className="text-m lg:text-base" />
          </div>
        </div>
        <p className="text-m lg:text-xl font-bold ">{name}</p>
        <div className="flex gap-1  ">
          <HiOutlineLocationMarker className="text-m lg:text-lg lg:mt-[2px] " />
          <p className="text-x lg:text-[15px]">{address}</p>
        </div>
        <div className={hrStyle} />
        <div className="grid grid-cols-3">
          <div className="col-span-1 flex gap-[2px]">
            <BiBed className="text-m lg:mt-1" />
            <p className="text-[5px] mt-[2px] lg:text-m">{rooms} Rooms</p>
          </div>
          <div className="col-span-1 flex gap-[2px]">
            <MdOutlineBathtub className="text-m lg:mt-1 " />
            <p className="text-[5px] mt-[2px] lg:text-m">{bathRooms} Bath</p>
          </div>
          <div className="col-span-1 flex gap-[2px]">
            <BiArea className="text-m lg:mt-1" />
            <p className="text-[5px] mt-[2px] lg:text-m">{area}Sq Ft</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AparmentItem;
