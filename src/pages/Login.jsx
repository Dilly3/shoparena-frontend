import React from 'react'
import Footer from "../components/Footer"
import LoginComponent from "../components/Login"
import GeneralNavBar from "../components/GeneralNavBar"

export default function Login() {
    return(
        <>
        <GeneralNavBar />
        <LoginComponent/>
        <Footer/>
        </>
    )
}