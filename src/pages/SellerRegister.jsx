import React from 'react';
import SellerRegisterComponent from "../components/SellerRegister"
import Footer from "../components/Footer"
import GeneralNavBar from "../components/GeneralNavBar"


export default function SellerRegister() {
    return(
        <>
        <GeneralNavBar />
        <SellerRegisterComponent/>
        <Footer/>
        </>

    )
}