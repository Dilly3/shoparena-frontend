import React from "react";
import { useEffect, useState } from "react";
import instance from "../axios";
import { useAppContext } from "../context/ContextUse";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./buyerOrders.css";
import "./cart-mini-1.jpg";

const initialState = {
  quantity: 1,
};
const alertInitialState = {
  visible: false,
  msg: "Successfully added to cart",
};

export default function Main() {
  const {
    category,
    lowerPrice,
    upperPrice,
    sort,
    addToCart,
    setCartId,
  } = useAppContext();

  const [input, setInput] = useState(initialState);

  const [products, setProducts] = useState([]);
  const [modalProduct, setModalProduct] = useState([]);
  const [alert, setAlert] = useState(alertInitialState);

  useEffect(() => {
    searchProduct();
  }, [category, lowerPrice, upperPrice, sort]);

  const token = localStorage.getItem("token");

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const formatAmount = (number) => {
    return number.toLocaleString()
  }

  let data;
  async function searchProduct() {
    try {
      let url = `/searchproducts?lower-price=${lowerPrice}&upper-price=${upperPrice}&name=${sort}`;
      if (category) {
        url = url + `&category=${category}`;
      }
      const response = await instance.get(url);
      console.log(response.data);

      setProducts(response.data);
    } catch (error) {
      if (error.response.status === 500) {
        return (data = <div> error.response.data </div>);
      }
    }
  }
  console.log(products);

  const addToCartFunc = async (product) => {
    const { ID, price, image, title, seller_id } = product;
    try {
      const response = await axios.post(
          "https://oja-ecommerce.herokuapp.com/api/v1/addtocart",
          {
            ID,
            price,
            image,
            title,
            seller_id,
            quantity: Number(input.quantity),
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
      );

      if (response.status === 200) {
        setAlert({ ...alert, visible: true });
        clearAlert();
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
  const handleModal = (product) => {
    setModalProduct([product]);
    console.log(modalProduct);
  };

  const clearAlert = () => {
    setTimeout(() => {
      setAlert({ ...alert, visible: false });
    }, 4000);
  };

  return (
      <div>
        {/* PRELOADER */}
        {!products.length ? (
            <div id="loading">
              <div id="loading-center">
                <div id="loading-center-absolute">
                  <div id="object"></div>
                </div>
              </div>
            </div>
        ) : (
            <main>
              {/* features area start */}

              <section
                  id="top"
                  className="features__area grey-bg-2 pt-40 pb-20 pl-10 pr-10"
              >
                {alert.visible && (
                    <div className="addtoCart-Alert"> {alert.msg}</div>
                )}
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
                          <p>Upto 30 Days</p>
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
                          <p>All Payment Method</p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="features__item d-flex white-bg">
                        <div className="features__icon mr-15">
                          <i className="fal fa-badge-dollar" />
                        </div>
                        <div className="features__content">
                          <h6>Member Discount</h6>
                          <p>Upto 40% Discount</p>
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
                            Top Flash<span> Deals</span>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-content" id="flast-sell-tabContent">
                    <div className="product-row">
                      {/* render the function starts here */}

                      {products.length > 0 ? (
                          products.slice(0, 5).map((product) => {
                            return (
                                <>
                                  <div
                                      className="product__item-wrapper mb-20"
                                      style={{ margin: "auto" }}
                                  >
                                    <div
                                        className="product__item white-bg"
                                        style={{ margin: "auto" }}
                                    >
                                      <div
                                          className="product__thumb p-relative"
                                          style={{ margin: "auto" }}
                                      >
                                        {/* <a
                                  href="product-details.html"
                                  className="w-img"
                                > */}
                                        {product.images.length > 0 ? (
                                            <img
                                                src={product.images[0].url}
                                                alt="product"
                                                className="homeimg"
                                            />
                                        ) : (
                                            <img
                                                src="assets/img/shop/product/product-24.jpg"
                                                alt="NO IMAGE"
                                                className="homeimg"
                                            />
                                        )}
                                        {/* </a> */}
                                        <div className="product__action p-absolute">
                                          <ul>
                                            <li onClick={() => handleModal(product)}>
                                              <a
                                                  href="#"
                                                  title="Quick View"
                                                  data-bs-toggle="modal"
                                                  data-bs-target="#productModalId"
                                              >
                                                <i className="fa fa-bars" />
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="product__content ">
                                        <div className="product-name">
                                          {product.title}
                                        </div>
                                        <span className="new">₦{formatAmount(product.price)}</span>
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
                    </div>
                  </div>
                </div>
              </section>
              {/* Flash sell area end */}

              {/* banner area start  */}
              <section class="banner__area pb-10 grey-bg-2">
                <div class="container">
                  <Link to="/allproducts">
                    <div class="row">
                      <div class="col-xl-4 col-lg-4 col-md-6">
                        <div class="banner__item mb-30 w-img">
                          <a href="product-details.html">
                            <img src="assets/img/coolGadget.jpeg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div class="col-xl-4 col-lg-4 col-md-6">
                        <div class="banner__item mb-30 w-img">
                          <a href="product-details.html">
                            <img src="assets/img/earpod.jpeg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div class="col-xl-4 col-lg-4 col-md-6">
                        <div class="banner__item mb-30 w-img">
                          <a href="product-details.html">
                            <img src="assets/img/coolstuff.jpeg" alt="" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </section>
              {/* banner area end  */}

              {/* Sport  Product*/}
              <section className="flash__sell pt-25 pb-40 grey-bg-2">
                <div className="container">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="section__head d-md-flex justify-content-between mb-40">
                        <div className="section__title">
                          <h3 id="sports">
                            Top Sport<span> Products</span>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-content" id="flast-sell-tabContent">
                    <div className="product-row">
                      {/* render the function starts here */}

                      {products.length > 0 ? (
                          products.map((product) => {
                            if (product.category_id == 8) {
                              return (
                                  <>
                                    <div
                                        className="product__item-wrapper mb-20"
                                        style={{ margin: "auto" }}
                                    >
                                      <div
                                          className="product__item white-bg"
                                          style={{ margin: "auto" }}
                                      >
                                        <div
                                            className="product__thumb p-relative"
                                            style={{ margin: "auto" }}
                                        >
                                          {/* <a
                                    href="product-details.html"
                                    className="w-img"
                                  > */}
                                          {product.images.length > 0 ? (
                                              <img
                                                  src={product.images[0].url}
                                                  alt="product"
                                                  className="homeimg"
                                              />
                                          ) : (
                                              <img
                                                  src="assets/img/shop/product/product-24.jpg"
                                                  alt="NO IMAGE"
                                                  className="homeimg"
                                              />
                                          )}
                                          {/* </a> */}
                                          <div className="product__action p-absolute">
                                            <ul>
                                              <li onClick={() => handleModal(product)}>
                                                <a
                                                    href="#"
                                                    title="Quick View"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#productModalId"
                                                >
                                                  <i className="fa fa-bars" />
                                                </a>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                        <div className="product__content">
                                          <div className="product-name">
                                            {product.title}
                                          </div>
                                          {/* <div className="rating">
                                <ul>
                                  <li><a href="#"><i className="far fa-star" /></a></li>
                                  <li><a href="#"><i className="far fa-star" /></a></li>
                                  <li><a href="#"><i className="far fa-star" /></a></li>
                                  <li><a href="#"><i className="far fa-star" /></a></li>
                                  <li><a href="#"><i className="far fa-star" /></a></li>
                                </ul>
                              </div> */}
                                          <span className="new">₦{formatAmount(product.price)}</span>
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
                            }
                          })
                      ) : (
                          <p> Loading...</p>
                      )}

                      {/* Render the function stops here */}
                    </div>
                  </div>
                </div>
              </section>
              {/* Sport Products stops */}

              {/* Electronic  Product*/}
              <section className="flash__sell pt-25 pb-40 grey-bg-2">
                <div className="container">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="section__head d-md-flex justify-content-between mb-40">
                        <div className="section__title">
                          <h3 id="electronics">
                            Top Electronic<span> Products</span>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-content" id="flast-sell-tabContent">
                    <div className="product-row">
                      {/* render the function starts here */}

                      {products.length > 0 ? (
                          products.map((product) => {
                            if (product.category_id == 2) {
                              return (
                                  <>
                                    <div
                                        className="product__item-wrapper mb-20"
                                        style={{ margin: "auto" }}
                                    >
                                      <div
                                          className="product__item white-bg"
                                          style={{ margin: "auto" }}
                                      >
                                        <div
                                            className="product__thumb p-relative"
                                            style={{ margin: "auto" }}
                                        >
                                          {/* <a
                                    href="product-details.html"
                                    className="w-img"
                                  > */}
                                          {product.images.length > 0 ? (
                                              <img
                                                  src={product.images[0].url}
                                                  alt="product"
                                                  className="homeimg"
                                              />
                                          ) : (
                                              <img
                                                  src="assets/img/shop/product/product-24.jpg"
                                                  alt="NO IMAGE"
                                                  className="homeimg"
                                              />
                                          )}
                                          {/* </a> */}
                                          <div className="product__action p-absolute">
                                            <ul>
                                              <li onClick={() => handleModal(product)}>
                                                <a
                                                    href="#"
                                                    title="Quick View"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#productModalId"
                                                >
                                                  <i className="fa fa-bars" />
                                                </a>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                        <div className="product__content">
                                          <div className="product-name">
                                            {product.title}
                                          </div>
                                          {/* <div className="rating">
                                <ul>
                                  <li><a href="#"><i className="far fa-star" /></a></li>
                                  <li><a href="#"><i className="far fa-star" /></a></li>
                                  <li><a href="#"><i className="far fa-star" /></a></li>
                                  <li><a href="#"><i className="far fa-star" /></a></li>
                                  <li><a href="#"><i className="far fa-star" /></a></li>
                                </ul>
                              </div> */}
                                          <span className="new">₦{formatAmount(product.price)}</span>
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
                            }
                          })
                      ) : (
                          <p> Loading...</p>
                      )}

                      {/* Render the function stops here */}
                    </div>
                  </div>
                </div>
              </section>
              {/* Electronic Products stops */}

              {/* Fashion  Product*/}
              <section className="flash__sell pt-25 pb-40 grey-bg-2">
                <div className="container">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="section__head d-md-flex justify-content-between mb-40">
                        <div className="section__title">
                          <h3 id="fashion">
                            Top Fashion<span> Products</span>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-content" id="flast-sell-tabContent">
                    <div className="product-row">
                      {/* render the function starts here */}

                      {products.length > 0 ? (
                          products.map((product) => {
                            if (product.category_id == 1) {
                              return (
                                  <>
                                    <div
                                        className="product__item-wrapper mb-20"
                                        style={{ margin: "auto" }}
                                    >
                                      <div
                                          className="product__item white-bg"
                                          style={{ margin: "auto" }}
                                      >
                                        <div
                                            className="product__thumb p-relative"
                                            style={{ margin: "auto" }}
                                        >
                                          {/* <a
                                    href="product-details.html"
                                    className="w-img"
                                  > */}
                                          {product.images.length > 0 ? (
                                              <img
                                                  src={product.images[0].url}
                                                  alt="product"
                                                  className="homeimg"
                                              />
                                          ) : (
                                              <img
                                                  src="assets/img/shop/product/product-24.jpg"
                                                  alt="NO IMAGE"
                                                  className="homeimg"
                                              />
                                          )}
                                          {/* </a> */}
                                          <div className="product__action p-absolute">
                                            <ul>
                                              <li onClick={() => handleModal(product)}>
                                                <a
                                                    href="#"
                                                    title="Quick View"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#productModalId"
                                                >
                                                  <i className="fa fa-bars" />
                                                </a>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                        <div className="product__content">
                                          <div className="product-name">
                                            {product.title}
                                          </div>
                                          {/* <div className="rating">
                                <ul>
                                  <li><a href="#"><i className="far fa-star" /></a></li>
                                  <li><a href="#"><i className="far fa-star" /></a></li>
                                  <li><a href="#"><i className="far fa-star" /></a></li>
                                  <li><a href="#"><i className="far fa-star" /></a></li>
                                  <li><a href="#"><i className="far fa-star" /></a></li>
                                </ul>
                              </div> */}
                                          <span className="new">₦{formatAmount(product.price)}</span>
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
                            }
                          })
                      ) : (
                          <p> Loading...</p>
                      )}

                      {/* Render the function stops here */}
                    </div>
                  </div>
                </div>
              </section>
              {/* Fashion stops */}

              {/* Baby Products*/}
              <section className="flash__sell pt-25 pb-40 grey-bg-2">
                <div className="container">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="section__head d-md-flex justify-content-between mb-40">
                        <div className="section__title">
                          <h3 id="baby">
                            Top Baby<span> Products</span>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tab-content" id="flast-sell-tabContent">
                    <div className="product-row">
                      {/* render the function starts here */}

                      {products.length > 0 ? (
                          products.map((product) => {
                            if (product.category_id === 4) {
                              return (
                                  <>
                                    <div
                                        className="product__item-wrapper mb-20"
                                        style={{ margin: "auto" }}
                                    >
                                      <div
                                          className="product__item white-bg"
                                          style={{ margin: "auto" }}
                                      >
                                        <div
                                            className="product__thumb p-relative"
                                            style={{ margin: "auto" }}
                                        >
                                          {/* <a
                                    href="product-details.html"
                                    className="w-img"
                                  > */}
                                          {product.images.length > 0 ? (
                                              <img
                                                  src={product.images[0].url}
                                                  alt="product"
                                                  className="homeimg"
                                              />
                                          ) : (
                                              <img
                                                  src="assets/img/shop/product/product-24.jpg"
                                                  alt="NO IMAGE"
                                                  className="homeimg"
                                              />
                                          )}
                                          {/* </a> */}
                                          <div className="product__action p-absolute">
                                            <ul>
                                              <li onClick={() => handleModal(product)}>
                                                <a
                                                    href="#"
                                                    title="Quick View"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#productModalId"
                                                >
                                                  <i className="fa fa-bars" />
                                                </a>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                        <div className="product__content">
                                          <div className="product-name">
                                            {product.title}
                                          </div>
                                          {/* <div className="rating">
                                <ul>
                                  <li><a href="#"><i className="far fa-star" /></a></li>
                                  <li><a href="#"><i className="far fa-star" /></a></li>
                                  <li><a href="#"><i className="far fa-star" /></a></li>
                                  <li><a href="#"><i className="far fa-star" /></a></li>
                                  <li><a href="#"><i className="far fa-star" /></a></li>
                                </ul>
                              </div> */}
                                          <span className="new">₦{formatAmount(product.price)}</span>
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
                            }
                          })
                      ) : (
                          <p> Loading...</p>
                      )}

                      {/* Render the function stops here */}
                    </div>
                  </div>
                </div>
              </section>
              {/* Baby Products stops */}

              {/* Food Product*/}
              <section className="flash__sell pt-25 pb-40 grey-bg-2">
                <div className="container">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="section__head d-md-flex justify-content-between mb-40">
                        <div className="section__title">
                          <h3 id="food">
                            Top Consumable<span> Products</span>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-content" id="flast-sell-tabContent">
                    <div className="product-row">
                      {/* render the function starts here */}

                      {products.length > 0 ? (
                          products.map((product) => {
                            if (product.category_id === 6) {
                              return (
                                  <>
                                    <div
                                        className="product__item-wrapper mb-20"
                                        style={{ margin: "auto" }}
                                    >
                                      <div
                                          className="product__item white-bg"
                                          style={{ margin: "auto" }}
                                      >
                                        <div
                                            className="product__thumb p-relative"
                                            style={{ margin: "auto" }}
                                        >
                                          {/* <a
                                    href="product-details.html"
                                    className="w-img"
                                  > */}
                                          {product.images.length > 0 ? (
                                              <img
                                                  src={product.images[0].url}
                                                  alt="product"
                                                  className="homeimg"
                                              />
                                          ) : (
                                              <img
                                                  src="assets/img/shop/product/product-24.jpg"
                                                  alt="NO IMAGE"
                                                  className="homeimg"
                                              />
                                          )}
                                          {/* </a> */}
                                          <div className="product__action p-absolute">
                                            <ul>
                                              <li onClick={() => handleModal(product)}>
                                                <a
                                                    href="#"
                                                    title="Quick View"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#productModalId"
                                                >
                                                  <i className="fa fa-bars" />
                                                </a>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                        <div className="product__content">
                                          <div className="product-name">
                                            {product.title}
                                          </div>
                                          {/* <div className="rating">
                                <ul>
                                  <li><a href="#"><i className="far fa-star" /></a></li>
                                  <li><a href="#"><i className="far fa-star" /></a></li>
                                  <li><a href="#"><i className="far fa-star" /></a></li>
                                  <li><a href="#"><i className="far fa-star" /></a></li>
                                  <li><a href="#"><i className="far fa-star" /></a></li>
                                </ul>
                              </div> */}
                                          <span className="new">₦{formatAmount(product.price)}</span>
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
                            }
                          })
                      ) : (
                          <p> Loading...</p>
                      )}

                      {/* Render the function stops here */}
                    </div>
                  </div>
                </div>
              </section>
              {/* Food Products stops */}

              {/* banner area start  */}
              <section class="banner__area pb-10 grey-bg-2">
                <div class="container">
                  <Link to="/allproducts">
                    <div class="row">
                      <div class="col-xl-4 col-lg-4 col-md-6">
                        <div class="banner__item mb-30 w-img">
                          <a href="product-details.html">
                            <img src="assets/img/wine.jpeg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div class="col-xl-4 col-lg-4 col-md-6">
                        <div class="banner__item mb-30 w-img">
                          <a href="product-details.html">
                            <img src="assets/img/ice cream.jpeg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div class="col-xl-4 col-lg-4 col-md-6">
                        <div class="banner__item mb-30 w-img">
                          <a href="product-details.html">
                            <img src="assets/img/snacks.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </section>
              {/* banner area end  */}

              {/* Computing Product*/}
              <section className="flash__sell pt-25 pb-40 grey-bg-2">
                <div className="container">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="section__head d-md-flex justify-content-between mb-40">
                        <div className="section__title">
                          <h3 id="computer">
                            Top Computing<span> Products</span>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-content" id="flast-sell-tabContent">
                    <div className="product-row">
                      {/* render the function starts here */}

                      {products.length > 0 ? (
                          products.map((product) => {
                            if (product.category_id === 7) {
                              return (
                                  <>
                                    <div
                                        className="product__item-wrapper mb-20"
                                        style={{ margin: "auto" }}
                                    >
                                      <div
                                          className="product__item white-bg"
                                          style={{ margin: "auto" }}
                                      >
                                        <div
                                            className="product__thumb p-relative"
                                            style={{ margin: "auto" }}
                                        >
                                          {/* <a
                                    href="product-details.html"
                                    className="w-img"
                                  > */}
                                          {product.images.length > 0 ? (
                                              <img
                                                  src={product.images[0].url}
                                                  alt="product"
                                                  className="homeimg"
                                              />
                                          ) : (
                                              <img
                                                  src="assets/img/shop/product/product-24.jpg"
                                                  alt="NO IMAGE"
                                                  className="homeimg"
                                              />
                                          )}
                                          {/* </a> */}
                                          <div className="product__action p-absolute">
                                            <ul>
                                              <li onClick={() => handleModal(product)}>
                                                <a
                                                    href="#"
                                                    title="Quick View"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#productModalId"
                                                >
                                                  <i className="fa fa-bars" />
                                                </a>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                        <div className="product__content">
                                          <div className="product-name">
                                            {product.title}
                                          </div>
                                          {/* <div className="rating">
                                <ul>
                                  <li><a href="#"><i className="far fa-star" /></a></li>
                                  <li><a href="#"><i className="far fa-star" /></a></li>
                                  <li><a href="#"><i className="far fa-star" /></a></li>
                                  <li><a href="#"><i className="far fa-star" /></a></li>
                                  <li><a href="#"><i className="far fa-star" /></a></li>
                                </ul>
                              </div> */}
                                          <span className="new">₦{formatAmount(product.price)}</span>
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
                            }
                          })
                      ) : (
                          <p> Loading...</p>
                      )}

                      {/* Render the function stops here */}
                    </div>
                  </div>
                </div>
              </section>
              {/* Computing Products stops */}

              {/* Health and Beauty Product*/}
              <section className="flash__sell pt-25 pb-40 grey-bg-2">
                <div className="container">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="section__head d-md-flex justify-content-between mb-40">
                        <div className="section__title">
                          <h3 id="health">
                            Top Health &Beauty<span> Products</span>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-content" id="flast-sell-tabContent">
                    <div className="product-row">
                      {/* render the function starts here */}

                      {products.length > 0 ? (
                          products.map((product) => {
                            if (product.category_id === 3) {
                              return (
                                  <>
                                    <div
                                        className="product__item-wrapper mb-20"
                                        style={{ margin: "auto" }}
                                    >
                                      <div
                                          className="product__item white-bg"
                                          style={{ margin: "auto" }}
                                      >
                                        <div
                                            className="product__thumb p-relative"
                                            style={{ margin: "auto" }}
                                        >
                                          {/* <a
                                    href="product-details.html"
                                    className="w-img"
                                  > */}
                                          {product.images.length > 0 ? (
                                              <img
                                                  src={product.images[0].url}
                                                  alt="product"
                                                  className="homeimg"
                                              />
                                          ) : (
                                              <img
                                                  src="assets/img/shop/product/product-24.jpg"
                                                  alt="NO IMAGE"
                                                  className="homeimg"
                                              />
                                          )}
                                          {/* </a> */}
                                          <div className="product__action p-absolute">
                                            <ul>
                                              <li onClick={() => handleModal(product)}>
                                                <a
                                                    href="#"
                                                    title="Quick View"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#productModalId"
                                                >
                                                  <i className="fa fa-bars" />
                                                </a>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                        <div className="product__content">
                                          <div className="product-name">
                                            {product.title}
                                          </div>
                                          {/* <div className="rating">
                                <ul>
                                  <li><a href="#"><i className="far fa-star" /></a></li>
                                  <li><a href="#"><i className="far fa-star" /></a></li>
                                  <li><a href="#"><i className="far fa-star" /></a></li>
                                  <li><a href="#"><i className="far fa-star" /></a></li>
                                  <li><a href="#"><i className="far fa-star" /></a></li>
                                </ul>
                              </div> */}
                                          <span className="new">₦{formatAmount(product.price)}</span>
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
                            }
                          })
                      ) : (
                          <p> Loading...</p>
                      )}

                      {/* Render the function stops here */}
                    </div>
                  </div>
                </div>
              </section>
              {/* Health and Beauty Products stops */}

              {/* Phone and Tablet Product*/}
              <section className="flash__sell pt-25 pb-40 grey-bg-2">
                <div className="container">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="section__head d-md-flex justify-content-between mb-40">
                        <div className="section__title">
                          <h3 id="phones">
                            Top Phone &Tablet<span> Products</span>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-content" id="flast-sell-tabContent">
                    <div className="product-row">
                      {/* render the function starts here */}

                      {products.length > 0 ? (
                          products.map((product) => {
                            if (product.category_id === 5) {
                              return (
                                  <>
                                    <div
                                        className="product__item-wrapper mb-20"
                                        style={{ margin: "auto" }}
                                    >
                                      <div
                                          className="product__item white-bg"
                                          style={{ margin: "auto" }}
                                      >
                                        <div
                                            className="product__thumb p-relative"
                                            style={{ margin: "auto" }}
                                        >
                                          {/* <a
                                    href="product-details.html"
                                    className="w-img"
                                  > */}
                                          {product.images.length > 0 ? (
                                              <img
                                                  src={product.images[0].url}
                                                  alt="product"
                                                  className="homeimg"
                                              />
                                          ) : (
                                              <img
                                                  src="assets/img/shop/product/product-24.jpg"
                                                  alt="NO IMAGE"
                                                  className="homeimg"
                                              />
                                          )}
                                          {/* </a> */}
                                          <div className="product__action p-absolute">
                                            <ul>
                                              <li onClick={() => handleModal(product)}>
                                                <a
                                                    href="#"
                                                    title="Quick View"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#productModalId"
                                                >
                                                  <i className="fa fa-bars" />
                                                </a>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                        <div className="product__content">
                                          <div className="product-name">
                                            {product.title}
                                          </div>
                                          {/* <div className="rating">
                                <ul>
                                  <li><a href="#"><i className="far fa-star" /></a></li>
                                  <li><a href="#"><i className="far fa-star" /></a></li>
                                  <li><a href="#"><i className="far fa-star" /></a></li>
                                  <li><a href="#"><i className="far fa-star" /></a></li>
                                  <li><a href="#"><i className="far fa-star" /></a></li>
                                </ul>
                              </div> */}
                                          <span className="new">₦{formatAmount(product.price)}</span>
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
                            }
                          })
                      ) : (
                          <p> Loading...</p>
                      )}

                      {/* Render the function stops here */}
                    </div>
                  </div>
                </div>
              </section>
              {/* Phone and Tablet Products stops */}

              {/* Others Product*/}
              <section className="flash__sell pt-25 pb-40 grey-bg-2">
                <div className="container">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="section__head d-md-flex justify-content-between mb-40">
                        <div className="section__title">
                          <h3 id="others">
                            Other<span> Products</span>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-content" id="flast-sell-tabContent">
                    <div className="product-row">
                      {/* render the function starts here */}

                      {products.length > 0 ? (
                          products.map((product) => {
                            if (product.category_id === 9) {
                              return (
                                  <>
                                    <div
                                        className="product__item-wrapper mb-20"
                                        style={{ margin: "auto" }}
                                    >
                                      <div
                                          className="product__item white-bg"
                                          style={{ margin: "auto" }}
                                      >
                                        <div
                                            className="product__thumb p-relative"
                                            style={{ margin: "auto" }}
                                        >
                                          {/* <a
                                    href="product-details.html"
                                    className="w-img"
                                  > */}
                                          {product.images.length > 0 ? (
                                              <img
                                                  src={product.images[0].url}
                                                  alt="product"
                                                  className="homeimg"
                                              />
                                          ) : (
                                              <img
                                                  src="assets/img/shop/product/product-24.jpg"
                                                  alt="NO IMAGE"
                                                  className="homeimg"
                                              />
                                          )}
                                          {/* </a> */}
                                          <div className="product__action p-absolute">
                                            <ul>
                                              <li onClick={() => handleModal(product)}>
                                                <a
                                                    href="#"
                                                    title="Quick View"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#productModalId"
                                                >
                                                  <i className="fa fa-bars" />
                                                </a>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                        <div className="product__content">
                                          <div className="product-name">
                                            {product.title}
                                          </div>
                                          {/* <div className="rating">
                                <ul>
                                  <li><a href="#"><i className="far fa-star" /></a></li>
                                  <li><a href="#"><i className="far fa-star" /></a></li>
                                  <li><a href="#"><i className="far fa-star" /></a></li>
                                  <li><a href="#"><i className="far fa-star" /></a></li>
                                  <li><a href="#"><i className="far fa-star" /></a></li>
                                </ul>
                              </div> */}
                                          <span className="new">₦{formatAmount(product.price)}</span>
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
                            }
                          })
                      ) : (
                          <p> Loading...</p>
                      )}

                      {/* Render the function stops here */}
                    </div>
                  </div>
                </div>
              </section>
              {/* Others stops */}

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
                                              {product.images.length > 1 ? (
                                                <img
                                                  src={product.images[1].url}
                                                  alt="product"
                                                />
                                              ) : (
                                                <img
                                                  src="assets/img/shop/product/quick-view/quick-view-4.jpg"
                                                  alt="NO IMAGE"
                                                  className="homeimg"
                                                />
                                              )}
                                            </div>
                                          </div>

                                          <div
                                            className="tab-pane fade"
                                            id="nav2"
                                            role="tabpanel"
                                            aria-labelledby="nav2-tab"
                                          >
                                            <div className="product__modal-img w-img">
                                              {product.images.length > 2 ? (
                                                <img
                                                  src={product.images[2].url}
                                                  alt="product"
                                                />
                                              ) : (
                                                <img
                                                  src="assets/img/shop/product/quick-view/quick-view-4.jpg"
                                                  alt="NO IMAGE"
                                                  className="homeimg"
                                                />
                                              )}
                                            </div>
                                          </div>

                                          <div
                                            className="tab-pane fade"
                                            id="nav3"
                                            role="tabpanel"
                                            aria-labelledby="nav3-tab"
                                          >
                                            <div className="product__modal-img w-img">
                                              {product.images.length > 3 ? (
                                                <img
                                                  src={product.images[3].url}
                                                  alt="product"
                                                />
                                              ) : (
                                                <img
                                                  src="assets/img/shop/product/quick-view/quick-view-4.jpg"
                                                  alt="NO IMAGE"
                                                  className="homeimg"
                                                />
                                              )}
                                            </div>
                                          </div>

                                          <div
                                            className="tab-pane fade"
                                            id="nav4"
                                            role="tabpanel"
                                            aria-labelledby="nav4-tab"
                                          >
                                            <div className="product__modal-img w-img">
                                              {product.images.length > 4 ? (
                                                <img
                                                  src={product.images[4].url}
                                                  alt="product"
                                                />
                                              ) : (
                                                <img
                                                  src="assets/img/shop/product/quick-view/quick-view-4.jpg"
                                                  alt="NO IMAGE"
                                                  className="homeimg"
                                                />
                                              )}
                                            </div>
                                          </div>
                                        </div>
                                        <ul
                                          className="nav nav-tabs modnav"
                                          id="modalTab"
                                          role="tablist"
                                        >
                                          {product.images.length > 1 && (
                                            <li
                                              className="nav-item"
                                              role="presentation"
                                            >
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
                                                {product.images.length > 1 ? (
                                                  <img
                                                    src={product.images[1].url}
                                                    alt="product"
                                                  />
                                                ) : null}
                                              </button>
                                            </li>
                                          )}
                                          {product.images.length > 2 && (
                                            <li
                                              className="nav-item"
                                              role="presentation"
                                            >
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
                                                {product.images.length > 2 ? (
                                                  <img
                                                    src={product.images[2].url}
                                                    alt="product"
                                                  />
                                                ) : null}
                                              </button>
                                            </li>
                                          )}
                                          {product.images.length > 3 && (
                                            <li
                                              className="nav-item"
                                              role="presentation"
                                            >
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
                                                {product.images.length > 3 ? (
                                                  <img
                                                    src={product.images[3].url}
                                                    alt="product"
                                                  />
                                                ) : null}
                                              </button>
                                            </li>
                                          )}
                                          {product.images.length > 4 && (
                                            <li
                                              className="nav-item"
                                              role="presentation"
                                            >
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
                                                {product.images.length > 4 ? (
                                                  <img
                                                    src={product.images[4].url}
                                                    alt="product"
                                                  />
                                                ) : null}
                                              </button>
                                            </li>
                                          )}
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
                                          <span>
                                            {product.quantity} In Stock
                                          </span>
                                        </div>
                                        <div className="product__price">
                                          <span>
                                            ₦{formatAmount(product.price)}
                                          </span>
                                        </div>
                                        <button
                                          type="button"
                                          className="btn btn-warning"
                                          onclick={() => setCartId(product.ID)}
                                        >
                                          <a
                                            href={`/chat/${product.ID}`}
                                            className="gray-btn"
                                          >
                                            {" "}
                                            Chat with Seller
                                          </a>
                                          {/* <Link to={} >
                                             
                                            </Link> */}
                                        </button>
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
        )}
      </div>
  );
}