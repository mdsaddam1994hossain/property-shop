import React from "react";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import { useTranslation, Trans } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Home from "@/module/Home/Home";
type Props = {
  // Add custom props here
};
const HomePage = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();

  const { t, i18n } = useTranslation("common");

  // const onToggleLanguageClick = (newLocale: string) => {
  //   const { pathname, asPath, query } = router;
  //   router.push({ pathname, query }, asPath, { locale: newLocale });
  // };

  // const clientSideLanguageChange = (newLocale: string) => {
  //   i18n.changeLanguage(newLocale);
  // };

  // const changeTo = router.locale === "en" ? "bn" : "en";
  return (
    <>
      <Home />
    </>
  );
};
export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", ["common", "footer"])),
  },
});
export default HomePage;
