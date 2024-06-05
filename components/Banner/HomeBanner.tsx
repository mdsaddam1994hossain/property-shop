import React, { FC } from "react";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { useRouter } from "next/router";
import Image from "next/image";
type Props = {
  text: string;
  className?: string;
  img: string;
  url?: string;
};

const HomeBanner: FC<Props> = ({ text, className, img, url }) => {
  const { isMobile } = useAppSelector((item: RootState) => item.app);
  const router = useRouter();

  return (
    <div
      onClick={() => url && router.push(`${url}`)}
      className={`relative w-full h-36 lg:h-[350px] rounded-2xl lg:rounded-[40px] ${
        url && "cursor-pointer"
      }`}
    >
      <Image
        height={350}
        width={600}
        alt="img"
        src={`${img}`}
        className="rounded-2xl lg:rounded-[40px] w-full h-36 lg:h-[350px]  object-cover"
      />
      <div
        className={` flex justify-center ${isMobile ? "overlay" : "overlay2"}`}
      >
        <p className={className}>{text}</p>
      </div>
    </div>
  );
};

export default HomeBanner;
