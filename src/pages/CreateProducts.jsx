import React,{useEffect, useState} from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import CreateProduct from "../components/Createproduct"
export default function Login() {
    return(
        <>
        <Navbar/>
        <CreateProduct/>
        <Footer/>
        </>
    )
}