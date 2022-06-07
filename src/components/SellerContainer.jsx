import React, { useState, useEffect, useNavigate } from 'react'
import { Link } from 'react-router-dom'
import axios from '../axios'

export default function SellerContainer() {

  const [checkSold, setCheckSold] = useState(0)
  const [remainingProduct, setRemainingProduct] = useState(0)
  const [findSeller, setSeller] = useState('')


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

  useEffect(()=>{
      getSellerSoldProduct()
      findTheSeller()
      getRemainingProductCount()
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
        <div className="profile-image col-lg-4 col-md-4 col-4">
          <a href="ui-profile.html">
          <img
                    width="150"
                    height="150"
                    src={findSeller.image ? findSeller.image : defaultImgUrl}
                    alt={findSeller.first_name}
                    className="rounded-circle"
                  />
            {/* <img src={findSeller.image} className="img-fluid rounded-circle" /> */}
          </a>
        </div>
        <div className="profile-details col-lg-8 col-md-8 col-8">
        <Link to="/seller/profile"></Link>
          <h3>
            <a href="ui-profile.html">{ findSeller.last_name } {findSeller.first_name}</a>
            {/* Available statuses: online, idle, busy, away and offline */}
            <span className="profile-status online" />
          </h3>
          <p className="profile-title">Store Manager 
          </p>
        </div>
      </div>
      {/* USER INFO - END */}
      <ul className="wraplist">	
        <li className="open"> 
        <Link to="/seller/dashboard">
            <i className="fa fa-dashboard" />
             <span className="title">Dashboard</span>
             <span className="arrow " />

            <i className="fa fa-grid" />
            <Link to="/seller/dashboard"> <span className="title">Dashboard</span>
          </Link>
          </Link>
        </li>
        <li className> 
        <Link to="/seller/products">       
            <i className="fas fa-archive" />
            <span className="title" >Products</span>
            <i className="fa fa-cubes" />
            <span className="title">Products</span>
            <span className="arrow " />
        </Link>
           </li>
           <li className> 
          <Link to="/seller/createproducts">
            <i className="fa fa-plus" />
            <span className="title"> Add Products</span>
            <span className="arrow " />
          </Link>
           </li>
           <li className> 
          <Link to="/seller/resetpassword">
            <i className="fa fa-cubes" />
            <span className="title"> Reset Password</span>
            <span className="arrow " />
          </Link>
           </li> 
          <li className> 
          <a href="javascript:;">
            <i className="fa fa-pencil-square-o" />
            <i className="fa fa-file" />
            <span className="title"> Edit Products</span>
            <span className="arrow " />
          </a>
           </li>
       
          
        <li className> 
          <Link to="/seller/dashboard/orders">
            <i className="fa fa-shopping-cart" />
            <span className="title">Orders</span>
            <span className="arrow " />
          </Link>
          <ul className="sub-menu">
            <li>
              <a className href="eco-orders.html">All Orders</a>
            </li>
          </ul>
        </li>
    
        <li className> 
          <a href="javascript:;">
            <i className="fa fa-sitemap" />
            <span className="title">Product Categories</span>
            <span className="arrow " />
          </a>
        </li>

        <li className> 
          <Link to="/seller/profile">
            <i className="fa fa-user" />
            <span className="title">Profile</span>
            <span className="arrow " />
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
    <div className="project-info">
      <div className="block1">
        <div className="graph">
          <span className="sidebar_orders">...</span>
        </div>
      </div>
      <div className="block2">

        <div className="graph">
          <span className="sidebar_visitors">...</span>
        </div>
      </div>
    </div>
  </div>
  {/*  SIDEBAR - END */}
  {/* START CONTENT */}
  <section id="main-content" className=" ">
    <section className="wrapper main-wrapper" style={{}}>
      <div className="col-xl-12 col-lg-12 col-md-12 col-12">
        <div className="page-title">
          <div className="float-left">
            <h1 className="title">SELLER DASHBOARD</h1>                          </div>
        </div>
      </div>
      <div className="clearfix" />
      <div className="col-lg-12 col-md-12 col-12">
        <section className="box nobox">
          <div className="content-body">
          <div className="cards">
  <div className="card">
    <div className="card-content">
      <div className="number">{ remainingProduct.new_quantity }</div>
      <div className="card-name">Total Product Count</div>
    </div>
    <div className="icon-box">
      <i className="fas fa-shopping-basket" />
    </div>
  </div>
  <div className="card">
    <div className="card-content">
      <div className="number">{ checkSold.Product_sold }</div><p>{ checkSold } yet</p>
    </div>
    <div className="icon-box">
      <i className="fas fa-shopping-cart" />
    </div>
  </div>
  <div className="card">
    <div className="card-content">
      <div className="number">{ remainingProduct.Total_Remaining }</div>
      <div className="card-name">Remaining Product Count </div>
    </div>
    <div className="icon-box">
      <i className="fas fa-briefcase-medical" />
    </div>
  </div>
  <div className="card">
    <div className="card-content">
      <div className="number">{remainingProduct.Total_Sold}</div>
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