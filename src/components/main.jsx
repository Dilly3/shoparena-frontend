import React from "react";
import { useEffect, useState } from "react";
import instance from "../axios";
import { useAppContext } from "../context/ContextUse";
import axios from "axios";

import { Link } from "react-router-dom";
import ProductId from "./ProductId";

const initialState = {
<<<<<<< HEAD
  quantity: 1
}
const alertInitialState = {
  visible:false,
  msg:"Successfully added to cart"
}
=======
  quantity: 1,
};
>>>>>>> 9bfdf4714e3969fc2063d3eeff97679103aa83a8

export default function Main() {
  const { category, lowerPrice, upperPrice, sort, addToCart } = useAppContext();

<<<<<<< HEAD

const [input, setInput ] = useState(initialState)

    const [products, setProducts] = useState([])
    const [modalProduct, setModalProduct] = useState([{}])
    const [alert, setAlert] = useState(alertInitialState)
=======
  const [input, setInput] = useState(initialState);

  const [products, setProducts] = useState([]);
  const [modalProduct, setModalProduct] = useState([{}]);
>>>>>>> 9bfdf4714e3969fc2063d3eeff97679103aa83a8

  useEffect(() => {
    searchProduct();
  }, [category, lowerPrice, upperPrice, sort]);

  const token = localStorage.getItem("token");

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  let data;
  async function searchProduct() {
    try {
      let url = `/searchproducts?lower-price=${lowerPrice}&upper-price=${upperPrice}&name=${sort}`;
      if (category) {
        url = url + `&category=${category}`;
      }
      const response = await instance.get(url);
      // console.log(response.data)
      setProducts(response.data);
    } catch (error) {
      console.log(error.response.data);
      if (error.response.status === 500) {
        return (data = <div> error.response.data </div>);
      }
    }
  }

  const addToCartFunc = async (product) => {
    const { ID, price, image, title } = product;
    try {
      const response = await axios.post(
        "https://oja-ecommerce.herokuapp.com/api/v1/addtocart",
        { ID, price, image, title, quantity: Number(input.quantity) },
        {
          headers: {
<<<<<<< HEAD
            'Authorization': `Bearer ${token}` 
          }})

        
        if(response.status === 200){
          setAlert({...alert, visible:true})
          clearAlert()
          const obj = {
            quantity: Number(input.quantity),
            price
          }
          addToCart()
          setInput({quantity:1})
=======
            Authorization: `Bearer ${token}`,
          },
>>>>>>> 9bfdf4714e3969fc2063d3eeff97679103aa83a8
        }
      );

      if (response.status === 200) {
        const obj = {
          quantity: Number(input.quantity),
          price,
        };
        addToCart();
        setInput({ quantity: 1 });
      }
    } catch (error) {
      console.log(error);
    }
  };

<<<<<<< HEAD
const clearAlert = ()=>{
  setTimeout(()=>{
    setAlert({...alert, visible: false})
  }, 400)
}

    return(
         <div>
  <main>
    
    {/* features area start */}
    
    <section id= "top" className="features__area grey-bg-2 pt-40 pb-20 pl-10 pr-10">
    {alert.visible &&  <div className='addtoCart-Alert'> {alert.msg}</div>}
      <div className="container">
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
=======
  const handleModal = (product) => {
    // setModalProduct([product])
    console.log("product", product);
    // Link.render = () => <ProductId id="" Title="samuel" Category="" />;
  };

  return (
    <div>
      <main>
        {/* features area start */}
        <section
          id="top"
          className="features__area grey-bg-2 pt-40 pb-20 pl-10 pr-10"
        >
          <div className="container">
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
>>>>>>> 9bfdf4714e3969fc2063d3eeff97679103aa83a8
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
        </section>
        {/* features area end */}

        {/* Flash sell area start */}
        <section className="flash__sell pt-25 pb-40 grey-bg-2">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="section__head d-md-flex justify-content-between mb-40">
                  <div className="section__title">
                    <h3>
                      Top Flash<span>Deals</span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
<<<<<<< HEAD
          </div>
        </div>        
        <div className="row">
          <div className="col-xl-12">
            <div className="tab-content" id="flast-sell-tabContent">
              <div className="tab-pane fade show active" id="computer" role="tabpanel" aria-labelledby="computer-tab">
                <div className="row">
                  <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-6 col-sm-6 products__container">

{/* render the function starts here */}

                  {
                  (products.length > 0 ) ? products.map(
                  product => {
                  return(
                  <> 

                    <div className="product__item-wrapper mb-20">
                      <div className="product__item white-bg">
                        <div className="product__thumb p-relative">
                          <a href="product-details.html" className="w-img">
                            <img src="assets/img/shop/product/product-8.jpg" alt="product" />
                            <img className="second-img" src={product.Images} alt="product" />
                          </a>
                          <div className="product__action p-absolute">
                            <ul>
                              <li   onClick = {()=>handleModal(product)}><a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#productModalId"><i className="fal fa-search" /></a></li>
                            </ul>
                          </div>
                        </div>
                        <div className="product__content text-center">
                          <h6 className="product-name">
                            {product.title}
                          </h6>
                          {/* <div className="rating">
=======
            <div className="row">
              <div className="col-xl-12">
                <div className="tab-content" id="flast-sell-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="computer"
                    role="tabpanel"
                    aria-labelledby="computer-tab"
                  >
                    <div className="row">
                      <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-6 col-sm-6 products__container">
                        {/* render the function starts here */}
                        {products.length > 0 ? (
                          products.map((product) => {
                            return (
                              <>
                                <div className="product__item-wrapper mb-20">
                                  <div className="product__item white-bg">
                                    <div className="product__thumb p-relative">
                                      <a
                                        href="product-details.html"
                                        className="w-img"
                                      >
                                        <img
                                          src="assets/img/shop/product/product-8.jpg"
                                          alt="product"
                                        />
                                        <img
                                          className="second-img"
                                          src={product.Images}
                                          alt="product"
                                        />
                                      </a>
                                      <div className="product__action p-absolute">
                                        <ul>
                                          <li
                                          // onClick={() => handleModal(product)}
                                          >
                                            <a
                                              href="#"
                                              title="Quick View"
                                              data-bs-toggle="modal"
                                              data-bs-target="#productModalId"
                                            >
                                              <i className="fal fa-search" />
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <div className="product__content text-center">
                                      <Link
                                        to={{
                                          pathname: `/productID/${product.ID}`,
                                        }}
                                      >
                                        <h6 className="product-name">
                                          {product.title}
                                        </h6>
                                      </Link>
                                      {/* <div className="rating">
>>>>>>> 9bfdf4714e3969fc2063d3eeff97679103aa83a8
                            <ul>
                              <li><a href="#"><i className="far fa-star" /></a></li>
                              <li><a href="#"><i className="far fa-star" /></a></li>
                              <li><a href="#"><i className="far fa-star" /></a></li>
                              <li><a href="#"><i className="far fa-star" /></a></li>
                              <li><a href="#"><i className="far fa-star" /></a></li>
                            </ul>
                          </div> */}
<<<<<<< HEAD
                          <span className="new">${product.price}</span>
                        </div>
                        {token && <div className="product__add-btn">
                          <button type="button" onClick = {()=>addToCartFunc(product)}>Add to Cart</button>
                        </div>}
                     
=======
                                      <span className="new">
                                        ${product.price}
                                      </span>
                                    </div>
                                    {token && (
                                      <div className="product__add-btn">
                                        <button
                                          type="button"
                                          onClick={() => addToCartFunc(product)}
                                        >
                                          Add to Cart
                                        </button>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </>
                            );
                          })
                        ) : (
                          <p> Loading...</p>
                        )}
                        {/* Render the function stops here */}
>>>>>>> 9bfdf4714e3969fc2063d3eeff97679103aa83a8
                      </div>

                     
                    </div>
<<<<<<< HEAD
                    
                    
                  </>
                  )
                  }
                  ): <p> Loading...</p>
                  }
          
 {/* Render the function stops here */}

                  </div> 
=======
                  </div>
>>>>>>> 9bfdf4714e3969fc2063d3eeff97679103aa83a8
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Flash sell area end */}

        {/* back to top btn area start */}
        <section className="back-btn-top">
          <div className="container-fluid p-0">
            <div className="row gx-0">
              <div className="col-xl-12">
                <div id="scroll" className="back-to-top-btn text-center">
                  <a href="#">back to top</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* back to top btn area end */}

        {/* shop modal start */}

        {products.length > 0 ? (
          modalProduct.map((product) => {
            return (
              <>
                <div
                  className="modal fade"
                  id="productModalId"
                  tabIndex={-1}
                  role="dialog"
                  aria-hidden="true"
                >
                  <div
                    className="modal-dialog modal-dialog-centered product__modal"
                    role="document"
                  >
                    <div className="modal-content">
                      <div className="product__modal-wrapper p-relative">
                        <div className="product__modal-close p-absolute">
                          <button data-bs-dismiss="modal">
                            <i className="fal fa-times" />
                          </button>
                        </div>
                        <div className="product__modal-inner">
                          <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                              <div className="product__modal-box">
                                <div
                                  className="tab-content"
                                  id="modalTabContent"
                                >
                                  <div
                                    className="tab-pane fade show active"
                                    id="nav1"
                                    role="tabpanel"
                                    aria-labelledby="nav1-tab"
                                  >
                                    <div className="product__modal-img w-img">
                                      <img
                                        src="assets/img/shop/product/quick-view/quick-view-1.jpg"
                                        alt
                                      />
                                    </div>
                                  </div>
                                  <div
                                    className="tab-pane fade"
                                    id="nav2"
                                    role="tabpanel"
                                    aria-labelledby="nav2-tab"
                                  >
                                    <div className="product__modal-img w-img">
                                      <img
                                        src="assets/img/shop/product/quick-view/quick-view-2.jpg"
                                        alt
                                      />
                                    </div>
                                  </div>
                                  <div
                                    className="tab-pane fade"
                                    id="nav3"
                                    role="tabpanel"
                                    aria-labelledby="nav3-tab"
                                  >
                                    <div className="product__modal-img w-img">
                                      <img
                                        src="assets/img/shop/product/quick-view/quick-view-3.jpg"
                                        alt
                                      />
                                    </div>
                                  </div>
                                  <div
                                    className="tab-pane fade"
                                    id="nav4"
                                    role="tabpanel"
                                    aria-labelledby="nav4-tab"
                                  >
                                    <div className="product__modal-img w-img">
                                      <img
                                        src="assets/img/shop/product/quick-view/quick-view-4.jpg"
                                        alt
                                      />
                                    </div>
                                  </div>
                                </div>
                                <ul
                                  className="nav nav-tabs"
                                  id="modalTab"
                                  role="tablist"
                                >
                                  <li className="nav-item" role="presentation">
                                    <button
                                      className="nav-link active"
                                      id="nav1-tab"
                                      data-bs-toggle="tab"
                                      data-bs-target="#nav1"
                                      type="button"
                                      role="tab"
                                      aria-controls="nav1"
                                      aria-selected="true"
                                    >
                                      <img
                                        src="assets/img/shop/product/quick-view/nav/quick-nav-1.jpg"
                                        alt
                                      />
                                    </button>
                                  </li>
                                  <li className="nav-item" role="presentation">
                                    <button
                                      className="nav-link"
                                      id="nav2-tab"
                                      data-bs-toggle="tab"
                                      data-bs-target="#nav2"
                                      type="button"
                                      role="tab"
                                      aria-controls="nav2"
                                      aria-selected="false"
                                    >
                                      <img
                                        src="assets/img/shop/product/quick-view/nav/quick-nav-2.jpg"
                                        alt
                                      />
                                    </button>
                                  </li>
                                  <li className="nav-item" role="presentation">
                                    <button
                                      className="nav-link"
                                      id="nav3-tab"
                                      data-bs-toggle="tab"
                                      data-bs-target="#nav3"
                                      type="button"
                                      role="tab"
                                      aria-controls="nav3"
                                      aria-selected="false"
                                    >
                                      <img
                                        src="assets/img/shop/product/quick-view/nav/quick-nav-3.jpg"
                                        alt
                                      />
                                    </button>
                                  </li>
                                  <li className="nav-item" role="presentation">
                                    <button
                                      className="nav-link"
                                      id="nav4-tab"
                                      data-bs-toggle="tab"
                                      data-bs-target="#nav4"
                                      type="button"
                                      role="tab"
                                      aria-controls="nav4"
                                      aria-selected="false"
                                    >
                                      <img
                                        src="assets/img/shop/product/quick-view/nav/quick-nav-4.jpg"
                                        alt
                                      />
                                    </button>
                                  </li>
                                </ul>
                              </div>
                            </div>

                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                              <div className="product__modal-content">
                                <h4>{product.title}</h4>
                                <div className="product__modal-des mb-40">
                                  <p>
                                    <b>Product Details:</b>{" "}
                                    {product.description}{" "}
                                  </p>
                                </div>
                                <div className="product__stock">
                                  <span>Availability :</span>
                                  <span>{product.quantity} In Stock</span>
                                </div>
                                <div className="product__price">
                                  <span>${product.price}</span>
                                </div>
                                <div className="product__modal-form mb-30"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })
        ) : (
          <p> Loading</p>
        )}
      </main>
    </div>
  );
}
