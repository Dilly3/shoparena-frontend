import React from 'react'
import SellerTopBar from '../components/SellerTopBar'
import SellerProduct from '../components/SellerProduct'
import { ShopProducts } from '../components/ShopProducts'




export default function ProductsBySeller() {
  return (
    <>
    <SellerTopBar/>
    <SellerProduct/>
    <ShopProducts/>
    </>
  )
}