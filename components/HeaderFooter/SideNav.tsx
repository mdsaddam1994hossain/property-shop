import { Drawer } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";
import { type } from "os";
import React, { FC } from "react";
import { FaHandHoldingUsd, FaLanguage, FaMapMarked } from "react-icons/fa";
import { IoClose, IoPersonOutline } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import { RiHomeLine } from "react-icons/ri";

type Props = {
  onClose: () => void;
  visible: boolean;
};

const SideNav: FC<Props> = ({ onClose, visible }) => {
  const { pathname, asPath, query } = useRouter();
  const router = useRouter();

  const handleClick = (url: string) => {
    router.push(url);
    onClose();
  };
  return (
    <Drawer
      maskStyle={{ opacity: 0, background: "none" }}
      width={170}
      // mask={true}
      placement="right"
      onClose={onClose}
      open={visible}
      style={{ zIndex: "10000" }}
    >
      <div className="h-6 gap-5 text-greenLight">
        <button onClick={onClose}>
          <IoClose className="text-greenLight text-2xl" />
        </button>
      </div>

      <div className="nav-link mt-8 flex flex-col gap-7 text-greenLight text-xs font-medium  ">
        <a
          className={`text-greenLight flex gap-3`}
          onClick={() => handleClick("/")}
        >
          <RiHomeLine className="text-xl -mt-[2px]" />
          Home
        </a>

        <a
          className={`text-greenLight flex gap-3 `}
          onClick={() => handleClick("/aparments")}
        >
          <Image alt="icon" height={18} width={18} src="/images/group3.svg" />
          Aparments
        </a>

        <a
          className="text-greenLight flex gap-3"
          onClick={() => handleClick("/land-share")}
        >
          <Image alt="icon" height={18} width={18} src="/images/union2.svg" />
          Land Share
        </a>
        <a
          className="text-greenLight flex gap-3"
          onClick={() => handleClick("/favourite")}
        >
          <MdFavoriteBorder className="text-xl -mt-[2px]" />
          Favourite
        </a>

        <a
          className="text-greenLight flex gap-3"
          onClick={() => handleClick("/account")}
        >
          <IoPersonOutline className="text-xl -mt-[2px]" />
          Account
        </a>

        <div className=" flex justify-center ">
          <button
            className="absolute left-7 flex gap-2"
            onClick={() =>
              router.push({ pathname, query }, asPath, {
                locale: router.locale === "en" ? "bn" : "en",
              })
            }
          >
            <a
              className=" text-greenLight flex gap-3"
              onClick={() => handleClick("/account")}
            >
              <Image
                alt="icon"
                height={18}
                width={18}
                src="/images/language.svg"
              />
              English
            </a>
          </button>
        </div>
      </div>
    </Drawer>
  );
};

export default SideNav;
