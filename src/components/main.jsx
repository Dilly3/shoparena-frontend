import React, {useEffect, useState} from "react"

import axios from "../axios"

export default function Main(){
    const [products, setProducts] = useState([])
  
  
  const getAllProducts =  async () => {
      try {
          const resp = await axios.get("/products")
          // console.log(resp.data)
        
        setProducts(resp.data.all_Products)
        // console.log(products)
      } catch (error) {
          // console.log(error.response.data)
      }
  }
  
  
  
    const getAllCategories =  async () => {
        try {
            const resp = await axios.get("/products")
            console.log(resp.data)
            setProducts(resp.data.all_products)
        } catch (error) {
            console.log(error.response.data)
        }
    }
    const createProduct =  async (product) => {
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json"
                }
            }
            const resp = await axios.post("/products", product, config)
            console.log(resp.data)
            setProducts(resp.data.all_products)
        } catch (error) {
            console.log(error.response.data)
        }
    }
    useEffect(() => {
        // getAllProducts()
    }, [])
    return(
        <>
           <main>
  {/* slider area satrt */}
  <section className="slider__area pt-50">
    <div className="container">
      <div className="row">
        <div className="col-xl-2 custom-col-2 d-none d-xl-block">
          <div className="cat__menu-wrapper">
            <div className="cat-toggle cat-toggle-2">
              <button type="button" className="cat-toggle-btn"><i className="fas fa-bars" /> Shop by department</button>
              <div className="cat__menu">
                <nav id="mobile-menu">
                  <ul>
                    <li>
                      <a href="product.html">All Categories <i className="far fa-angle-down" /></a>
                      <ul className="mega-menu">
                        <li><a href="product.html">Shop Pages</a>
                          <ul className="mega-item">
                            <li><a href="product-details.html">Standard SHop Page</a></li>
                            <li><a href="product-details.html">Shop Right Sidebar</a></li>
                            <li><a href="product-details.html">Shop Left Sidebar</a></li>
                            <li><a href="product-details.html">Shop 3 Column</a></li>
                            <li><a href="product-details.html">Shop 4 Column</a></li>
                          </ul>
                        </li>
                        <li><a href="product.html">Product Pages</a>
                          <ul className="mega-item">
                            <li><a href="product-details.html">Product Details</a></li>
                            <li><a href="product-details.html">Product V2</a></li>
                            <li><a href="product-details.html">Product V3</a></li>
                            <li><a href="product-details.html">Varriable Product</a></li>
                            <li><a href="product-details.html">External Product</a></li>
                          </ul>
                        </li>
                        <li><a href="product.html">Other Pages</a>
                          <ul className="mega-item">
                            <li><a href="product-details.html">wishlist</a></li>
                            <li><a href="product-details.html">Shopping Cart</a></li>
                            <li><a href="product-details.html">Checkout</a></li>
                            <li><a href="product-details.html">Login</a></li>
                            <li><a href="product-details.html">Register</a></li>
                          </ul>
                        </li>
                        <li><a href="product.html">Phone &amp; Tablets</a>
                          <ul className="mega-item">
                            <li><a href="product-details.html">Catagory 1</a></li>
                            <li><a href="product-details.html">Catagory 2</a></li>
                            <li><a href="product-details.html">Catagory 3</a></li>
                            <li><a href="product-details.html">Catagory 4</a></li>
                          </ul>
                        </li>
                        <li><a href="product.html">Phone &amp; Tablets</a>
                          <ul className="mega-item">
                            <li><a href="product-details.html">Catagory 1</a></li>
                            <li><a href="product-details.html">Catagory 2</a></li>
                            <li><a href="product-details.html">Catagory 3</a></li>
                            <li><a href="product-details.html">Catagory 4</a></li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="product.html">Best Seller Products
                        <span className="cat-label">hot!</span>
                      </a>
                    </li>
                    <li>
                      <a href="product.html">Top 10 Offers
                        <span className="cat-label green">new!</span>
                      </a>
                    </li>
                    <li>
                      <a href="product.html">New Arrivals <i className="far fa-angle-down" /></a>
                      <ul className="submenu">
                        <li><a href="product.html">Home Appliances</a></li>
                        <li><a href="product.html">Technology</a>
                          <ul className="submenu">
                            <li><a href="product.html">Storage Devices</a></li>
                            <li><a href="product.html">Monitors</a></li>
                            <li><a href="product.html">Laptops</a></li>
                          </ul>
                        </li>
                        <li><a href="product.html">Office Equipments</a></li>
                      </ul>
                    </li>
                    <li><a href="product.html">Phones &amp; Tablets</a></li>
                    <li><a href="product.html">Electronics &amp; Digital</a></li>
                    <li className="d-laptop-none"><a href="product.html">Fashion &amp; Clothings</a></li>
                    <li className="d-laptop-none"><a href="product.html">Jewelry &amp; Watches</a></li>
                    <li><a href="product.html">Health &amp; Beauty</a></li>
                    <li><a href="product.html">TV &amp; Audio</a></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-10 custom-col-10 col-lg-12">
          <div className="row">
            <div className="col-xl-9 custom-col-9 col-lg-8">
              <div className="slider__inner slider-active">
                <div className="single-slider w-img">
                  <img src="assets/img/slider/02/slider-01.jpg" alt="slider" />
                </div>
                <div className="single-slider w-img">
                  <img src="assets/img/slider/02/slider-02.jpg" alt="slider" />
                </div>
                <div className="single-slider w-img">
                  <img src="assets/img/slider/02/slider-03.jpg" alt="slider" />
                </div>
              </div>
            </div>
            <div className="col-xl-3 custom-col-3 col-lg-4 d-none d-md-block">
              <div className="banner__area">
                <div className="banner__item mb-20 w-img">
                  <a href="product-details.html"><img src="assets/img/banner/top/banner-top-3.jpg" alt /></a>
                </div>
                <div className="banner__item mb-20 w-img">
                  <a href="product-details.html"><img src="assets/img/banner/top/banner-top-4.jpg" alt /></a>
                </div>
                <div className="banner__item w-img">
                  <a href="product-details.html"><img src="assets/img/banner/top/banner-top-5.jpg" alt /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* slider area end */}
  {/* features area start */}
  <section className="features__area pt-40 pb-20 pl-10 pr-10">
    <div className="container">
      <div className="features__inner">
        <div className="row row-cols-xxl-5 row-cols-xl-5 row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 gx-0">
          <div className="col">
            <div className="features__item d-flex white-bg">
              <div className="features__icon mr-15">
                <i className="fal fa-rocket-launch" />
              </div>
              <div className="features__content">
                <h6>Free Shipping</h6>
                <p>Free Shipping On All Order</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="features__item d-flex white-bg">
              <div className="features__icon mr-15">
                <i className="fal fa-sync" />
              </div>
              <div className="features__content">
                <h6>Money Guarantee</h6>
                <p>30 Day Money Back Guarantee</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="features__item d-flex white-bg">
              <div className="features__icon mr-15">
                <i className="fal fa-user-headset" />
              </div>
              <div className="features__content">
                <h6>Online Support 24/7</h6>
                <p>Technical Support Stand By</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="features__item d-flex white-bg">
              <div className="features__icon mr-15">
                <i className="fal fa-thumbs-up" />
              </div>
              <div className="features__content">
                <h6>Secure Payment</h6>
                <p>All Payment Method are accepted</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="features__item features__item-last d-flex white-bg">
              <div className="features__icon mr-15">
                <i className="fal fa-badge-dollar" />
              </div>
              <div className="features__content">
                <h6>Member Discount</h6>
                <p>Upto 40% Discount All Products</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* features area end */}
  {/* banner area start */}
  <section className="banner__area pt-20 pb-10">
    <div className="container">
      <div className="row">
        <div className="col-xl-4 col-lg-4 col-md-6">
          <div className="banner__item w-img mb-30">
            <a href="product-details.html"><img src="assets/img/banner/banner-1.jpg" alt /></a>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6">
          <div className="banner__item mb-30 w-img">
            <a href="product-details.html"><img src="assets/img/banner/banner-2.jpg" alt /></a>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6">
          <div className="banner__item mb-30 w-img">
            <a href="product-details.html"><img src="assets/img/banner/banner-3.jpg" alt /></a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* banner area end */}
  {/* best selling area start */}
  <section className="best__sell pt-15 pb-40">
    <div className="container">
      <div className="row">
        <div className="col-xl-12">
          <div className="section__head d-md-flex justify-content-between mb-40">
            <div className="section__title">
              <h3>Best Selling<span>Products</span></h3>
            </div>
            <div className="product__nav-tab mr-75">
              <ul className="nav nav-tabs" id="best-sell-tab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button className="nav-link active" id="new-tab" data-bs-toggle="tab" data-bs-target="#new" type="button" role="tab" aria-controls="new" aria-selected="true">New Arrival</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="featured-tab" data-bs-toggle="tab" data-bs-target="#featured" type="button" role="tab" aria-controls="featured" aria-selected="false">Featured</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="hot-tab" data-bs-toggle="tab" data-bs-target="#hot" type="button" role="tab" aria-controls="hot" aria-selected="false">Hot Sale</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="random-tab" data-bs-toggle="tab" data-bs-target="#random" type="button" role="tab" aria-controls="random" aria-selected="false">Random</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-12">
            {
              products.length > 0 ? products.map(product => {
                return (
                  <div className="" key={products.ID}>
                      <h3>{product.ID}</h3>
                      <h3>{product.title}</h3>
                      <h3>&#8358;{product.price}</h3>
                  </div>
                )
              }) : (() => {
                  getAllProducts()
                  return (
                    <p>Loading...</p>
                  )
              })()
            }
          <div className="tab-content" id="best-sell-tabContent">
            <div className="tab-pane fade show active" id="new" role="tabpanel" aria-labelledby="new-tab">
              <div className="product__slider owl-carousel">
                <div className="product__item product__item-2 white-bg">
                  <div className="product__thumb p-relative">
                    <a href="product-details.html" className="w-img">
                      <img src="assets/img/shop/product/product-1.jpg" alt="product" />
                      <img className="second-img" src="assets/img/shop/product/product-2.jpg" alt="product" />
                    </a>
                    <div className="product__action p-absolute">
                      <ul>
                        <li>
                          <a href="#" title="Add to Wishlist"><i className="fal fa-heart" /></a>
                        </li>
                        <li>
                          <a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#productModalId"><i className="fal fa-search" /></a>
                        </li>
                        <li>
                          <a href="#" title="Compare"><i className="far fa-sliders-h" /></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="product__content text-center">
                    <h6 className="product-name">
                      <a className="product-item-link" href="product-details.html"> High Quality Glass Ultra-Thin Kitchen Scale</a>
                    </h6>
                    <div className="rating">
                      <ul>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                      </ul>
                    </div>
                    <span className="price">$500.00</span>
                  </div>
                  <div className="product__add-btn">
                    <button type="button">Add to Cart</button>
                  </div>
                </div>
                <div className="product__item product__item-2 white-bg">
                  <div className="product__thumb p-relative">
                    <a href="product-details.html" className="w-img">
                      <img src="assets/img/shop/product/product-3.jpg" alt="product" />
                      <img className="second-img" src="assets/img/shop/product/product-4.jpg" alt="product" />
                    </a>
                    <div className="product__action p-absolute">
                      <ul>
                        <li>
                          <a href="#" title="Add to Wishlist"><i className="fal fa-heart" /></a>
                        </li>
                        <li>
                          <a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#productModalId"><i className="fal fa-search" /></a>
                        </li>
                        <li>
                          <a href="#" title="Compare"><i className="far fa-sliders-h" /></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="product__content text-center">
                    <h6 className="product-name">
                      <a className="product-item-link" href="product-details.html"> LG 27UD58: £347.21, Ebuyer.com </a>
                    </h6>
                    <div className="rating">
                      <ul>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                      </ul>
                    </div>
                    <span className="price">$560.00</span>
                  </div>
                  <div className="product__add-btn">
                    <button type="button">Add to Cart</button>
                  </div>
                </div>
                <div className="product__item product__item-2 white-bg">
                  <div className="product__thumb p-relative">
                    <a href="product-details.html" className="w-img">
                      <img src="assets/img/shop/product/product-5.jpg" alt="product" />
                      <img className="second-img" src="assets/img/shop/product/product-6.jpg" alt="product" />
                    </a>
                    <div className="product__action p-absolute">
                      <ul>
                        <li>
                          <a href="#" title="Add to Wishlist"><i className="fal fa-heart" /></a>
                        </li>
                        <li>
                          <a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#productModalId"><i className="fal fa-search" /></a>
                        </li>
                        <li>
                          <a href="#" title="Compare"><i className="far fa-sliders-h" /></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="product__content text-center">
                    <h6 className="product-name">
                      <a className="product-item-link" href="product-details.html"> Samsung C49J89: £875, Debenhams Plus </a>
                    </h6>
                    <div className="rating">
                      <ul>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                      </ul>
                    </div>
                    <span className="price">$450.00</span>
                  </div>
                  <div className="product__add-btn">
                    <button type="button">Add to Cart</button>
                  </div>
                </div>
                <div className="product__item product__item-2 white-bg">
                  <div className="product__thumb p-relative">
                    <a href="product-details.html" className="w-img">
                      <img src="assets/img/shop/product/product-7.jpg" alt="product" />
                      <img className="second-img" src="assets/img/shop/product/product-8.jpg" alt="product" />
                    </a>
                    <div className="product__action p-absolute">
                      <ul>
                        <li>
                          <a href="#" title="Add to Wishlist"><i className="fal fa-heart" /></a>
                        </li>
                        <li>
                          <a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#productModalId"><i className="fal fa-search" /></a>
                        </li>
                        <li>
                          <a href="#" title="Compare"><i className="far fa-sliders-h" /></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="product__content text-center">
                    <h6 className="product-name">
                      <a className="product-item-link" href="product-details.html"> Blink Home Security Camera System 01 </a>
                    </h6>
                    <div className="rating">
                      <ul>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                      </ul>
                    </div>
                    <span className="price">$720.00</span>
                  </div>
                  <div className="product__add-btn">
                    <button type="button">Add to Cart</button>
                  </div>
                </div>
                <div className="product__item product__item-2 white-bg">
                  <div className="product__thumb p-relative">
                    <a href="product-details.html" className="w-img">
                      <img src="assets/img/shop/product/product-9.jpg" alt="product" />
                      <img className="second-img" src="assets/img/shop/product/product-10.jpg" alt="product" />
                    </a>
                    <div className="product__action p-absolute">
                      <ul>
                        <li>
                          <a href="#" title="Add to Wishlist"><i className="fal fa-heart" /></a>
                        </li>
                        <li>
                          <a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#productModalId"><i className="fal fa-search" /></a>
                        </li>
                        <li>
                          <a href="#" title="Compare"><i className="far fa-sliders-h" /></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="product__content text-center">
                    <h6 className="product-name">
                      <a className="product-item-link" href="product-details.html"> Blue t-shir for men (X, M, XL, XXL) </a>
                    </h6>
                    <div className="rating">
                      <ul>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                      </ul>
                    </div>
                    <span className="price">$720.00</span>
                  </div>
                  <div className="product__add-btn">
                    <button type="button">Add to Cart</button>
                  </div>
                </div>
                <div className="product__item product__item-2 white-bg">
                  <div className="product__thumb p-relative">
                    <a href="product-details.html" className="w-img">
                      <img src="assets/img/shop/product/product-11.jpg" alt="product" />
                      <img className="second-img" src="assets/img/shop/product/product-12.jpg" alt="product" />
                    </a>
                    <div className="product__action p-absolute">
                      <ul>
                        <li>
                          <a href="#" title="Add to Wishlist"><i className="fal fa-heart" /></a>
                        </li>
                        <li>
                          <a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#productModalId"><i className="fal fa-search" /></a>
                        </li>
                        <li>
                          <a href="#" title="Compare"><i className="far fa-sliders-h" /></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="product__content text-center">
                    <h6 className="product-name">
                      <a className="product-item-link" href="product-details.html"> Samsung A20 Pro Ultra CPU 4/64 GB </a>
                    </h6>
                    <div className="rating">
                      <ul>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                      </ul>
                    </div>
                    <span className="price">$720.00</span>
                  </div>
                  <div className="product__add-btn">
                    <button type="button">Add to Cart</button>
                  </div>
                </div>
                <div className="product__item product__item-2 white-bg">
                  <div className="product__thumb p-relative">
                    <a href="product-details.html" className="w-img">
                      <img src="assets/img/shop/product/product-7.jpg" alt="product" />
                      <img className="second-img" src="assets/img/shop/product/product-8.jpg" alt="product" />
                    </a>
                    <div className="product__action p-absolute">
                      <ul>
                        <li>
                          <a href="#" title="Add to Wishlist"><i className="fal fa-heart" /></a>
                        </li>
                        <li>
                          <a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#productModalId"><i className="fal fa-search" /></a>
                        </li>
                        <li>
                          <a href="#" title="Compare"><i className="far fa-sliders-h" /></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="product__content text-center">
                    <h6 className="product-name">
                      <a className="product-item-link" href="product-details.html"> Blink Home Security Camera System 01 </a>
                    </h6>
                    <div className="rating">
                      <ul>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                      </ul>
                    </div>
                    <span className="price">$720.00</span>
                  </div>
                  <div className="product__add-btn">
                    <button type="button">Add to Cart</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="featured" role="tabpanel" aria-labelledby="featured-tab">
              <div className="product__slider owl-carousel">
                <div className="product__item product__item-2 white-bg">
                  <div className="product__thumb p-relative">
                    <a href="product-details.html" className="w-img">
                      <img src="assets/img/shop/product/product-1.jpg" alt="product" />
                      <img className="second-img" src="assets/img/shop/product/product-2.jpg" alt="product" />
                    </a>
                    <div className="product__action p-absolute">
                      <ul>
                        <li>
                          <a href="#" title="Add to Wishlist"><i className="fal fa-heart" /></a>
                        </li>
                        <li>
                          <a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#productModalId"><i className="fal fa-search" /></a>
                        </li>
                        <li>
                          <a href="#" title="Compare"><i className="far fa-sliders-h" /></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="product__content text-center">
                    <h6 className="product-name">
                      <a className="product-item-link" href="product-details.html"> High Quality Glass Ultra-Thin Kitchen Scale</a>
                    </h6>
                    <div className="rating">
                      <ul>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                      </ul>
                    </div>
                    <span className="price">$500.00</span>
                  </div>
                  <div className="product__add-btn">
                    <button type="button">Add to Cart</button>
                  </div>
                </div>
                <div className="product__item product__item-2 white-bg">
                  <div className="product__thumb p-relative">
                    <a href="product-details.html" className="w-img">
                      <img src="assets/img/shop/product/product-3.jpg" alt="product" />
                      <img className="second-img" src="assets/img/shop/product/product-4.jpg" alt="product" />
                    </a>
                    <div className="product__action p-absolute">
                      <ul>
                        <li>
                          <a href="#" title="Add to Wishlist"><i className="fal fa-heart" /></a>
                        </li>
                        <li>
                          <a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#productModalId"><i className="fal fa-search" /></a>
                        </li>
                        <li>
                          <a href="#" title="Compare"><i className="far fa-sliders-h" /></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="product__content text-center">
                    <h6 className="product-name">
                      <a className="product-item-link" href="product-details.html"> LG 27UD58: £347.21, Ebuyer.com </a>
                    </h6>
                    <div className="rating">
                      <ul>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                      </ul>
                    </div>
                    <span className="price">$560.00</span>
                  </div>
                  <div className="product__add-btn">
                    <button type="button">Add to Cart</button>
                  </div>
                </div>
                <div className="product__item product__item-2 white-bg">
                  <div className="product__thumb p-relative">
                    <a href="product-details.html" className="w-img">
                      <img src="assets/img/shop/product/product-5.jpg" alt="product" />
                      <img className="second-img" src="assets/img/shop/product/product-6.jpg" alt="product" />
                    </a>
                    <div className="product__action p-absolute">
                      <ul>
                        <li>
                          <a href="#" title="Add to Wishlist"><i className="fal fa-heart" /></a>
                        </li>
                        <li>
                          <a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#productModalId"><i className="fal fa-search" /></a>
                        </li>
                        <li>
                          <a href="#" title="Compare"><i className="far fa-sliders-h" /></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="product__content text-center">
                    <h6 className="product-name">
                      <a className="product-item-link" href="product-details.html"> Samsung C49J89: £875, Debenhams Plus </a>
                    </h6>
                    <div className="rating">
                      <ul>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                      </ul>
                    </div>
                    <span className="price">$450.00</span>
                  </div>
                  <div className="product__add-btn">
                    <button type="button">Add to Cart</button>
                  </div>
                </div>
                <div className="product__item product__item-2 white-bg">
                  <div className="product__thumb p-relative">
                    <a href="product-details.html" className="w-img">
                      <img src="assets/img/shop/product/product-7.jpg" alt="product" />
                      <img className="second-img" src="assets/img/shop/product/product-8.jpg" alt="product" />
                    </a>
                    <div className="product__action p-absolute">
                      <ul>
                        <li>
                          <a href="#" title="Add to Wishlist"><i className="fal fa-heart" /></a>
                        </li>
                        <li>
                          <a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#productModalId"><i className="fal fa-search" /></a>
                        </li>
                        <li>
                          <a href="#" title="Compare"><i className="far fa-sliders-h" /></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="product__content text-center">
                    <h6 className="product-name">
                      <a className="product-item-link" href="product-details.html"> Blink Home Security Camera System 01 </a>
                    </h6>
                    <div className="rating">
                      <ul>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                      </ul>
                    </div>
                    <span className="price">$720.00</span>
                  </div>
                  <div className="product__add-btn">
                    <button type="button">Add to Cart</button>
                  </div>
                </div>
                <div className="product__item product__item-2 white-bg">
                  <div className="product__thumb p-relative">
                    <a href="product-details.html" className="w-img">
                      <img src="assets/img/shop/product/product-9.jpg" alt="product" />
                      <img className="second-img" src="assets/img/shop/product/product-10.jpg" alt="product" />
                    </a>
                    <div className="product__action p-absolute">
                      <ul>
                        <li>
                          <a href="#" title="Add to Wishlist"><i className="fal fa-heart" /></a>
                        </li>
                        <li>
                          <a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#productModalId"><i className="fal fa-search" /></a>
                        </li>
                        <li>
                          <a href="#" title="Compare"><i className="far fa-sliders-h" /></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="product__content text-center">
                    <h6 className="product-name">
                      <a className="product-item-link" href="product-details.html"> Blue t-shir for men (X, M, XL, XXL) </a>
                    </h6>
                    <div className="rating">
                      <ul>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                      </ul>
                    </div>
                    <span className="price">$720.00</span>
                  </div>
                  <div className="product__add-btn">
                    <button type="button">Add to Cart</button>
                  </div>
                </div>
                <div className="product__item product__item-2 white-bg">
                  <div className="product__thumb p-relative">
                    <a href="product-details.html" className="w-img">
                      <img src="assets/img/shop/product/product-11.jpg" alt="product" />
                      <img className="second-img" src="assets/img/shop/product/product-12.jpg" alt="product" />
                    </a>
                    <div className="product__action p-absolute">
                      <ul>
                        <li>
                          <a href="#" title="Add to Wishlist"><i className="fal fa-heart" /></a>
                        </li>
                        <li>
                          <a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#productModalId"><i className="fal fa-search" /></a>
                        </li>
                        <li>
                          <a href="#" title="Compare"><i className="far fa-sliders-h" /></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="product__content text-center">
                    <h6 className="product-name">
                      <a className="product-item-link" href="product-details.html"> Samsung A20 Pro Ultra CPU 4/64 GB </a>
                    </h6>
                    <div className="rating">
                      <ul>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                      </ul>
                    </div>
                    <span className="price">$720.00</span>
                  </div>
                  <div className="product__add-btn">
                    <button type="button">Add to Cart</button>
                  </div>
                </div>
                <div className="product__item product__item-2 white-bg">
                  <div className="product__thumb p-relative">
                    <a href="product-details.html" className="w-img">
                      <img src="assets/img/shop/product/product-7.jpg" alt="product" />
                      <img className="second-img" src="assets/img/shop/product/product-8.jpg" alt="product" />
                    </a>
                    <div className="product__action p-absolute">
                      <ul>
                        <li>
                          <a href="#" title="Add to Wishlist"><i className="fal fa-heart" /></a>
                        </li>
                        <li>
                          <a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#productModalId"><i className="fal fa-search" /></a>
                        </li>
                        <li>
                          <a href="#" title="Compare"><i className="far fa-sliders-h" /></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="product__content text-center">
                    <h6 className="product-name">
                      <a className="product-item-link" href="product-details.html"> Blink Home Security Camera System 01 </a>
                    </h6>
                    <div className="rating">
                      <ul>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                      </ul>
                    </div>
                    <span className="price">$720.00</span>
                  </div>
                  <div className="product__add-btn">
                    <button type="button">Add to Cart</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="hot" role="tabpanel" aria-labelledby="hot-tab">
              <div className="product__slider owl-carousel">
                <div className="product__item product__item-2 white-bg">
                  <div className="product__thumb p-relative">
                    <a href="product-details.html" className="w-img">
                      <img src="assets/img/shop/product/product-1.jpg" alt="product" />
                      <img className="second-img" src="assets/img/shop/product/product-2.jpg" alt="product" />
                    </a>
                    <div className="product__action p-absolute">
                      <ul>
                        <li>
                          <a href="#" title="Add to Wishlist"><i className="fal fa-heart" /></a>
                        </li>
                        <li>
                          <a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#productModalId"><i className="fal fa-search" /></a>
                        </li>
                        <li>
                          <a href="#" title="Compare"><i className="far fa-sliders-h" /></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="product__content text-center">
                    <h6 className="product-name">
                      <a className="product-item-link" href="product-details.html"> High Quality Glass Ultra-Thin Kitchen Scale</a>
                    </h6>
                    <div className="rating">
                      <ul>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                      </ul>
                    </div>
                    <span className="price">$500.00</span>
                  </div>
                  <div className="product__add-btn">
                    <button type="button">Add to Cart</button>
                  </div>
                </div>
                <div className="product__item product__item-2 white-bg">
                  <div className="product__thumb p-relative">
                    <a href="product-details.html" className="w-img">
                      <img src="assets/img/shop/product/product-3.jpg" alt="product" />
                      <img className="second-img" src="assets/img/shop/product/product-4.jpg" alt="product" />
                    </a>
                    <div className="product__action p-absolute">
                      <ul>
                        <li>
                          <a href="#" title="Add to Wishlist"><i className="fal fa-heart" /></a>
                        </li>
                        <li>
                          <a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#productModalId"><i className="fal fa-search" /></a>
                        </li>
                        <li>
                          <a href="#" title="Compare"><i className="far fa-sliders-h" /></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="product__content text-center">
                    <h6 className="product-name">
                      <a className="product-item-link" href="product-details.html"> LG 27UD58: £347.21, Ebuyer.com </a>
                    </h6>
                    <div className="rating">
                      <ul>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                      </ul>
                    </div>
                    <span className="price">$560.00</span>
                  </div>
                  <div className="product__add-btn">
                    <button type="button">Add to Cart</button>
                  </div>
                </div>
                <div className="product__item product__item-2 white-bg">
                  <div className="product__thumb p-relative">
                    <a href="product-details.html" className="w-img">
                      <img src="assets/img/shop/product/product-5.jpg" alt="product" />
                      <img className="second-img" src="assets/img/shop/product/product-6.jpg" alt="product" />
                    </a>
                    <div className="product__action p-absolute">
                      <ul>
                        <li>
                          <a href="#" title="Add to Wishlist"><i className="fal fa-heart" /></a>
                        </li>
                        <li>
                          <a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#productModalId"><i className="fal fa-search" /></a>
                        </li>
                        <li>
                          <a href="#" title="Compare"><i className="far fa-sliders-h" /></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="product__content text-center">
                    <h6 className="product-name">
                      <a className="product-item-link" href="product-details.html"> Samsung C49J89: £875, Debenhams Plus </a>
                    </h6>
                    <div className="rating">
                      <ul>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                      </ul>
                    </div>
                    <span className="price">$450.00</span>
                  </div>
                  <div className="product__add-btn">
                    <button type="button">Add to Cart</button>
                  </div>
                </div>
                <div className="product__item product__item-2 white-bg">
                  <div className="product__thumb p-relative">
                    <a href="product-details.html" className="w-img">
                      <img src="assets/img/shop/product/product-7.jpg" alt="product" />
                      <img className="second-img" src="assets/img/shop/product/product-8.jpg" alt="product" />
                    </a>
                    <div className="product__action p-absolute">
                      <ul>
                        <li>
                          <a href="#" title="Add to Wishlist"><i className="fal fa-heart" /></a>
                        </li>
                        <li>
                          <a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#productModalId"><i className="fal fa-search" /></a>
                        </li>
                        <li>
                          <a href="#" title="Compare"><i className="far fa-sliders-h" /></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="product__content text-center">
                    <h6 className="product-name">
                      <a className="product-item-link" href="product-details.html"> Blink Home Security Camera System 01 </a>
                    </h6>
                    <div className="rating">
                      <ul>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                      </ul>
                    </div>
                    <span className="price">$720.00</span>
                  </div>
                  <div className="product__add-btn">
                    <button type="button">Add to Cart</button>
                  </div>
                </div>
                <div className="product__item product__item-2 white-bg">
                  <div className="product__thumb p-relative">
                    <a href="product-details.html" className="w-img">
                      <img src="assets/img/shop/product/product-9.jpg" alt="product" />
                      <img className="second-img" src="assets/img/shop/product/product-10.jpg" alt="product" />
                    </a>
                    <div className="product__action p-absolute">
                      <ul>
                        <li>
                          <a href="#" title="Add to Wishlist"><i className="fal fa-heart" /></a>
                        </li>
                        <li>
                          <a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#productModalId"><i className="fal fa-search" /></a>
                        </li>
                        <li>
                          <a href="#" title="Compare"><i className="far fa-sliders-h" /></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="product__content text-center">
                    <h6 className="product-name">
                      <a className="product-item-link" href="product-details.html"> Blue t-shir for men (X, M, XL, XXL) </a>
                    </h6>
                    <div className="rating">
                      <ul>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                      </ul>
                    </div>
                    <span className="price">$720.00</span>
                  </div>
                  <div className="product__add-btn">
                    <button type="button">Add to Cart</button>
                  </div>
                </div>
                <div className="product__item product__item-2 white-bg">
                  <div className="product__thumb p-relative">
                    <a href="product-details.html" className="w-img">
                      <img src="assets/img/shop/product/product-11.jpg" alt="product" />
                      <img className="second-img" src="assets/img/shop/product/product-12.jpg" alt="product" />
                    </a>
                    <div className="product__action p-absolute">
                      <ul>
                        <li>
                          <a href="#" title="Add to Wishlist"><i className="fal fa-heart" /></a>
                        </li>
                        <li>
                          <a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#productModalId"><i className="fal fa-search" /></a>
                        </li>
                        <li>
                          <a href="#" title="Compare"><i className="far fa-sliders-h" /></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="product__content text-center">
                    <h6 className="product-name">
                      <a className="product-item-link" href="product-details.html"> Samsung A20 Pro Ultra CPU 4/64 GB </a>
                    </h6>
                    <div className="rating">
                      <ul>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                      </ul>
                    </div>
                    <span className="price">$720.00</span>
                  </div>
                  <div className="product__add-btn">
                    <button type="button">Add to Cart</button>
                  </div>
                </div>
                <div className="product__item product__item-2 white-bg">
                  <div className="product__thumb p-relative">
                    <a href="product-details.html" className="w-img">
                      <img src="assets/img/shop/product/product-7.jpg" alt="product" />
                      <img className="second-img" src="assets/img/shop/product/product-8.jpg" alt="product" />
                    </a>
                    <div className="product__action p-absolute">
                      <ul>
                        <li>
                          <a href="#" title="Add to Wishlist"><i className="fal fa-heart" /></a>
                        </li>
                        <li>
                          <a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#productModalId"><i className="fal fa-search" /></a>
                        </li>
                        <li>
                          <a href="#" title="Compare"><i className="far fa-sliders-h" /></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="product__content text-center">
                    <h6 className="product-name">
                      <a className="product-item-link" href="product-details.html"> Blink Home Security Camera System 01 </a>
                    </h6>
                    <div className="rating">
                      <ul>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                      </ul>
                    </div>
                    <span className="price">$720.00</span>
                  </div>
                  <div className="product__add-btn">
                    <button type="button">Add to Cart</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="random" role="tabpanel" aria-labelledby="random-tab">
              <div className="product__slider owl-carousel">
                <div className="product__item product__item-2 white-bg">
                  <div className="product__thumb p-relative">
                    <a href="product-details.html" className="w-img">
                      <img src="assets/img/shop/product/product-1.jpg" alt="product" />
                      <img className="second-img" src="assets/img/shop/product/product-2.jpg" alt="product" />
                    </a>
                    <div className="product__action p-absolute">
                      <ul>
                        <li>
                          <a href="#" title="Add to Wishlist"><i className="fal fa-heart" /></a>
                        </li>
                        <li>
                          <a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#productModalId"><i className="fal fa-search" /></a>
                        </li>
                        <li>
                          <a href="#" title="Compare"><i className="far fa-sliders-h" /></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="product__content text-center">
                    <h6 className="product-name">
                      <a className="product-item-link" href="product-details.html"> High Quality Glass Ultra-Thin Kitchen Scale</a>
                    </h6>
                    <div className="rating">
                      <ul>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                      </ul>
                    </div>
                    <span className="price">$500.00</span>
                  </div>
                  <div className="product__add-btn">
                    <button type="button">Add to Cart</button>
                  </div>
                </div>
                <div className="product__item product__item-2 white-bg">
                  <div className="product__thumb p-relative">
                    <a href="product-details.html" className="w-img">
                      <img src="assets/img/shop/product/product-3.jpg" alt="product" />
                      <img className="second-img" src="assets/img/shop/product/product-4.jpg" alt="product" />
                    </a>
                    <div className="product__action p-absolute">
                      <ul>
                        <li>
                          <a href="#" title="Add to Wishlist"><i className="fal fa-heart" /></a>
                        </li>
                        <li>
                          <a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#productModalId"><i className="fal fa-search" /></a>
                        </li>
                        <li>
                          <a href="#" title="Compare"><i className="far fa-sliders-h" /></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="product__content text-center">
                    <h6 className="product-name">
                      <a className="product-item-link" href="product-details.html"> LG 27UD58: £347.21, Ebuyer.com </a>
                    </h6>
                    <div className="rating">
                      <ul>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                      </ul>
                    </div>
                    <span className="price">$560.00</span>
                  </div>
                  <div className="product__add-btn">
                    <button type="button">Add to Cart</button>
                  </div>
                </div>
                <div className="product__item product__item-2 white-bg">
                  <div className="product__thumb p-relative">
                    <a href="product-details.html" className="w-img">
                      <img src="assets/img/shop/product/product-5.jpg" alt="product" />
                      <img className="second-img" src="assets/img/shop/product/product-6.jpg" alt="product" />
                    </a>
                    <div className="product__action p-absolute">
                      <ul>
                        <li>
                          <a href="#" title="Add to Wishlist"><i className="fal fa-heart" /></a>
                        </li>
                        <li>
                          <a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#productModalId"><i className="fal fa-search" /></a>
                        </li>
                        <li>
                          <a href="#" title="Compare"><i className="far fa-sliders-h" /></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="product__content text-center">
                    <h6 className="product-name">
                      <a className="product-item-link" href="product-details.html"> Samsung C49J89: £875, Debenhams Plus </a>
                    </h6>
                    <div className="rating">
                      <ul>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                      </ul>
                    </div>
                    <span className="price">$450.00</span>
                  </div>
                  <div className="product__add-btn">
                    <button type="button">Add to Cart</button>
                  </div>
                </div>
                <div className="product__item product__item-2 white-bg">
                  <div className="product__thumb p-relative">
                    <a href="product-details.html" className="w-img">
                      <img src="assets/img/shop/product/product-7.jpg" alt="product" />
                      <img className="second-img" src="assets/img/shop/product/product-8.jpg" alt="product" />
                    </a>
                    <div className="product__action p-absolute">
                      <ul>
                        <li>
                          <a href="#" title="Add to Wishlist"><i className="fal fa-heart" /></a>
                        </li>
                        <li>
                          <a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#productModalId"><i className="fal fa-search" /></a>
                        </li>
                        <li>
                          <a href="#" title="Compare"><i className="far fa-sliders-h" /></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="product__content text-center">
                    <h6 className="product-name">
                      <a className="product-item-link" href="product-details.html"> Blink Home Security Camera System 01 </a>
                    </h6>
                    <div className="rating">
                      <ul>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                      </ul>
                    </div>
                    <span className="price">$720.00</span>
                  </div>
                  <div className="product__add-btn">
                    <button type="button">Add to Cart</button>
                  </div>
                </div>
                <div className="product__item product__item-2 white-bg">
                  <div className="product__thumb p-relative">
                    <a href="product-details.html" className="w-img">
                      <img src="assets/img/shop/product/product-9.jpg" alt="product" />
                      <img className="second-img" src="assets/img/shop/product/product-10.jpg" alt="product" />
                    </a>
                    <div className="product__action p-absolute">
                      <ul>
                        <li>
                          <a href="#" title="Add to Wishlist"><i className="fal fa-heart" /></a>
                        </li>
                        <li>
                          <a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#productModalId"><i className="fal fa-search" /></a>
                        </li>
                        <li>
                          <a href="#" title="Compare"><i className="far fa-sliders-h" /></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="product__content text-center">
                    <h6 className="product-name">
                      <a className="product-item-link" href="product-details.html"> Blue t-shir for men (X, M, XL, XXL) </a>
                    </h6>
                    <div className="rating">
                      <ul>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                      </ul>
                    </div>
                    <span className="price">$720.00</span>
                  </div>
                  <div className="product__add-btn">
                    <button type="button">Add to Cart</button>
                  </div>
                </div>
                <div className="product__item product__item-2 white-bg">
                  <div className="product__thumb p-relative">
                    <a href="product-details.html" className="w-img">
                      <img src="assets/img/shop/product/product-11.jpg" alt="product" />
                      <img className="second-img" src="assets/img/shop/product/product-12.jpg" alt="product" />
                    </a>
                    <div className="product__action p-absolute">
                      <ul>
                        <li>
                          <a href="#" title="Add to Wishlist"><i className="fal fa-heart" /></a>
                        </li>
                        <li>
                          <a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#productModalId"><i className="fal fa-search" /></a>
                        </li>
                        <li>
                          <a href="#" title="Compare"><i className="far fa-sliders-h" /></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="product__content text-center">
                    <h6 className="product-name">
                      <a className="product-item-link" href="product-details.html"> Samsung A20 Pro Ultra CPU 4/64 GB </a>
                    </h6>
                    <div className="rating">
                      <ul>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                      </ul>
                    </div>
                    <span className="price">$720.00</span>
                  </div>
                  <div className="product__add-btn">
                    <button type="button">Add to Cart</button>
                  </div>
                </div>
                <div className="product__item product__item-2 white-bg">
                  <div className="product__thumb p-relative">
                    <a href="product-details.html" className="w-img">
                      <img src="assets/img/shop/product/product-7.jpg" alt="product" />
                      <img className="second-img" src="assets/img/shop/product/product-8.jpg" alt="product" />
                    </a>
                    <div className="product__action p-absolute">
                      <ul>
                        <li>
                          <a href="#" title="Add to Wishlist"><i className="fal fa-heart" /></a>
                        </li>
                        <li>
                          <a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#productModalId"><i className="fal fa-search" /></a>
                        </li>
                        <li>
                          <a href="#" title="Compare"><i className="far fa-sliders-h" /></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="product__content text-center">
                    <h6 className="product-name">
                      <a className="product-item-link" href="product-details.html"> Blink Home Security Camera System 01 </a>
                    </h6>
                    <div className="rating">
                      <ul>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="far fa-star" /></a>
                        </li>
                      </ul>
                    </div>
                    <span className="price">$720.00</span>
                  </div>
                  <div className="product__add-btn">
                    <button type="button">Add to Cart</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* best selling area end */}
  {/* banner area start */}
  <section className="banner__area pt-20 pb-40">
    <div className="container">
      <div className="row">
        <div className="col-xl-6 col-lg-6">
          <div className="banner__item mb-30 w-img">
            <a href="product-details.html"><img src="assets/img/banner/banner-4.jpg" alt /></a>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6">
          <div className="banner__item mb-30 w-img">
            <a href="product-details.html"><img src="assets/img/banner/banner-5.jpg" alt /></a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* banner area end */}
  {/* deal off the day area start */}
  <section className="deal__area pb-40">
    <div className="container">
      <div className="row">
        <div className="col-xl-6">
          <div className="section__head d-md-flex justify-content-between mb-40">
            <div className="section__title">
              <h3>Deals<span>Of The Day</span></h3>
            </div>
          </div>
          <div className="product__deal owl-carousel">
            <div className="product__deal-item">
              <div className="product__item product__item-2 product__sale mb-30">
                <div className="row">
                  <div className="col-xl-6  col-lg-6 col-md-6 col-sm-6">
                    <div className="product__thumb product__thumb-big p-relative">
                      <a href="product-details.html" className="w-img">
                        <img src="assets/img/shop/product/product-15.jpg" alt="product" />
                        <img className="second-img" src="assets/img/shop/product/product-24.jpg" alt="product" />
                      </a>
                      <div className="product__offer">
                        <span className="discount">-34%</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <div className="product__content product__content-2">
                      <h6 className="product-name product__deal-name">
                        <a className="product-item-link" href="product-details.html"> Original Mobile Android Dual SIM Smart Phone G3 </a>
                      </h6>
                      <div className="rating rating-2">
                        <ul>
                          <li>
                            <a href="#"><i className="far fa-star" /></a>
                          </li>
                          <li>
                            <a href="#"><i className="far fa-star" /></a>
                          </li>
                          <li>
                            <a href="#"><i className="far fa-star" /></a>
                          </li>
                          <li>
                            <a href="#"><i className="far fa-star" /></a>
                          </li>
                          <li>
                            <a href="#"><i className="far fa-star" /></a>
                          </li>
                        </ul>
                      </div>
                      <span className="new mb-5">$120.00</span>
                      <span className="price-old mb-5"> <del>$125.00</del> </span>
                      <p className="mt-10">Typi non habent claritatem insitam, est usus legentis in iis qui facit...</p>
                      <div className="product__countdown">
                        <h4>Hurry Up! Offer ends in:</h4>
                        <div className="countdown-wrapper">
                          <div data-countdown data-date="Dec 02 2022 20:20:22">
                            <ul>
                              <li>
                                <span data-days>0</span> 
                                <p>Days</p>
                              </li>
                              <li>
                                <span data-hours>0</span> 
                                <p>Hours</p> 
                              </li>
                              <li>
                                <span data-minutes>0</span> 
                                <p>mins</p>
                              </li>
                              <li>
                                <span data-seconds>0</span> 
                                <p>secs</p>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="product__deal-item">
              <div className="product__item product__item-2 product__sale mb-30">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <div className="product__thumb product__thumb-big p-relative">
                      <a href="product-details.html" className="w-img">
                        <img src="assets/img/shop/product/product-15.jpg" alt="product" />
                        <img className="second-img" src="assets/img/shop/product/product-24.jpg" alt="product" />
                      </a>
                      <div className="product__offer">
                        <span className="discount">-34%</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <div className="product__content product__content-2">
                      <h6 className="product-name product__deal-name">
                        <a className="product-item-link" href="product-details.html"> Original Mobile Android Dual SIM Smart Phone G3 </a>
                      </h6>
                      <div className="rating rating-2">
                        <ul>
                          <li>
                            <a href="#"><i className="far fa-star" /></a>
                          </li>
                          <li>
                            <a href="#"><i className="far fa-star" /></a>
                          </li>
                          <li>
                            <a href="#"><i className="far fa-star" /></a>
                          </li>
                          <li>
                            <a href="#"><i className="far fa-star" /></a>
                          </li>
                          <li>
                            <a href="#"><i className="far fa-star" /></a>
                          </li>
                        </ul>
                      </div>
                      <span className="new mb-5">$120.00</span>
                      <span className="price-old mb-5"> <del>$125.00</del> </span>
                      <p className="mt-10">Typi non habent claritatem insitam, est usus legentis in iis qui facit...</p>
                      <div className="product__countdown">
                        <h4>Hurry Up! Offer ends in:</h4>
                        <div className="countdown-wrapper">
                          <div data-countdown data-date="Dec 02 2022 20:20:22">
                            <ul>
                              <li>
                                <span data-days>0</span> 
                                <p>Days</p>
                              </li>
                              <li>
                                <span data-hours>0</span> 
                                <p>Hours</p> 
                              </li>
                              <li>
                                <span data-minutes>0</span> 
                                <p>mins</p>
                              </li>
                              <li>
                                <span data-seconds>0</span> 
                                <p>secs</p>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-6">
          <div className="section__head d-md-flex justify-content-between mb-40">
            <div className="section__title">
              <h3>Electronic &amp; Digital<span>Products</span></h3>
            </div>
          </div>
          <div className="product__electronic owl-carousel">
            <div className="product__electronic-item">
              <div className="product__item product__item-2 white-bg">
                <div className="product__thumb p-relative">
                  <a href="product-details.html" className="w-img">
                    <img src="assets/img/shop/product/product-1.jpg" alt="product" />
                    <img className="second-img" src="assets/img/shop/product/product-2.jpg" alt="product" />
                  </a>
                  <div className="product__offer">
                    <span className="discount">-34%</span>
                  </div>
                  <div className="product__action p-absolute">
                    <ul>
                      <li>
                        <a href="#" title="Add to Wishlist"><i className="fal fa-heart" /></a>
                      </li>
                      <li>
                        <a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#productModalId"><i className="fal fa-search" /></a>
                      </li>
                      <li>
                        <a href="#" title="Compare"><i className="far fa-sliders-h" /></a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="product__content text-center">
                  <h6 className="product-name">
                    <a className="product-item-link" href="product-details.html"> High Quality Glass Ultra-Thin Kitchen Scale</a>
                  </h6>
                  <div className="rating">
                    <ul>
                      <li>
                        <a href="#"><i className="far fa-star" /></a>
                      </li>
                      <li>
                        <a href="#"><i className="far fa-star" /></a>
                      </li>
                      <li>
                        <a href="#"><i className="far fa-star" /></a>
                      </li>
                      <li>
                        <a href="#"><i className="far fa-star" /></a>
                      </li>
                      <li>
                        <a href="#"><i className="far fa-star" /></a>
                      </li>
                    </ul>
                  </div>
                  <span className="price">$500.00</span>
                </div>
                <div className="product__add-btn">
                  <button type="button">Add to Cart</button>
                </div>
              </div>
            </div>
            <div className="product__electronic-item">
              <div className="product__item product__item-2 white-bg">
                <div className="product__thumb p-relative">
                  <a href="product-details.html" className="w-img">
                    <img src="assets/img/shop/product/product-3.jpg" alt="product" />
                    <img className="second-img" src="assets/img/shop/product/product-4.jpg" alt="product" />
                  </a>
                  <div className="product__offer">
                    <span className="discount">-34%</span>
                  </div>
                  <div className="product__action p-absolute">
                    <ul>
                      <li>
                        <a href="#" title="Add to Wishlist"><i className="fal fa-heart" /></a>
                      </li>
                      <li>
                        <a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#productModalId"><i className="fal fa-search" /></a>
                      </li>
                      <li>
                        <a href="#" title="Compare"><i className="far fa-sliders-h" /></a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="product__content text-center">
                  <h6 className="product-name">
                    <a className="product-item-link" href="product-details.html"> LG 27UD58: £347.21, Ebuyer.com </a>
                  </h6>
                  <div className="rating">
                    <ul>
                      <li>
                        <a href="#"><i className="far fa-star" /></a>
                      </li>
                      <li>
                        <a href="#"><i className="far fa-star" /></a>
                      </li>
                      <li>
                        <a href="#"><i className="far fa-star" /></a>
                      </li>
                      <li>
                        <a href="#"><i className="far fa-star" /></a>
                      </li>
                      <li>
                        <a href="#"><i className="far fa-star" /></a>
                      </li>
                    </ul>
                  </div>
                  <span className="price">$560.00</span>
                </div>
                <div className="product__add-btn">
                  <button type="button">Add to Cart</button>
                </div>
              </div>
            </div>
            <div className="product__electronic-item">
              <div className="product__item product__item-2 white-bg">
                <div className="product__thumb p-relative">
                  <a href="product-details.html" className="w-img">
                    <img src="assets/img/shop/product/product-5.jpg" alt="product" />
                    <img className="second-img" src="assets/img/shop/product/product-6.jpg" alt="product" />
                  </a>
                  <div className="product__offer">
                    <span className="discount">-34%</span>
                  </div>
                  <div className="product__action p-absolute">
                    <ul>
                      <li>
                        <a href="#" title="Add to Wishlist"><i className="fal fa-heart" /></a>
                      </li>
                      <li>
                        <a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#productModalId"><i className="fal fa-search" /></a>
                      </li>
                      <li>
                        <a href="#" title="Compare"><i className="far fa-sliders-h" /></a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="product__content text-center">
                  <h6 className="product-name">
                    <a className="product-item-link" href="product-details.html"> Samsung C49J89: £875, Debenhams Plus </a>
                  </h6>
                  <div className="rating">
                    <ul>
                      <li>
                        <a href="#"><i className="far fa-star" /></a>
                      </li>
                      <li>
                        <a href="#"><i className="far fa-star" /></a>
                      </li>
                      <li>
                        <a href="#"><i className="far fa-star" /></a>
                      </li>
                      <li>
                        <a href="#"><i className="far fa-star" /></a>
                      </li>
                      <li>
                        <a href="#"><i className="far fa-star" /></a>
                      </li>
                    </ul>
                  </div>
                  <span className="price">$450.00</span>
                </div>
                <div className="product__add-btn">
                  <button type="button">Add to Cart</button>
                </div>
              </div>
            </div>
            <div className="product__electronic-item">
              <div className="product__item product__item-2 white-bg">
                <div className="product__thumb p-relative">
                  <a href="product-details.html" className="w-img">
                    <img src="assets/img/shop/product/product-7.jpg" alt="product" />
                    <img className="second-img" src="assets/img/shop/product/product-8.jpg" alt="product" />
                  </a>
                  <div className="product__offer">
                    <span className="discount">-34%</span>
                  </div>
                  <div className="product__action p-absolute">
                    <ul>
                      <li>
                        <a href="#" title="Add to Wishlist"><i className="fal fa-heart" /></a>
                      </li>
                      <li>
                        <a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#productModalId"><i className="fal fa-search" /></a>
                      </li>
                      <li>
                        <a href="#" title="Compare"><i className="far fa-sliders-h" /></a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="product__content text-center">
                  <h6 className="product-name">
                    <a className="product-item-link" href="product-details.html"> Blink Home Security Camera System 01 </a>
                  </h6>
                  <div className="rating">
                    <ul>
                      <li>
                        <a href="#"><i className="far fa-star" /></a>
                      </li>
                      <li>
                        <a href="#"><i className="far fa-star" /></a>
                      </li>
                      <li>
                        <a href="#"><i className="far fa-star" /></a>
                      </li>
                      <li>
                        <a href="#"><i className="far fa-star" /></a>
                      </li>
                      <li>
                        <a href="#"><i className="far fa-star" /></a>
                      </li>
                    </ul>
                  </div>
                  <span className="price">$720.00</span>
                </div>
                <div className="product__add-btn">
                  <button type="button">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* deal off the day area end */}
  {/* banner area start */}
  <section className="banner__area pb-40">
    <div className="container">
      <div className="row">
        <div className="col-xl-4 col-lg-4 col-md-6">
          <div className="banner__item mb-30 w-img">
            <a href="product-details.html"><img src="assets/img/banner/banner-6.jpg" alt /></a>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6">
          <div className="banner__item mb-30 w-img">
            <a href="product-details.html"><img src="assets/img/banner/banner-7.jpg" alt /></a>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6">
          <div className="banner__item mb-30 w-img">
            <a href="product-details.html"><img src="assets/img/banner/banner-8.jpg" alt /></a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* banner area end */}
  {/* onsale product area start */}
  <section className="onsell__area pt-15 pb-40">
    <div className="container">
      <div className="row">
        <div className="col-xl-12">
          <div className="section__head d-flex justify-content-between mb-40">
            <div className="section__title">
              <h3>On Sale<span>Products</span></h3>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-12">
          <div className="sale__slider owl-carousel">
            <div className="product__item-wrapper">
              <div className="product__item product__item-2 white-bg d-flex mb-20">
                <div className="product__thumb product__thumb-sale p-relative">
                  <a href="product-details.html" className="w-img">
                    <img src="assets/img/shop/product/product-12.jpg" alt="product" />
                    <img className="second-img" src="assets/img/shop/product/product-8.jpg" alt="product" />
                  </a>
                </div>
                <div className="product__content">
                  <h6 className="product-name">
                    <a className="product-item-link" href="product-details.html">Smart Mobile Phone 7/7plus/8/8plus/X/Xr W </a>
                  </h6>
                  <div className="rating">
                    <ul>
                      <li>
                        <a href="#"><i className="far fa-star" /></a>
                      </li>
                      <li>
                        <a href="#"><i className="far fa-star" /></a>
                      </li>
                      <li>
                        <a href="#"><i className="far fa-star" /></a>
                      </li>
                      <li>
                        <a href="#"><i className="far fa-star" /></a>
                      </li>
                      <li>
                        <a href="#"><i className="far fa-star" /></a>
                      </li>
                    </ul>
                  </div>
                  <span className="new new-2">$720.00</span>
                  <span className="price-old"> <del>$800.00</del> </span>
                </div>
              </div>
              <div className="product__item product__item-2 white-bg d-flex mb-20">
                <div className="product__thumb product__thumb-sale p-relative">
                  <a href="product-details.html" className="w-img">
                    <img src="assets/img/shop/product/product-14.jpg" alt="product" />
                    <img className="second-img" src="assets/img/shop/product/product-1.jpg" alt="product" />
                  </a>
                </div>
                <div className="product__content">
                  <h6 className="product-name">
                    <a className="product-item-link" href="product-details.html">Portable Watch Phone with Blood Pressure Monitor OLED</a>
                  </h6>
                  <div className="rating">
                    <ul>
                      <li>
                        <a href="#"><i className="far fa-star" /></a>
                      </li>
                      <li>
                        <a href="#"><i className="far fa-star" /></a>
                      </li>
                      <li>
                        <a href="#"><i className="far fa-star" /></a>
                      </li>
                      <li>
                        <a href="#"><i className="far fa-star" /></a>
                      </li>
                      <li>
                        <a href="#"><i className="far fa-star" /></a>
                      </li>
                    </ul>
                  </div>
                  <span className="new new-2">$90.00</span>
                  <span className="price-old"> <del>$100.00</del> </span>
                </div>
              </div>
            </div>
            <div className="product__item-wrapper">
              <div className="product__item product__item-2 white-bg d-flex mb-20">
                <div className="product__thumb product__thumb-sale p-relative">
                  <a href="product-details.html" className="w-img">
                    <img src="assets/img/shop/product/product-13.jpg" alt="product" />
                    <img className="second-img" src="assets/img/shop/product/product-7.jpg" alt="product" />
                  </a>
                </div>
                <div className="product__content">
                  <h6 className="product-name">
                    <a className="product-item-link" href="product-details.html">New Model Watch Mobile with Bpm Function 1.14" IPS LCD IP68</a>
                  </h6>
                  <div className="rating">
                    <ul>
                      <li>
                        <a href="#"><i className="far fa-star" /></a>
                      </li>
                      <li>
                        <a href="#"><i className="far fa-star" /></a>
                      </li>
                      <li>
                        <a href="#"><i className="far fa-star" /></a>
                      </li>
                      <li>
                        <a href="#"><i className="far fa-star" /></a>
                      </li>
                      <li>
                        <a href="#"><i className="far fa-star" /></a>
                      </li>
                    </ul>
                  </div>
                  <span className="new new-2">$150.00</span>
                  <span className="price-old"> <del>$200.00</del> </span>
                </div>
              </div>
              <div className="product__item product__item-2 white-bg d-flex mb-20">
                <div className="product__thumb product__thumb-sale p-relative">
                  <a href="product-details.html" className="w-img">
                    <img src="assets/img/shop/product/product-15.jpg" alt="product" />
                    <img className="second-img" src="assets/img/shop/product/product-24.jpg" alt="product" />
                  </a>
                </div>
                <div className="product__content">
                  <h6 className="product-name">
                    <a className="product-item-link" href="product-details.html">Original Mobile Android Dual SIM Smart Phone G3 </a>
                  </h6>
                  <div className="rating">
                    <ul>
                      <li>
                        <a href="#"><i className="far fa-star" /></a>
                      </li>
                      <li>
                        <a href="#"><i className="far fa-star" /></a>
                      </li>
                      <li>
                        <a href="#"><i className="far fa-star" /></a>
                      </li>
                      <li>
                        <a href="#"><i className="far fa-star" /></a>
                      </li>
                      <li>
                        <a href="#"><i className="far fa-star" /></a>
                      </li>
                    </ul>
                  </div>
                  <span className="new new-2">$90.00</span>
                  <span className="price-old"> <del>$100.00</del> </span>
                </div>
              </div>
            </div>
            <div className="product__item-wrapper">
              <div className="product__item product__item-2 white-bg d-flex mb-20">
                <div className="product__thumb product__thumb-sale p-relative">
                  <a href="product-details.html" className="w-img">
                    <img src="assets/img/shop/product/product-16.jpg" alt="product" />
                    <img className="second-img" src="assets/img/shop/product/product-18.jpg" alt="product" />
                  </a>
                </div>
                <div className="product__content">
                  <h6 className="product-name">
                    <a className="product-item-link" href="product-details.html">TF Camera Clock Support Bt 4.0 for Ios Android Round Watch </a>
                  </h6>
                  <div className="rating">
                    <ul>
                      <li>
                        <a href="#"><i className="far fa-star" /></a>
                      </li>
                      <li>
                        <a href="#"><i className="far fa-star" /></a>
                      </li>
                      <li>
                        <a href="#"><i className="far fa-star" /></a>
                      </li>
                      <li>
                        <a href="#"><i className="far fa-star" /></a>
                      </li>
                      <li>
                        <a href="#"><i className="far fa-star" /></a>
                      </li>
                    </ul>
                  </div>
                  <span className="new new-2">$40.00</span>
                  <span className="price-old"> <del>$100.00</del> </span>
                </div>
              </div>
              <div className="product__item product__item-2 white-bg d-flex mb-20">
                <div className="product__thumb product__thumb-sale p-relative">
                  <a href="product-details.html" className="w-img">
                    <img src="assets/img/shop/product/product-22.jpg" alt="product" />
                    <img className="second-img" src="assets/img/shop/product/product-1.jpg" alt="product" />
                  </a>
                </div>
                <div className="product__content">
                  <h6 className="product-name">
                    <a className="product-item-link" href="product-details.html"> 24 Inch LCD Monitor with Touch Screen for Computer Display </a>
                  </h6>
                  <div className="rating">
                    <ul>
                      <li>
                        <a href="#"><i className="far fa-star" /></a>
                      </li>
                      <li>
                        <a href="#"><i className="far fa-star" /></a>
                      </li>
                      <li>
                        <a href="#"><i className="far fa-star" /></a>
                      </li>
                      <li>
                        <a href="#"><i className="far fa-star" /></a>
                      </li>
                      <li>
                        <a href="#"><i className="far fa-star" /></a>
                      </li>
                    </ul>
                  </div>
                  <span className="new new-2">$90.00</span>
                  <span className="price-old"> <del>$100.00</del> </span>
                </div>
              </div>
            </div>
            <div className="product__item-wrapper">
              <div className="product__item product__item-2 white-bg d-flex mb-20">
                <div className="product__thumb product__thumb-sale p-relative">
                  <a href="product-details.html" className="w-img">
                    <img src="assets/img/shop/product/product-2.jpg" alt="product" />
                    <img className="second-img" src="assets/img/shop/product/product-4.jpg" alt="product" />
                  </a>
                </div>
                <div className="product__content">
                  <h6 className="product-name">
                    <a className="product-item-link" href="product-details.html">Capacitive Touch Screen 22 Inch Advertising LCD Display Monitor </a>
                  </h6>
                  <div className="rating">
                    <ul>
                      <li>
                        <a href="#"><i className="far fa-star" /></a>
                      </li>
                      <li>
                        <a href="#"><i className="far fa-star" /></a>
                      </li>
                      <li>
                        <a href="#"><i className="far fa-star" /></a>
                      </li>
                      <li>
                        <a href="#"><i className="far fa-star" /></a>
                      </li>
                      <li>
                        <a href="#"><i className="far fa-star" /></a>
                      </li>
                    </ul>
                  </div>
                  <span className="new new-2">$190.00</span>
                  <span className="price-old"> <del>$200.00</del> </span>
                </div>
              </div>
              <div className="product__item product__item-2 white-bg d-flex mb-20">
                <div className="product__thumb product__thumb-sale p-relative">
                  <a href="product-details.html" className="w-img">
                    <img src="assets/img/shop/product/product-20.jpg" alt="product" />
                    <img className="second-img" src="assets/img/shop/product/product-11.jpg" alt="product" />
                  </a>
                </div>
                <div className="product__content">
                  <h6 className="product-name">
                    <a className="product-item-link" href="product-details.html"> Original Smart Phone for Original for iPhone 6s </a>
                  </h6>
                  <div className="rating">
                    <ul>
                      <li>
                        <a href="#"><i className="far fa-star" /></a>
                      </li>
                      <li>
                        <a href="#"><i className="far fa-star" /></a>
                      </li>
                      <li>
                        <a href="#"><i className="far fa-star" /></a>
                      </li>
                      <li>
                        <a href="#"><i className="far fa-star" /></a>
                      </li>
                      <li>
                        <a href="#"><i className="far fa-star" /></a>
                      </li>
                    </ul>
                  </div>
                  <span className="new new-2">$250.00</span>
                  <span className="price-old"> <del>$300.00</del> </span>
                </div>
              </div>
            </div>
            <div className="product__item-wrapper">
              <div className="product__item product__item-2 white-bg d-flex mb-20">
                <div className="product__thumb product__thumb-sale p-relative">
                  <a href="product-details.html" className="w-img">
                    <img src="assets/img/shop/product/product-13.jpg" alt="product" />
                    <img className="second-img" src="assets/img/shop/product/product-7.jpg" alt="product" />
                  </a>
                </div>
                <div className="product__content">
                  <h6 className="product-name">
                    <a className="product-item-link" href="product-details.html">New Model Watch Mobile with Bpm Function 1.14" IPS LCD IP68</a>
                  </h6>
                  <div className="rating">
                    <ul>
                      <li>
                        <a href="#"><i className="far fa-star" /></a>
                      </li>
                      <li>
                        <a href="#"><i className="far fa-star" /></a>
                      </li>
                      <li>
                        <a href="#"><i className="far fa-star" /></a>
                      </li>
                      <li>
                        <a href="#"><i className="far fa-star" /></a>
                      </li>
                      <li>
                        <a href="#"><i className="far fa-star" /></a>
                      </li>
                    </ul>
                  </div>
                  <span className="new new-2">$150.00</span>
                  <span className="price-old"> <del>$200.00</del> </span>
                </div>
              </div>
              <div className="product__item product__item-2 white-bg d-flex mb-20">
                <div className="product__thumb product__thumb-sale p-relative">
                  <a href="product-details.html" className="w-img">
                    <img src="assets/img/shop/product/product-15.jpg" alt="product" />
                    <img className="second-img" src="assets/img/shop/product/product-24.jpg" alt="product" />
                  </a>
                </div>
                <div className="product__content">
                  <h6 className="product-name">
                    <a className="product-item-link" href="product-details.html">Original Mobile Android Dual SIM Smart Phone G3 </a>
                  </h6>
                  <div className="rating">
                    <ul>
                      <li>
                        <a href="#"><i className="far fa-star" /></a>
                      </li>
                      <li>
                        <a href="#"><i className="far fa-star" /></a>
                      </li>
                      <li>
                        <a href="#"><i className="far fa-star" /></a>
                      </li>
                      <li>
                        <a href="#"><i className="far fa-star" /></a>
                      </li>
                      <li>
                        <a href="#"><i className="far fa-star" /></a>
                      </li>
                    </ul>
                  </div>
                  <span className="new new-2">$90.00</span>
                  <span className="price-old"> <del>$100.00</del> </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* onsale product area end */}
  {/* blog area start */}
  <section className="blog__area pt-55 pb-40 grey-bg">
    <div className="container">
      <div className="row">
        <div className="col-xl-12">
          <div className="section__head d-flex justify-content-between mb-40">
            <div className="section__title">
              <h3>From The<span>Blog</span></h3>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-12">
          <div className="blog__slider owl-carousel">
            <div className="blog__item mb-30">
              <div className="blog__thumb fix">
                <a href="blog-details.html">
                  <img src="assets/img/blog/blog-1.jpg" alt />
                </a>
              </div>
              <div className="blog__content white-bg">
                <h3><a href="blog-details.html">Curabitur Lobortis News</a></h3>
                <div className="blog__meta">
                  <span>Post Date:</span>
                  <span className="date"> 01-Jul-2020</span>
                </div>
                <p>Suspendisse turpis ipsum, tempus in nulla eu, posuere pharetra nibh. In dignissim vitae lorem non mollis.</p>
              </div>
            </div>
            <div className="blog__item mb-30">
              <div className="blog__thumb fix">
                <a href="blog-details.html">
                  <img src="assets/img/blog/blog-2.jpg" alt />
                </a>
              </div>
              <div className="blog__content white-bg">
                <h3><a href="blog-details.html">The Brushed Steel</a></h3>
                <div className="blog__meta">
                  <span>Post Date:</span>
                  <span className="date"> 05-Aug-2020</span>
                </div>
                <p>Suspendisse turpis ipsum, tempus in nulla eu, posuere pharetra nibh. In dignissim vitae lorem non mollis.</p>
              </div>
            </div>
            <div className="blog__item mb-30">
              <div className="blog__thumb fix">
                <a href="blog-details.html">
                  <img src="assets/img/blog/blog-3.jpg" alt />
                </a>
              </div>
              <div className="blog__content white-bg">
                <h3><a href="blog-details.html">Koma and Torus</a></h3>
                <div className="blog__meta">
                  <span>Post Date:</span>
                  <span className="date"> 15-Aug-2020</span>
                </div>
                <p>Suspendisse turpis ipsum, tempus in nulla eu, posuere pharetra nibh. In dignissim vitae lorem non mollis.</p>
              </div>
            </div>
            <div className="blog__item mb-30">
              <div className="blog__thumb fix">
                <a href="blog-details.html">
                  <img src="assets/img/blog/blog-4.jpg" alt />
                </a>
              </div>
              <div className="blog__content white-bg">
                <h3><a href="blog-details.html">Grip and Allows</a></h3>
                <div className="blog__meta">
                  <span>Post Date:</span>
                  <span className="date"> 20-Aug-2020</span>
                </div>
                <p>Suspendisse turpis ipsum, tempus in nulla eu, posuere pharetra nibh. In dignissim vitae lorem non mollis.</p>
              </div>
            </div>
            <div className="blog__item mb-30">
              <div className="blog__thumb fix">
                <a href="blog-details.html">
                  <img src="assets/img/blog/blog-5.jpg" alt />
                </a>
              </div>
              <div className="blog__content white-bg">
                <h3><a href="blog-details.html">Pitterarum Formas</a></h3>
                <div className="blog__meta">
                  <span>Post Date:</span>
                  <span className="date"> 25-Aug-2020</span>
                </div>
                <p>Suspendisse turpis ipsum, tempus in nulla eu, posuere pharetra nibh. In dignissim vitae lorem non mollis.</p>
              </div>
            </div>
            <div className="blog__item mb-30">
              <div className="blog__thumb fix">
                <a href="blog-details.html">
                  <img src="assets/img/blog/blog-6.jpg" alt />
                </a>
              </div>
              <div className="blog__content white-bg">
                <h3><a href="blog-details.html">Shelving Burgundy</a></h3>
                <div className="blog__meta">
                  <span>Post Date:</span>
                  <span className="date"> 02-Sep-2020</span>
                </div>
                <p>Suspendisse turpis ipsum, tempus in nulla eu, posuere pharetra nibh. In dignissim vitae lorem non mollis.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* blog area end */}
  {/* subscribe area start */}
  <section className="subscribe__area pt-35 pb-30">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-xl-6 col-lg-6">
          <div className="subscribe__content d-sm-flex align-items-center">
            <div className="subscribe__icon mr-25">
              <img src="assets/img/icon/icon_email.png" alt />
            </div>
            <div className="subscribe__text">
              <h4>Sign up to Newsletter</h4>
              <p>Get email updates about our latest shop...and receive <span>$30 Coupon For First Shopping</span></p>
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6">
          <div className="subscribe__form f-right">
            <form action="#">
              <input type="email" placeholder="Enter your email here..." />
              <button className="t-y-btn t-y-btn-sub">subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* subscribe area end */}
  {/* back to top btn area start */}
  <section className="back-btn-top">
    <div className="container-fluid p-0">
      <div className="row gx-0">
        <div className="col-xl-12">
          <div id="scroll" className="back-to-top-btn back-to-top-btn-2 text-center">
            <a href="javascript:void(0);">back to top</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* back to top btn area end */}
  {/* shop modal start */}
  <div className="modal fade" id="productModalId" tabIndex={-1} role="dialog" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered product__modal" role="document">
      <div className="modal-content">
        <div className="product__modal-wrapper p-relative">
          <div className="product__modal-close p-absolute">
            <button data-bs-dismiss="modal"><i className="fal fa-times" /></button>
          </div>
          <div className="product__modal-inner">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="product__modal-box">
                  <div className="tab-content" id="modalTabContent">
                    <div className="tab-pane fade show active" id="nav1" role="tabpanel" aria-labelledby="nav1-tab">
                      <div className="product__modal-img w-img">
                        <img src="assets/img/shop/product/quick-view/quick-view-1.jpg" alt />
                      </div>
                    </div>
                    <div className="tab-pane fade" id="nav2" role="tabpanel" aria-labelledby="nav2-tab">
                      <div className="product__modal-img w-img">
                        <img src="assets/img/shop/product/quick-view/quick-view-2.jpg" alt />
                      </div>
                    </div>
                    <div className="tab-pane fade" id="nav3" role="tabpanel" aria-labelledby="nav3-tab">
                      <div className="product__modal-img w-img">
                        <img src="assets/img/shop/product/quick-view/quick-view-3.jpg" alt />
                      </div>
                    </div>
                    <div className="tab-pane fade" id="nav4" role="tabpanel" aria-labelledby="nav4-tab">
                      <div className="product__modal-img w-img">
                        <img src="assets/img/shop/product/quick-view/quick-view-4.jpg" alt />
                      </div>
                    </div>
                  </div>
                  <ul className="nav nav-tabs" id="modalTab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button className="nav-link active" id="nav1-tab" data-bs-toggle="tab" data-bs-target="#nav1" type="button" role="tab" aria-controls="nav1" aria-selected="true">
                        <img src="assets/img/shop/product/quick-view/nav/quick-nav-1.jpg" alt />
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link" id="nav2-tab" data-bs-toggle="tab" data-bs-target="#nav2" type="button" role="tab" aria-controls="nav2" aria-selected="false">
                        <img src="assets/img/shop/product/quick-view/nav/quick-nav-2.jpg" alt />
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link" id="nav3-tab" data-bs-toggle="tab" data-bs-target="#nav3" type="button" role="tab" aria-controls="nav3" aria-selected="false">
                        <img src="assets/img/shop/product/quick-view/nav/quick-nav-3.jpg" alt />
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link" id="nav4-tab" data-bs-toggle="tab" data-bs-target="#nav4" type="button" role="tab" aria-controls="nav4" aria-selected="false">
                        <img src="assets/img/shop/product/quick-view/nav/quick-nav-4.jpg" alt />
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="product__modal-content">
                  <h4><a href="product-details.html">Samsung C49J89: £875, Debenhams Plus</a></h4>
                  <div className="product__modal-des mb-40">
                    <p>Typi non habent claritatem insitam, est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt </p>
                  </div>
                  <div className="product__stock">
                    <span>Availability :</span>
                    <span>In Stock</span>
                  </div>
                  <div className="product__stock sku mb-30">
                    <span>SKU:</span>
                    <span>Samsung C49J89: £875, Debenhams Plus</span>
                  </div>
                  <div className="product__review d-sm-flex">
                    <div className="rating rating__shop mb-15 mr-35">
                      <ul>
                        <li><a href="#"><i className="fal fa-star" /></a></li>
                        <li><a href="#"><i className="fal fa-star" /></a></li>
                        <li><a href="#"><i className="fal fa-star" /></a></li>
                        <li><a href="#"><i className="fal fa-star" /></a></li>
                        <li><a href="#"><i className="fal fa-star" /></a></li>
                      </ul>
                    </div>
                    <div className="product__add-review mb-15">
                      <span><a href="#">1 Review</a></span>
                      <span><a href="#">Add Review</a></span>
                    </div>
                  </div>
                  <div className="product__price">
                    <span>$560.00</span>
                  </div>
                  <div className="product__modal-form mb-30">
                    <form action="#">
                      <div className="pro-quan-area d-lg-flex align-items-center">
                        <div className="product-quantity mr-20 mb-25">
                          <div className="cart-plus-minus p-relative"><input type="text" defaultValue={1} /></div>
                        </div>
                        <div className="pro-cart-btn mb-25">
                          <button className="t-y-btn" type="submit">Add to cart</button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="product__modal-links">
                    <ul>
                      <li><a href="#" title="Add to Wishlist"><i className="fal fa-heart" /></a></li>
                      <li><a href="#" title="Compare"><i className="far fa-sliders-h" /></a></li>
                      <li><a href="#" title="Print"><i className="fal fa-print" /></a></li>
                      <li><a href="#" title="Print"><i className="fal fa-share-alt" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* shop modal end */}
</main>

        </>
    )
}