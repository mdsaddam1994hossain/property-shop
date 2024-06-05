import Image from "next/image";
import React, { FC } from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdOutlineFavorite } from "react-icons/md";

type Props = {
  img: string;
  name: string;
  price: string;
  address: string;
};

const PropertyFavItem: FC<Props> = ({ img, name, price, address }) => {
  return (
    <div
      className="relative w-full h-40 lg:h-[312px]
     rounded-2xl"
    >
      <Image
        alt="error"
        width={400}
        height={312}
        src={`${img}`}
        className="rounded-2xl w-full h-40 lg:h-[312px]  object-cover"
      />
      <div className="overlay ">
        <MdOutlineFavorite className="absolute top-4 right-4" />
        <div className="absolute left-4 bottom-4 text-greenLight">
          <p className="text-sm lg:text-2xl font-serif ">{price}</p>
          <p className=" text-sm lg:text-2xl font-bold lg:-mt-2">{name}</p>
          <div className="flex gap-1 ">
            <HiOutlineLocationMarker className="text-m lg:text-sm lg:mt-[2px] text-greenLight" />
            <p className="text-x lg:text-xs">{address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyFavItem;
