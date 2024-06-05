import Image from "next/image";
import React, { FC } from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdOutlineFavorite } from "react-icons/md";
import { TProps } from "./LandItem.props";

const LandItem: FC<TProps> = ({ img, name, address }) => {
  return (
    <div className="relative w-full h-40 lg:h-[300px] rounded-2xl lg:rounded-[20px]">
      <Image
        width={600}
        height={300}
        alt="img"
        src={`${img}`}
        className="rounded-2xl lg:rounded-[20px] w-full  h-40 lg:h-[300px]  object-cover"
      />
      <div className="overlay ">
        <MdOutlineFavorite className="absolute top-4 right-4 text-greenLight" />
        <div className="absolute left-4 bottom-4 text-greenLight">
          <p className="bold text-[14px] lg:text-[32px] ">{name}</p>
          <div className="flex gap-1 lg:gap-2 ">
            <HiOutlineLocationMarker className="text-m lg:text-lg lg:mt-[2px] text-greenLight" />
            <p className="text-x lg:text-base">{address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandItem;
