import { useState, useEffect } from "react"
import React from "react"
import {Link,useNavigate} from "react-router-dom"
import axios from "../axios"


const initialState = {
  category:"All Categories",
  lowerPrice:"",
  upperPrice:"",
  sort:"",
  }

  

export default function GeneralNavBar(){
  
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1); 
  }
  const [localStore , setLocalStore] = useState(localStorage.getItem("access_token"))
   const navigate = useNavigate()
 
   const LogOut = async () => {
    try {
      const headers = {
          "Authorization": `Bearer ${localStorage.token}`,
          "Content-Type": "application/json",
          "access_token" : `${localStorage.token}`
        }
      const resp = await axios.post("/buyer/logout",{}, {headers:{"access_token": localStore }})
      console.log(resp)
      setLocalStore("")
       localStorage.clear()
      navigate("/")
      
      
    } catch (error) {
      console.log(error.response)
    }
  }
 
      
  const [user, setUser] = useState(null)


  const token = localStorage.getItem("token")

  
  const getSellerProfile = async () => {
   
    try {
      const headers = {
          "Authorization": `Bearer ${localStorage.token}`,
          "Content-Type": "application/json"
        }
      const resp = await axios.get("/getbuyerprofile", {headers: headers})
      console.log(resp.data.data.first_name)
      setUser(resp.data.data)
    } catch (error) {
      console.log(error.response)
    }
  }

  useEffect(() => {
    if (localStorage.token) {
      getSellerProfile()
    }
    
  }, [])
    return(
        <>
        <header className="yellow-header">
          <div className="header__area">
            <div className="header__top d-none d-sm-block">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-xl-6 col-lg-6 col-md-5 d-none d-md-block">
                    <div className="header__welcome">
                      <span>Welcome to OJA</span>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-7">
                    <div className="header__action d-flex justify-content-center justify-content-md-end">
                      <ul>
                      
                      <li>
                          {localStorage.token ? (
                              <h6>Hello,{user && capitalizeFirstLetter(user.first_name)}</h6>
                          ) :  <Link to="/buyer/login">Buyer Sign In</Link>}
                          
                        </li>
                     
                        <li>
                          {localStorage.token ? (
                              <button onClick={LogOut}> <span>Logout</span></button>
                          ) :  <Link to="/seller/login">Seller Sign in</Link>}
                          
                        </li>
                           
       

                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="header__info">
              <div className="container">
                <div className="row align-items-center">
                  
            
                      <span className="logo">
                        <Link to="/">
                          <img
                            src="../assets/img/logo/oja.png"
                            alt="logo"
                          /> <h4 className="slogan">OJA! Your One Stop For Everything AFRICAN</h4>
                        </Link> 
                      </span>
                </div>
              </div>
            </div>
            <div className="header__bottom">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-xl-9 col-lg-9 col-md-12 col-sm-6 col-6">
                    <div className="header__bottom-left d-flex d-xl-block align-items-center">
                      <div className="main-menu main-menu-2 d-none d-md-block">
                        <nav className="link">
                          <ul>
                          <Link to="/">
                            <li>
                                <h4 className="a-link">HOME</h4>  
                            </li>
                        </Link>
                            {/* <li>
                              <a href="about.html">
                                pages <i className="far fa-angle-down" />
                              </a>
                              <ul className="submenu">
                                <li>
                                  <a href="login.html">Login</a>
                                </li>
                                <li>
                                  <a href="register.html">Register</a>
                                </li>
                                <li>
                                  <a href="cart.html">Cart</a>
                                </li>
                                <li>
                                  <a href="wishlist.html">Wishlist</a>
                                </li>
                                <li>
                                  <a href="checkout.html">Checkout</a>
                                </li>
                              </ul>
                            </li> */}
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-3 col-lg-3 col-sm-6 col-6 d-md-none d-lg-block">
                    <div className="header__bottom-right d-flex justify-content-end">
                      <div className="header__currency">
                        <select>
                          <option>NGN</option>
                        </select>
                      </div>
                      <div className="header__lang d-md-none d-lg-block">
                        <select>
                          <option>English</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        </>
    )
}