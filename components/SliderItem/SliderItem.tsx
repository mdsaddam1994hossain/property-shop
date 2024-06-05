import Image from "next/image";
import React, { FC } from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";

type Props = {
  nameStyle: string;
  addressStyle: string;
  name: string;
  address: string;
  img: string;
};

const SliderItem: FC<Props> = ({
  nameStyle,
  name,
  address,
  addressStyle,
  img,
}) => {
  return (
    <div className="relative w-full h-36 lg:h-[350px] rounded-2xl ">
      <Image
        width={500}
        height={350}
        alt="img"
        src={`/${img}`}
        className="rounded-2xl w-full h-36 lg:h-[350px]  object-cover"
      />
      <div className="overlay">
        <div className="absolute p-[14px] lg:p-9 bottom-0 text-white font-sans text-lg font-bold">
          <p className={nameStyle}>{name}</p>
          <div className="flex gap-1 items-center -mt-1 lg:-mt-2">
            <HiOutlineLocationMarker className="text-m lg:text-lg lg:-mt-1 text-greenLight " />
            <p className={addressStyle}>{address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderItem;
