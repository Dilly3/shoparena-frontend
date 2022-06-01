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
  <div className="page-chatapi hideit">
    <div className="search-bar">
      <input type="text" placeholder="Search" className="form-control" />
    </div>
    <div className="chat-wrapper">
      <h4 className="group-head">Groups</h4>
      <ul className="group-list list-unstyled">
        <li className="group-row">
          <div className="group-status available">
            <i className="fa fa-circle" />
          </div>
          <div className="group-info">
            <h4><a href="#">Work</a></h4>
          </div>
        </li>
        <li className="group-row">
          <div className="group-status away">
            <i className="fa fa-circle" />
          </div>
          <div className="group-info">
            <h4><a href="#">Friends</a></h4>
          </div>
        </li>
      </ul>
      <h4 className="group-head">Favourites</h4>
      <ul className="contact-list">
        <li className="user-row" id="chat_user_1" data-user-id={1}>
          <div className="user-img">
            <a href="#"><img src="data/profile/avatar-1.png" alt /></a>
          </div>
          <div className="user-info">
            <h4><a href="#">Clarine Vassar</a></h4>
            <span className="status available" data-status="available"> Available</span>
          </div>
          <div className="user-status available">
            <i className="fa fa-circle" />
          </div>
        </li>
        <li className="user-row" id="chat_user_2" data-user-id={2}>
          <div className="user-img">
            <a href="#"><img src="data/profile/avatar-2.png" alt /></a>
          </div>
          <div className="user-info">
            <h4><a href="#">Brooks Latshaw</a></h4>
            <span className="status away" data-status="away"> Away</span>
          </div>
          <div className="user-status away">
            <i className="fa fa-circle" />
          </div>
        </li>
        <li className="user-row" id="chat_user_3" data-user-id={3}>
          <div className="user-img">
            <a href="#"><img src="data/profile/avatar-3.png" alt /></a>
          </div>
          <div className="user-info">
            <h4><a href="#">Clementina Brodeur</a></h4>
            <span className="status busy" data-status="busy"> Busy</span>
          </div>
          <div className="user-status busy">
            <i className="fa fa-circle" />
          </div>
        </li>
      </ul>
      <h4 className="group-head">More Contacts</h4>
      <ul className="contact-list">
        <li className="user-row" id="chat_user_4" data-user-id={4}>
          <div className="user-img">
            <a href="#"><img src="data/profile/avatar-4.png" alt /></a>
          </div>
          <div className="user-info">
            <h4><a href="#">Carri Busey</a></h4>
            <span className="status offline" data-status="offline"> Offline</span>
          </div>
          <div className="user-status offline">
            <i className="fa fa-circle" />
          </div>
        </li>
        <li className="user-row" id="chat_user_5" data-user-id={5}>
          <div className="user-img">
            <a href="#"><img src="data/profile/avatar-5.png" alt /></a>
          </div>
          <div className="user-info">
            <h4><a href="#">Melissa Dock</a></h4>
            <span className="status offline" data-status="offline"> Offline</span>
          </div>
          <div className="user-status offline">
            <i className="fa fa-circle" />
          </div>
        </li>
        <li className="user-row" id="chat_user_6" data-user-id={6}>
          <div className="user-img">
            <a href="#"><img src="data/profile/avatar-1.png" alt /></a>
          </div>
          <div className="user-info">
            <h4><a href="#">Verdell Rea</a></h4>
            <span className="status available" data-status="available"> Available</span>
          </div>
          <div className="user-status available">
            <i className="fa fa-circle" />
          </div>
        </li>
        <li className="user-row" id="chat_user_7" data-user-id={7}>
          <div className="user-img">
            <a href="#"><img src="data/profile/avatar-2.png" alt /></a>
          </div>
          <div className="user-info">
            <h4><a href="#">Linette Lheureux</a></h4>
            <span className="status busy" data-status="busy"> Busy</span>
          </div>
          <div className="user-status busy">
            <i className="fa fa-circle" />
          </div>
        </li>
        <li className="user-row" id="chat_user_8" data-user-id={8}>
          <div className="user-img">
            <a href="#"><img src="data/profile/avatar-3.png" alt /></a>
          </div>
          <div className="user-info">
            <h4><a href="#">Araceli Boatright</a></h4>
            <span className="status away" data-status="away"> Away</span>
          </div>
          <div className="user-status away">
            <i className="fa fa-circle" />
          </div>
        </li>
        <li className="user-row" id="chat_user_9" data-user-id={9}>
          <div className="user-img">
            <a href="#"><img src="data/profile/avatar-4.png" alt /></a>
          </div>
          <div className="user-info">
            <h4><a href="#">Clay Peskin</a></h4>
            <span className="status busy" data-status="busy"> Busy</span>
          </div>
          <div className="user-status busy">
            <i className="fa fa-circle" />
          </div>
        </li>
        <li className="user-row" id="chat_user_10" data-user-id={10}>
          <div className="user-img">
            <a href="#"><img src="data/profile/avatar-5.png" alt /></a>
          </div>
          <div className="user-info">
            <h4><a href="#">Loni Tindall</a></h4>
            <span className="status away" data-status="away"> Away</span>
          </div>
          <div className="user-status away">
            <i className="fa fa-circle" />
          </div>
        </li>
        <li className="user-row" id="chat_user_11" data-user-id={11}>
          <div className="user-img">
            <a href="#"><img src="data/profile/avatar-1.png" alt /></a>
          </div>
          <div className="user-info">
            <h4><a href="#">Tanisha Kimbro</a></h4>
            <span className="status idle" data-status="idle"> Idle</span>
          </div>
          <div className="user-status idle">
            <i className="fa fa-circle" />
          </div>
        </li>
        <li className="user-row" id="chat_user_12" data-user-id={12}>
          <div className="user-img">
            <a href="#"><img src="data/profile/avatar-2.png" alt /></a>
          </div>
          <div className="user-info">
            <h4><a href="#">Jovita Tisdale</a></h4>
            <span className="status idle" data-status="idle"> Idle</span>
          </div>
          <div className="user-status idle">
            <i className="fa fa-circle" />
          </div>
        </li>
      </ul>
    </div>
  </div>
  <div className="chatapi-windows ">
  </div>  </div>
{/* END CONTAINER */}

    
    </>
  )
}
