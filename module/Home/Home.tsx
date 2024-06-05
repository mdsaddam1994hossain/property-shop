import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import React from "react";
import MobileHome from "./MobileHome/MobileHome";
import WebHome from "./WebHome/WebHome";

const Home = () => {
  const { isMobile } = useAppSelector((state: RootState) => state.app);
  return <div>{isMobile ? <MobileHome /> : <WebHome />}</div>;
};

export default Home;
