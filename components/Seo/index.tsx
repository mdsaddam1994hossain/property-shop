import Head from "next/head";
import React from "react";
export const Seo = ({
  title,
  description = "",
  imagePreviewUrl = "/homebanner.jpg",
}: {
  title: string;
  description?: string;
  currentUrl?: string;
  imagePreviewUrl?: string;
}) => {
  const formattedTitle = `${title} | Best Real state Shop - propertyshop.bd.com`;

  return (
    <Head>
      <title>{formattedTitle}</title>
      <meta name="title" content={title} />
      <meta property="og:title" content={title} />
      <meta property="twitter:title" content={title} />

      <meta name="description" content={description} />
      <meta property="twitter:description" content={description} />
      <meta property="og:description" content={description} />

      <meta property="og:image" content={imagePreviewUrl} />
      <meta property="twitter:image" content={imagePreviewUrl} />

      <meta property="og:type" content="website" />
      <meta property="twitter:card" content="summary_large_image" />
    </Head>
  );
};
