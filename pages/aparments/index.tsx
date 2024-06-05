import Aparments from "@/module/Aparments/Aparments";
import React from "react";
import type { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
type Props = {
  // Add custom props here
};
const PropertyPage = () => {
  return (
    <div>
      <Aparments />
    </div>
  );
};
export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", ["common", "footer"])),
  },
});
export default PropertyPage;
