import React, { useState, useEffect, useNavigate } from 'react'
import { Link } from 'react-router-dom'
import axios from '../axios'

export default function SellerContainer() {

  const [checkSold, setCheckSold] = useState(0)
  const [remainingProduct, setRemainingProduct] = useState(0)
  const [findSeller, setSeller] = useState('')
  const [products, setSellerProducts] = useState([])



  {/*Get total product count*/}
  const getSellerSoldProduct = async () => {
   
    try {
      const resp = await axios.get("/seller/total/product/sold")
      console.log(resp.data)
      setCheckSold(resp.data.Message)
    } catch (error){
      setCheckSold(0)
      console.log(error)
    }
  }


  {/*Get the remaining product count*/}
  const getRemainingProductCount = async () =>{
    const config = {
      header: { 
      "Authorization": `Bearer ${localStorage.token}`,
      "Content-Type": "application/json"
      }
    }
    try {
      const resp = await axios.get("/seller/remaining/product/count", config)
      console.log(resp.data)
      console.log(remainingProduct)
      setRemainingProduct(resp.data)
    }catch (error){
      setRemainingProduct(0)
      console.log(error)
    }
  }

  {/*find Seller*/}
  const findTheSeller = async () =>{
    const config = {
      header: {
        "Authorization": `Bearer ${localStorage.token}`,
        "Content-Type": "application/json"
        }
      }
      try {
        const resp = await axios.get("/getsellerprofile", config)
        console.log(resp.data.data)
        setSeller(resp.data.data)
      }catch(error) {
        console.log(error.response)
      }
  }
  {/*seller product*/}

  const getOrders = async () => {
    const config = {
        header: { 
        "Authorization": `Bearer ${localStorage.token}`,
        "Content-Type": "application/json"
        }
      }

    try {
      const resp = await axios.get("/seller/allproducts", config)
      
      console.log(resp.data.SellerProducts)
      setSellerProducts(resp.data.SellerProducts)
      
    } catch (error){
        setSellerProducts('')
      console.log(error.resp)
    }
  }

  useEffect(()=>{
      getSellerSoldProduct()
      findTheSeller()
      getRemainingProductCount()
      getOrders() 
    // }
  }, [])
 
  const defaultImgUrl =
   // "https://www.kindpng.com/picc/m/52-526237_avatar-profile-hd-png-download.png";
   "https://i.ibb.co/5jwDfyF/Photo-on-24-11-2021-at-20-45.jpg";
  return (
    <>
{/* START CONTAINER */}
<div className="page-container row-fluid">
  {/* SIDEBAR - START */}
  <div className="page-sidebar ">
    {/* MAIN MENU - START */}
    <div className="page-sidebar-wrapper" id="main-menu-wrapper"> 
      {/* USER INFO - START */}
      <div className="profile-info row">

        <div className="profile-details col-lg-8 col-md-8 col-8" style={{marginLeft:"20px"}}>
        <Link to="/seller/profile">
          <h3 style={{ fontSize:"22px", float:"right", color:"#fff"}}>{ findSeller.first_name } {findSeller.last_name}</h3>
          </Link>
          <p className="profile-title" style={{marginLeft:"5px", fontSize:"16px"}}>Store Manager </p>
        </div>

      </div>
      {/* USER INFO - END */}
      <ul className="wraplist">	
        <li className=""> 

            <i className="fa fa-grid" />
           
        </li>
        <li className> 
        <Link to="/seller/products">       
            <i className="fas fa-archive" />
            <span className="title" >Products</span>
            {/* <i className="fa fa-cubes" />
            <span className="title">Products</span> */}
            
            
        </Link>
           </li>
           <li className> 
          <Link to="/seller/createproducts">
            <i className="fa fa-plus" />
            <span className="title"> Add Products</span>
            
          </Link>
           </li>
           <li className> 
          <Link to="/seller/resetpassword">
            <i className="fa fa-cubes" />
            <span className="title"> Reset Password</span>
           
          </Link>
           </li>    
          
        <li className> 
          <Link to="/seller/dashboard/orders">
            <i className="fa fa-shopping-cart" />
            <span className="title">Orders</span>
            
          </Link>
          <ul className="sub-menu">
            <li>
              <a className href="eco-orders.html">All Orders</a>
            </li>
          </ul>
        </li>

        <li className> 
          <Link to="/seller/profile">
            <i className="fa fa-user" />
            <span className="title">Profile</span>
            
          </Link>
          {/* <ul className="sub-menu">
            <li>
              <a className href="eco-orders.html">All Orders</a>
            </li>
          </ul> */}
        </li>
       
      </ul>
    </div>
    {/* MAIN MENU - END */}
   
  </div>
  {/*  SIDEBAR - END */}
  {/* START CONTENT */}
  <section id="main-content" className=" ">
    <section className="wrapper main-wrapper" style={{}}>
      <div className="col-xl-12 col-lg-12 col-md-12 col-12">
        <div className="page-title">
          <div className="float-left">
            <h1 className="title" style={{marginLeft:"20px", color:"#000"}}>SELLER DASHBOARD</h1>                          </div>
        </div>
      </div>
      <div className="clearfix" />
      <div className="col-lg-12 col-md-12 col-12">
        <section className="box nobox">
          <div className="content-body">
          <div className="cards">
  <div className="card">
    <div className="card-content">
      <div className="number" style={{textAlign:"center"}}>{ (products || 0).length }</div>
      <div className="card-name">Total Product Count</div>
    </div>
    <div className="icon-box">
      <i className="fas fa-shopping-basket" />
    </div>
  </div>
  <div className="card">
    <div className="card-content">
      <div className="number"></div><p style={{textAlign:"center"}}>{ checkSold } yet</p>
    </div>
    <div className="icon-box">
      <i className="fas fa-shopping-cart" />
    </div>
  </div>
  <div className="card">
    <div className="card-content">
      <div className="number" style={{textAlign:"center"}}>{ remainingProduct.Total_Remaining }</div>
      <div className="card-name">Remaining Product Count</div>
    </div>
    <div className="icon-box">
    <i className="fas fa-shopping-basket" />
    </div>
  </div>
  <div className="card">
    <div className="card-content">
      <div className="number" style={{textAlign:"center"}}>{remainingProduct.Total_Sold}</div>
      <div className="card-name">Total Sold Count</div>
    </div>
    <div className="icon-box">
      <i className="fas fa-money-bill" />
    </div>
  </div>
</div>


            {/* End .row */}    
            <div className="row">

           <div className="tables">
  
</div>
            </div> 
          </div>
        </section></div>
      
    </section>
  </section>
  {/* END CONTENT */}
  <div className="chatapi-windows ">
  </div>  </div>
{/* END CONTAINER */}

    
    </>
  )
}