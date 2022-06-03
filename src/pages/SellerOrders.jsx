import React from 'react'
import SellerTopBar from '../components/SellerTopBar'
import SellerOrdersComponent from '../components/SellerOrders'
import SellerContainer from '../components/SellerContainer'


export default function SellerOrders() {
  return (
    <>
    <SellerTopBar/>
    <SellerContainer/>
    <SellerOrdersComponent/> 
    </>
  )
}