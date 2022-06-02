import React, { useState, useEffect } from 'react'
import axios from '../axios'

export default function SellerContainer() {

  const [checkSold, setCheckSold] = useState(0)
  const [remainingProduct, setRemainingProduct] = useState(0)
  const [findSeller, setSeller] = useState('')


  {/*Get total product count*/}
  const getSellerSoldProduct = async () => {
   
    try {
      const resp = await axios.get("/seller/total/product/sold")
      console.log(checkSold)
      console.log(resp.data.data)
      setCheckSold(resp.data.data.Product_sold)
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
      console.log(resp.data.data)
      console.log(remainingProduct)
      setRemainingProduct(resp.data.data.new_quantity)
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
            <img src={findSeller.image} className="img-fluid rounded-circle" />
          </a>
        </div>
        <div className="profile-details col-lg-8 col-md-8 col-8">
          <h3>
            <a href="ui-profile.html">{ findSeller.last_name } {findSeller.first_name}</a>
            {/* Available statuses: online, idle, busy, away and offline */}
            <span className="profile-status online" />
          </h3>
          <p className="profile-title">Store Manager</p>
        </div>
      </div>
      {/* USER INFO - END */}
      <ul className="wraplist">	
        <li className="open"> 
          <a href="index-ecommerce.html">
            <i className="fa fa-dashboard" />
            <span className="title">Dashboard</span>
          </a>
        </li>
        <li className> 
          <a href="javascript:;">
            <i className="fa fa-cubes" />
            <span className="title">Products</span>
            <span className="arrow " />
          </a>
           </li>
           <li className> 
          <a href="javascript:;">
            <i className="fa fa-cubes" />
            <span className="title"> Add Products</span>
            <span className="arrow " />
          </a>
           </li>
           <li className> 
          <a href="javascript:;">
            <i className="fa fa-cubes" />
            <span className="title"> Edit Products</span>
            <span className="arrow " />
          </a>
           </li>
       
          
        <li className> 
          <a href="javascript:;">
            <i className="fa fa-shopping-cart" />
            <span className="title">Orders</span>
            <span className="arrow " />
          </a>
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
      <div className="number">{ remainingProduct.Total_Product }</div>
      <div className="card-name">Total Quantity</div>
    </div>
    <div className="icon-box">
      <i className="fas fa-briefcase-medical" />
    </div>
  </div>
  <div className="card">
    <div className="card-content">
      <div className="number">{ checkSold }</div>
      <div className="card-name">Quantity Sold</div>
    </div>
    <div className="icon-box">
      <i className="fas fa-briefcase-medical" />
    </div>
  </div>
  <div className="card">
    <div className="card-content">
      <div className="number">{ remainingProduct }</div>
      <div className="card-name">Quantity Remaining</div>
    </div>
    <div className="icon-box">
      <i className="fas fa-briefcase-medical" />
    </div>
  </div>
  <div className="card">
    <div className="card-content">
      <div className="number">N4500</div>
      <div className="card-name">Income</div>
    </div>
    <div className="icon-box">
      <i className="fas fa-money-bill" />
    </div>
  </div>
</div>

            {/* End .row */}    
            <div className="row">

           <div className="tables">
  <div className="dashboard-table">
    <div className="heading">
      <h2>Order Overview</h2>
      <a href="#" className="btn">View All</a>
    </div>
    <table className="table-head">
      <thead>
        <tr><td>Name</td>
          <td>Product</td>
          <td>Price</td>
          <td>Action</td>
        </tr></thead>
      <tbody>
        <tr>
          <td>Oreva Ansel</td>
          <td>Television</td>
          <td>$4,000</td>
          <td>
            <i className="far fa-eye" />
            <i className="far fa-edit" />
            <i className="far fa-trash-alt" />
          </td>
        </tr>
        <tr>
          <td>Oluchi Tiyan</td>
          <td>Drapes</td>
          <td>$2,000</td>
          <td>
            <i className="far fa-eye" />
            <i className="far fa-edit" />
            <i className="far fa-trash-alt" />
          </td>
        </tr>
        <tr>
          <td>Chuks Okoro</td>
          <td>Toothpick</td>
          <td>$1</td>
          <td>
            <i className="far fa-eye" />
            <i className="far fa-edit" />
            <i className="far fa-trash-alt" />
          </td>
        </tr>
        <tr>
          <td>Victor Ihemadu</td>
          <td>Main.go</td>
          <td>$20</td>
          <td>
            <i className="far fa-eye" />
            <i className="far fa-edit" />
            <i className="far fa-trash-alt" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
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
