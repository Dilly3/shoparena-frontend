import React from 'react';
import RegisterComponent from "../components/Register"
import Footer from "../components/Footer"
import GeneralNavBar from "../components/GeneralNavBar"


export default function Register() {
    return(
        <>
        <GeneralNavBar />
        <RegisterComponent/>
        <Footer/>
        </>
    )
}

