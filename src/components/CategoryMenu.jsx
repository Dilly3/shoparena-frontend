import React from 'react'
import {Carousel}  from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link, useNavigate } from "react-router-dom";

export default function CartegoryMenu() {
  return (
    
    <div className="catergory_carousel">

    {/* CATERGORY SIDERBAR */}
    <div className="col-xl-2 custom-col-2 d-none d-xl-block">
  <div className="cat__menu-wrapper">
    <div className="cat-toggle">
      <button type="button" className="cat-toggle-btn">{/*<i className="fas fa-bars" />*/} Shop by department</button>
      <div className="cat__menu">
        <nav id="mobile-menu">
          <ul>
            <li>
            <Link to="/allproducts">All Categories <i className="far fa-angle-down" /></Link>
              <ul className="mega-menu">
                <li><Link to="/allproducts">Shop</Link>
                  <ul className="mega-item">
                    <li><>Fashion</></li>
                    <li><>Electronics</></li>
                    <li><>Health & Beauty</></li>
                    <li><>Phones & Tablets</></li>
                    <li><></></li>
                  </ul>
                </li>
                <li>Product Pages</li>
                  <ul className="mega-item">
                    <li><>Food & Drinks</></li>
                    <li><>Computing</></li>
                    <li><>Baby Products</></li>
                    <li><>Sporting Goods</></li>
                    <li><>Otherst</></li>
                  </ul>
               
              </ul>
            </li>
            <li>
              <a href="#baby">Baby Products
                <span className="cat-label">hot!</span>
              </a>
            </li>
            <li>
              <a href="#computer">Computing
                <span className="cat-label green">new!</span>
              </a>
            </li>
            <li><a href="#electronics">Electronics</a></li>
            <li><a href="#fashion">Fashion</a></li>
            <li className="d-laptop-none"><a href="#food">Food &amp; Drinks</a></li>
            <li><a href="#health">Health &amp; Beauty</a></li>
            <li><a href="#phones">Phones &amp; Tablets</a></li>
            <li><a href="#sports">Sports</a></li>
            <li><a href="#others">Others</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</div>


{/* CAROUSEL */}

<div >
        <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={2000}
        >

        <div className="bannerdiv">
            <img loading='lazy' src="assets/img/slider-01.jpeg" alt="LV bag" />
        </div>
        <div className="bannerdiv">
            <img loading='lazy' src="assets/img/slider-02.jpeg" alt="Laptop" />
        </div>
        <div className="bannerdiv">
            <img loading='lazy' src="assets/img/slider-03.jpeg" alt="Iphones" />
        </div>

        </Carousel>
        
        </div>

</div>
      
    
  )
}
