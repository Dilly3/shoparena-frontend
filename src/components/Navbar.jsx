import { useState, useEffect } from "react"
import React from "react"
import {Link,useNavigate} from "react-router-dom"
import {useAppContext} from "../context/ContextUse"
import axios from "../axios"


const initialState = {
  category:"",
  lowerPrice:"",
  upperPrice:"",
  sort:"",
  }

  

export default function Navbar(){
  
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1); 
  }
  const [localStore , setLocalStore] = useState(localStorage.getItem("access_token"))
   const navigate = useNavigate()
 
   const LogOut = async () => {
    // console.log(localStorage.token)
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
 
      
  const { handleSearch, cart, cartAmount} = useAppContext()

  console.log(cart, cartAmount)
  const [user, setUser] = useState(null)
  const [input, setInput] = useState(initialState)


  const handleSubmit = (e)=>{
    e.preventDefault()
    handleSearch(input)
  }
  const handleChange = (e)=>{
setInput({...input, [e.target.name]:e.target.value})
// console.log(e)
  }

  const token = localStorage.getItem("token")

  
  const getSellerProfile = async () => {
    // console.log(localStorage.token)
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
                  <div className="col-xl-4 col-lg-3">
                    <div className="header__info-left d-flex justify-content-center justify-content-sm-between align-items-center">
                      <div className="logo">
                        <Link to="/">
                          <img
                            src="assets/img/logo/oja.png"
                            alt="logo"
                          />
                        </Link>
                      </div>
                      <div className="header__hotline align-items-center d-none d-sm-flex d-lg-none d-xl-flex">
                        <div className="header__hotline-icon">
                          <i className="fal fa-headset" />
                        </div>
                        <div className="header__hotline-info">
                          <span>Hotline Free:</span>
                          <h6>+234-813-347-7843</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-8 col-lg-9">
                    <div className="header__info-right">
                      <div className="header__search f-left d-none d-sm-block">

                        <form className="search" onSubmit={handleSubmit} >

                      <div>
                      <select className="all" id="category" placeholder="Categories" onChange = {handleChange} name = "category">
                        <option value="">All Categories</option>
                        <option value="baby products">Baby Products</option>
                        <option value="computing">Computing</option>
                        <option value="electronics">Electronics</option> 
                        <option value="fashion">Fashion</option>
                        <option value="food drinks">Food/Drinks</option>
                        <option value="health & beauty">Health/Beauty</option>
                        <option value="phones & tablets">Phone/Tablets</option>   
                        <option value="sporting goods">Sporting goods</option>
                        <option value="others">Others</option>   
                    </select>

                    <select className="cat" id="lower-price" placeholder="Lower Price Limit" onChange = {handleChange} name = "lowerPrice">
                        <option value="0">Lower Price Limit</option>
                        <option value="100">100</option>
                        <option value="200">200</option>
                        <option value="500">500</option> 
                        <option value="1000">1000</option>
                        <option value="2000">2000</option>
                        <option value="5000">5000</option>
                        <option value="10000">10000</option>   
                        <option value="20000">20000</option>
                        <option value="50000">50000</option>   
                    </select>

                    <select className="cat"  id="upper-price" placeholder="Upper Price Limit" onChange = {handleChange} name = "upperPrice">
                        <option value="0">Upper Price Limit</option>
                        <option value="50000">50000</option>
                        <option value="20000">10000</option>
                        <option value="10000">10000</option> 
                        <option value="5000">5000</option>
                        <option value="2000">2000</option>
                        <option value="1000">1000</option>
                        <option value="500">500</option>   
                        <option value="200">200</option>
                        <option value="100">100</option>   
                    </select>
               
                        <input type="text" id="name" placeholder="Search For Product..."  onChange={handleChange} name = "sort"/>
                        <button className="cat-btn" type="submit">Search</button>
                    </div>
                        </form>
                      </div>
                      {token && <div className="cart__mini-wrapper d-none d-md-flex f-right p-relative">
                        <a href="javascript:void(0);" className="cart__toggle">
                          <span className="cart__total-item">{cart}</span>
                        </a>
                        <span className="cart__content">
                          <span className="cart__my">My Cart:</span>
                          <span className="cart__total-price">${cartAmount}</span>
                        </span>
                      </div>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="header__bottom">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-xl-9 col-lg-9 col-md-12 col-sm-6 col-6">
                    <div className="header__bottom-left d-flex d-xl-block align-items-center">
                      {/* <div className="side-menu d-xl-none mr-20">
                        <button
                          type="button"
                          className="side-menu-btn side-menu-btn-2 offcanvas-toggle-btn"
                        >
                          <i className="fas fa-bars" />
                        </button>
                      </div> */}

                      <div className="main-menu main-menu-2 d-none d-md-block">
                        <nav>
                          <ul>
                            <li>
                              <a href="about.html">about us</a>
                            </li>
                            <li>
                              <a href="contact.html">contact</a>
                            </li>
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
                          <option>USD</option>
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