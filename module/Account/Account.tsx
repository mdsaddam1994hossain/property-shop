import Button from "@/components/Basic/Button";
import InputText from "@/components/Basic/InputText";
import InputTextArea from "@/components/Basic/InputTextArea";
import React from "react";
import ProfileImage from "./ProfileImage/ProfileImage";

const Account = () => {
  return (
    <div>
      <p className="text-[28px] lg:text-5xl font-bold text-primary text-center ">
        Profile
      </p>
      <ProfileImage />

      <div className="my-4">
        <InputText
          className="h-11  w-full rounded-[10px] bg-greenLight lg:bg-light lg:h-16 lg:border lg:rounded-[20px] px-4 text-m  text-primary my-2"
          placeholder="Full name"
        />
        <InputText
          className="h-11 w-full rounded-[10px] bg-greenLight px-4 lg:bg-light lg:h-16 lg:border lg:rounded-[20px] text-m  text-primary my-2"
          placeholder="Contact Number"
        />
        <InputText
          className="h-11 w-full rounded-[10px] bg-greenLight px-4 text-m lg:bg-light lg:h-16 lg:border lg:rounded-[20px]  text-primary my-2"
          placeholder="Email Address"
        />
        <InputText
          className="h-11 w-full rounded-[10px] bg-greenLight px-4 text-m lg:bg-light lg:h-16 lg:border lg:rounded-[20px] text-primary my-2"
          placeholder="Enter Password"
        />
        <InputText
          className="h-11 w-full rounded-[10px] bg-greenLight px-4 text-m  lg:bg-light lg:h-16 lg:border lg:rounded-[20px] text-primary my-2"
          placeholder="Re-enter Password"
        />
        <InputTextArea
          className="h-40 w-full rounded-[10px] bg-greenLight px-4 py-2 text-m lg:bg-light lg:h-[171px] lg:border lg:rounded-[20px]  text-primary my-2"
          placeholder="Address"
        />
      </div>

      <Button className="bg-secondary rounded-[10px] lg:rounded-[20px] lg:h-16 bold lg:text-[28px] text-greenLight h-11 w-full">
        Update Profile
      </Button>
    </div>
  );
};

export default Account;
