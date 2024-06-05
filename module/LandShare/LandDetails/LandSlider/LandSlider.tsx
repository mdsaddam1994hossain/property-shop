import Image from "next/image";
import React, { FC } from "react";
import AliceCarousel from "react-alice-carousel";
import { TProps } from "./LandSlider.props";

const LandSlider: FC<TProps> = ({ data }) => {
  return (
    <div className="-mx-4">
      <AliceCarousel
        disableDotsControls={false}
        disableButtonsControls={true}
        infinite={true}
        mouseTracking
        items={data?.img?.map((item, index) => {
          return (
            <div key={index}>
              <Image
                width={412}
                objectFit="cover"
                src={`/${item}`}
                alt="img"
                height={300}
                className="rounded-b-2xl lg:rounded-2xl h-80 lg:h-[612px] lg:w-full"
              />
            </div>
          );
        })}
      />
    </div>
  );
};

export default LandSlider;
