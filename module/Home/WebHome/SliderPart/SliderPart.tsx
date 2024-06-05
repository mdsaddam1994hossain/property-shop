import React from "react";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import AliceCarousel from "react-alice-carousel";
import SliderItem from "@/components/SliderItem/SliderItem";

const SliderPart = () => {
  const { isMobile } = useAppSelector((item: RootState) => item.app);
  const getInnerWidth = () => {
    try {
      // if client
      return window.innerWidth;
    } catch (e) {
      // if server, set any desired value
      return 1024;
    }
  };
  return (
    <>
      <AliceCarousel
        responsive={{
          0: {
            items: 1,
          },
          1024: {
            items: 2,
            itemsFit: "contain",
          },
        }}
        disableDotsControls={isMobile ? true : false}
        disableButtonsControls={true}
        infinite={isMobile ? true : false}
        innerWidth={getInnerWidth()}
        mouseTracking
        items={[1, 2, 3, 4]?.map((item) => {
          return (
            <div key={item} className="mr-4 lg:mr-10 lg:mb-8 ">
              <SliderItem
                img={"images/aparment2.jpg"}
                nameStyle="text-xl font-bold text-greenLight lg:text-4xl"
                addressStyle="text-[8px] font-normal text-greenLight lg:text-base"
                name="Lilac Cottage"
                address="03 White Avenue , Corpus Christi , TX"
              />
            </div>
          );
        })}
        paddingRight={isMobile ? 80 : 190}
      />
    </>
  );
};

export default SliderPart;
