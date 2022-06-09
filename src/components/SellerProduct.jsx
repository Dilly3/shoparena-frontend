import React, { useState, useEffect, useNavigate } from "react";
import { Link } from "react-router-dom";
import axios from "../axios";


export default function SellerProduct() {
  const [checkSold, setCheckSold] = useState(0);
  const [remainingProduct, setRemainingProduct] = useState(0);
  const [findSeller, setSeller] = useState("");
  const [products, setSellerProducts] = useState([])
  const [total , setTotal] = useState()

  useEffect(() => {
    getSellerSoldProduct();
    findTheSeller();
    getRemainingProductCount();
    getOrders()
    // }
  }, []);
  {
    /*Get total product count*/
  }
  const getSellerSoldProduct = async () => {
    try {
      const resp = await axios.get("/seller/total/product/sold");
      
      console.log(checkSold);
      console.log(resp.data.data);
      setCheckSold(resp.data.Message);
    } catch (error) {
      setCheckSold(0);
      console.log(error);
    }
  };

  {
    /*Get the remaining product count*/
  }
  const getRemainingProductCount = async () => {
    const config = {
      header: {
        Authorization: `Bearer ${localStorage.token}`,
        "Content-Type": "application/json",
      },
    };
    try {
      const resp = await axios.get("/seller/remaining/product/count", config);
      
    
      console.log(resp.data.data);
      console.log(remainingProduct);
      setRemainingProduct(resp.data);
    } catch (error) {
      setRemainingProduct(0);
      console.log(error);
    }
  };

  {
    /*find Seller*/
  }
  const findTheSeller = async () => {
    const config = {
      header: {
        Authorization: `Bearer ${localStorage.token}`,
        "Content-Type": "application/json",
      },
    };
    try {
      const resp = await axios.get("/getsellerprofile", config);
      
     
      //console.log(resp.data.data);
      setSeller(resp.data.data);
    } catch (error) {
      //console.log(error.response);
    }
  };

  const getOrders = async () => {
    const config = {
        header: { 
        "Authorization": `Bearer ${localStorage.token}`,
        "Content-Type": "application/json"
        }
      }

    try {
      const resp = await axios.get("/seller/allproducts", config)
      let sum = 0 
      console.log(resp.data.SellerProducts)
      setSellerProducts(resp.data.SellerProducts)
      
      
      for (let i = 0; i < products.length; i++){
    sum += parseInt(products[i].quantity)
  
        }
        
        setTotal(sum)

      
    } catch (error){
        setSellerProducts('')
      console.log(error.resp)
    }
  }
 
  
  
      
    
  

 

  

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
                    src={findSeller.image}
                    className="img-fluid rounded-circle"
                  />
                </a>
              </div>
              <div className="profile-details col-lg-8 col-md-8 col-8">
                <h3>
                  <a href="ui-profile.html">
                    {findSeller.last_name} {findSeller.first_name}
                  </a>
                  {/* Available statuses: online, idle, busy, away and offline */}
                  <span className="profile-status online" />
                </h3>
                <p className="profile-title">Store Manager</p>
              </div>
            </div>
            {/* USER INFO - END */}
            <ul className="wraplist">
              <li className="open">
               
                <Link to="/seller/dashboard">
                  <li className>
                    
                    <i className="fa fa-dashboard" />
                    <span className="title">Dashboard</span>
                    <span className="arrow " />
                  </li>
                </Link>
               
               
              </li>
              <li className="">
                <Link to="/seller/products">
                  <li className>
                    <i className="fas fa-archive" />
                    <span className="title"> Products</span>
                    {/* <span className="arrow " /> */}
                  </li>
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
                <Link to="/seller/dashboard/orders">
                  <i className="fa fa-shopping-cart" />
                  <span className="title">Orders</span>
                  <span className="arrow " />
                </Link>
                <ul className="sub-menu">
                  <li>
                    <a className href="eco-orders.html">
                      All Orders
                    </a>
                  </li>
                </ul>
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
                  <h1 className="title">SELLER PRODUCTS</h1>{" "}
                </div>
              </div>
            </div>
            <div className="clearfix" />
            <div className="col-lg-12 col-md-12 col-12">
              <section className="box nobox">
                <div className="content-body">
                  <div className="cards">
                    <div className="card">
                      <div className="card-content">
                      
                        <div className="number"  >
                        { products.length }
                        </div>
                        <div className="card-name" >Products</div>
                        
                      </div>
                      <div className="icon-box">
                        <i className="fas fa-shopping-basket" />
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-content">
                      <div className="number"></div><p>{ checkSold } yet</p></div>
                        
                      <div className="icon-box">
                        <i className="fas fa-shopping-cart" />
                      </div>
                    </div>


                    
                    <div className="card">
                      <div className="card-content">
                        
                        <div className="number">{ function(){
                          let sum = 0
                          for (let i = 0; i < products.length; i++){
                            sum += parseInt(products[i].quantity)
                          
                                }
                                return sum
                        }() }</div>

                        <div className="card-name">Total Items Remaining</div>
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
                    <div className="tables"></div>
                  </div>
                </div>
              </section>
            </div>
          </section>
        </section>
        {/* END CONTENT */}
        <div className="chatapi-windows "></div>{" "}
      </div>
      {/* END CONTAINER */}
    </>
  );
}
