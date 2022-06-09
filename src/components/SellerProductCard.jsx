import React from 'react'
import {useEffect, useState} from "react"
import axios from '../axios'; 

export default function SellerProductCard() {
    const [sellerShop, setSellerShop] = useState([])

    {/*SELLER PROFILE AND SHOP CONSUME START */}
    const getIndividualSellerShop = async () =>{
        try {
          const resp = await axios.get("/seller/shop/1")
          console.log(resp)
          setSellerShop(resp.data.Seller_Shop)
          
        }catch(error) {
          console.log(error.response)
        }
  }

  console.log(sellerShop, "state 2")

  
useEffect(()=>{
  getIndividualSellerShop()
}, [])

  return (
    <>
    <div className='container-2'>
     { sellerShop.length > 0 ? sellerShop[0].product.map((product) => ( 
    
  //   <div className="card-2">
  //   <img src={product.images} alt />
  //   <div className="card-body-2">
  //     <div className="row-2">
  //       <div className="card-title-2">
  //         <h4>{ product.title }</h4>
  //         <h3>N{product.price}</h3>
  //       </div>
       
  //     </div>
  //     <hr />
  //     <p>
  //       {product.description}
  //     </p>
  //     <div className="btn-group-2">
  //       <div className="btn-2">
  //         <a className='buy-btn' href>Buy Now</a>
  //       </div>
  //     </div>
  //   </div>
  // </div> 

  <div className="product-card">
      <h1>{ product.title }</h1>
      <p>{product.description}</p>
      <img className="product-pic" src={product.images} alt="img" />
      <div className="product-info">
        <div className="product-price">N{product.price}</div>
        <a href="#" className="product-button">Buy Now</a>
      </div>
    </div>
  
       )) : <p>loading</p>} 
</div>
    </>
  )
}
