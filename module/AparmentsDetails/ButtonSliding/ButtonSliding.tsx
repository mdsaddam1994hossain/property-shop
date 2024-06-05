import Button from "@/components/Basic/Button";
import { TButtonSliding } from "@/module/Aparments/model/ButtonSliding";
import React, { FC } from "react";
import AliceCarousel from "react-alice-carousel";
import { TButtonProps } from "./ButtonSliding.props";

const ButtonSliding: FC<TButtonProps> = ({ buttonItem, className, item }) => {
  return (
    <div className="relative -mr-4 lg:mr-0 mt-4">
      <AliceCarousel
        responsive={{
          0: {
            items: item,
          },
        }}
        disableDotsControls={true}
        disableButtonsControls={true}
        infinite={true}
        mouseTracking
        items={buttonItem?.map((item: TButtonSliding, index: number) => {
          return (
            <div key={index}>
              <Button className={className}>
                {item?.icon} {item?.text}
              </Button>
            </div>
          );
        })}
        paddingRight={40}
      />
    </div>
  );
};

export default ButtonSliding;
