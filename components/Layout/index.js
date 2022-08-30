import Head from "next/head"
import React from "react"
import Footer from "../Footer"
import Header from "../Header"
import ImgaeSlider from "../ImgaeSlider"

const Layout = (props) => {
  return (
    <div>
      <Head>
        <title>Gyaana </title>
      </Head>
      <Header />
      <div>{props.children}</div>
      <Footer />
    </div>
  )
}

export default Layout
