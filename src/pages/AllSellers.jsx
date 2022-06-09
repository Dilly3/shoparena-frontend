import React from "react";
import GetAllSellers from "../components/GetAllSellers";
import Footer from "../components/Footer";
import GeneralNavBar from "../components/GeneralNavBar";

export default function Seller() {
  return (
    <>
      <GeneralNavBar />
      <GetAllSellers />
      <Footer />
    </>
  );
}
