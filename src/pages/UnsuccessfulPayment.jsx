import React from 'react';
import Footer from "../components/Footer";
import UnsuccessfulPayment from "../components/UnsuccessfulPayment"
import GeneralNavBar from "../components/GeneralNavBar"

export default function Unsuccessful() {
    return(
        <>
        <GeneralNavBar />
        <UnsuccessfulPayment />
        </>
    )
}