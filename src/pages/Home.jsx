import React from "react";
import Navbar from "../components/Navbar";
import Main from "../components/main";
import Footer from "../components/Footer";
import CategoryMenu from "../components/CategoryMenu";

export default function Home() {
  return (
    <>
      <Navbar/>
      <CategoryMenu />
       <Main/>
       <Footer/>
    </>
  );
}
