import React from "react";
import Button from "@/components/Basic/Button";
import InputText from "@/components/Basic/InputText";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import LabelField from "@/components/Basic/LabelFeild";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { BsCheck2 } from "react-icons/bs";

const Login = () => {
  return (
    <div>
      <div className="text-center">
        <p className="text-[28px] font-serif ">Sign In</p>
        <p className="text-sm text-primary">
          See more information <br /> and get free consulting support!
        </p>
      </div>

      <div className="mt-12 ">
        <LabelField className="text-primary font-medium ">Email</LabelField>
        <div className="relative">
          <InputText
            placeholder="saddamhossain@gmail.com"
            className="h-11 border rounded-[10px] mt-2 mb-4 px-4 border-primary bg-light border-opacity-30 w-full text-sm"
          />
          <BsCheck2 className="absolute  right-4 top-[22px] text-primary text-opacity-30 " />
        </div>

        <LabelField className="text-primary font-medium ">Password</LabelField>
        <div className="relative">
          <InputText
            type="password"
            placeholder="************"
            className="h-11 border  rounded-[10px] mt-2 px-4 border-primary bg-light border-opacity-30 w-full text-sm"
          />
          <AiOutlineEyeInvisible className="absolute  right-4 top-[22px] text-primary text-opacity-30 " />
        </div>

        <p className="text-center font-medium text-primary mt-2">
          Forgot Password?
        </p>
        <Button className="w-full h-11 bg-secondary text-greenLight bold rounded-[10px] my-4">
          Sign in
        </Button>
      </div>

      <div className="grid grid-cols-7 items-center my-2">
        <div className="h-[1px] w-full col-span-3 bg-primary bg-opacity-30 "></div>
        <div className=" col-span-1">
          <p className="font-medium text-sm text-center">or</p>
        </div>
        <div className="h-[1px] w-full col-span-3 bg-primary bg-opacity-30 "></div>
      </div>

      {/* social login */}
      <div>
        <Button className="h-11 border rounded-[10px] mt-4  border-primary bg-light border-opacity-30 w-full text-sm">
          <FcGoogle className="absolute left-20  text-xl" />
          Signup with Google
        </Button>
        <Button className="h-11 border rounded-[10px] mt-4  border-primary bg-light border-opacity-30 w-full text-sm">
          <FaFacebook className="absolute left-20  text-xl text-blue-500" />
          Signup with Facebook
        </Button>
      </div>
    </div>
  );
};

export default Login;
