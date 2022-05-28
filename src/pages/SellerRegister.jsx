import React from 'react';
import Navbar from "../components/Navbar"
import SellerRegisterComponent from "../components/SellerRegister"
import Footer from "../components/Footer"


export default function SellerRegister() {
    return(
        <>
         <Navbar/>
        <SellerRegisterComponent/>
        <Footer/>
        </>
    )
}