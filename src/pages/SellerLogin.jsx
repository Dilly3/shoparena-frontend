import React from 'react';
import SellerLoginComponent from "../components/SellerLogin"
import Footer from "../components/Footer"
import GeneralNavBar from "../components/GeneralNavBar"


export default function SellerLogin() {
    return(
        <>
        <GeneralNavBar />
        <SellerLoginComponent/>
        <Footer/>
        </>
    )
}