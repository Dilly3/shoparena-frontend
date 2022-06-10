import React from "react";
import GetAllSellers from "../components/getAllSellers";
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
