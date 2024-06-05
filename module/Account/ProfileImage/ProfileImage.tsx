import Image from "next/image";
import React from "react";
import { IoMdCamera } from "react-icons/io";

const ProfileImage = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="mt-4 relative">
        <div className="absolute bg-greenLight  h-10 w-10 lg:h-16 lg:w-16 rounded-full flex items-center justify-center -top-2 lg:-top-5 lg:-right-4 -right-2 ">
          <div className="bg-primary h-8 w-8 lg:w-12 lg:h-12 rounded-full flex justify-center items-center">
            <IoMdCamera className="text-sm lg:text-2xl text-greenLight" />
          </div>
        </div>
        <Image
          width={170}
          height={170}
          src="/images/aparment.jpg"
          className="h-[91px] w-[91px] lg:h-[170px] lg:w-[170px] object-cover rounded-full "
          alt="proImage"
        />
      </div>
    </div>
  );
};

export default ProfileImage;
