import Head from "next/head";
import React from "react";
import Header from "../Header";
import Navbar from "../Navbar";

const Layout = (props) => {
  return (
    <div>
      <Head>
        <title>Gyaana </title>
      </Head>
      <Header />
      {/* <Navbar /> */}
      <div>{props.children}</div>
    </div>
  );
};

export default Layout;
