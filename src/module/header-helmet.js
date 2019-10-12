import React from "react";
import { Helmet } from "react-helmet";

export default function AppHelmet({ helmet }) {
  return (
    <Helmet>
      <title>{helmet.title}</title>
      <meta name="description" content={helmet.description} />
      <meta name="keywords" content={helmet.keywords.join(",")} />
    </Helmet>
  );
}
