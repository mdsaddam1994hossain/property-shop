import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setMobile } from "@/redux/reducer/appSlice";
import { RootState } from "@/redux/store";
import MobileHeader from "./HeaderFooter/MobileHeader";
import WebHeader from "./HeaderFooter/WebHeader";
import Footer from "./HeaderFooter/Footer";
import { Router, useRouter } from "next/router";
import CustomLoading from "./CustomLoading";
const Layout = ({ children }: any) => {
  const { isMobile } = useAppSelector((state: RootState) => state.app);
  const [resWidth, setResWidth] = useState(0);
  const [routeLoading, setRouteLoading] = useState<boolean>();
  const dispatch = useAppDispatch();
  const router = useRouter();

  const onToggleLanguageClick = (event: any) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: event });
  };

  const changeTo = router.locale === "en" ? "en" : "bn";
  const handleResize = () => {
    if (window?.innerWidth < 768) {
      setResWidth(window?.innerWidth);
    } else {
      setResWidth(window?.innerWidth);
    }
  };

  useEffect(() => {
    if (window !== undefined) {
      setResWidth(window?.innerWidth);
    }
    if (resWidth < 768) {
      dispatch(setMobile(true));
    } else {
      dispatch(setMobile(false));
    }
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dispatch, resWidth]);

  Router.events.on("routeChangeStart", () => {
    setRouteLoading(true);
  });
  Router.events.on("routeChangeComplete", () => {
    setRouteLoading(false);
  });
  Router.events.on("routeChangeError", () => {
    setRouteLoading(false);
  });

  return (
    <>
      {routeLoading ? (
        <CustomLoading />
      ) : (
        <div className="bg-light">
          <header className="sticky top-0 z-50 ">
            <nav>
              {" "}
              {isMobile ? (
                <MobileHeader />
              ) : (
                <WebHeader
                  onToggleLanguageClick={onToggleLanguageClick}
                  changeTo={changeTo}
                />
              )}
            </nav>
          </header>
          <main
            style={{ minHeight: "90vh" }}
            className="py-4 px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-40"
          >
            {children}
          </main>
          <footer className="pb-12 lg:pb-0">
            <Footer />
          </footer>
        </div>
      )}
    </>
  );
};

export default Layout;
