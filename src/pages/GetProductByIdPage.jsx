import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import GetProdById from "../components/GetProd";
import GetProd from "../components/GetProd";
import GetProdById from "../components/GetProdById";


export default function GetProductByIdPage() {
    return (
        <>
            <Navbar/>
            <GetProdById/>
            <Footer/>
        </>
    );
}
