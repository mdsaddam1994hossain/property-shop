import Image from "next/image";
import React, { FC } from "react";
import Button from "../Basic/Button";
import { useTranslation, Trans } from "next-i18next";
type Props = {
  img: string;
  textStyle: string;
};

const SecondaryBanner: FC<Props> = ({ img, textStyle }) => {
  const { t } = useTranslation("common");
  return (
    <div className="bg-primary w-full lg:h-[350px] rounded-[18px] lg:rounded-[40px] grid lg:grid-cols-2">
      <div className="flex flex-col px-5 lg:px-20 justify-center">
        <p className={textStyle}>
          {t("h1")}
          {/* Landlords grow
          <br /> rich in their sleep. */}
        </p>
        <div>
          <Button className="bg-light rounded-full text-m lg:mt-4 lg:text-2xl lg:w-60 font-bold h-[22px] lg:h-12 w-20 text-primary mt-2">
            Get it now
          </Button>
        </div>
      </div>
      <div className="col-span-2 lg:col-span-1">
        <Image
          width={600}
          height={350}
          alt="img"
          src={`${img}`}
          className="w-full h-[130px] lg:h-[350px] rounded-2xl lg:rounded-[36px]"
        />
      </div>
    </div>
  );
};

export default SecondaryBanner;
