import React from 'react'
import SellerTopBar from '../components/SellerTopBar'
import SellerOrders from '../components/SellerOrders'
import SellerModal from '../components/SellerModal'

export default function SellerDashboard() {
  return (
    <>
    <SellerTopBar/>
    <SellerOrders/>
    <SellerModal/>
    </>
  )
}