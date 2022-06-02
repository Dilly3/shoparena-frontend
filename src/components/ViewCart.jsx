import React from 'react';
import {Link} from "react-router-dom"
import { useAppContext } from '../context/ContextUse';


export default function ViewCart(){
  const {quantity} = useAppContext()
  console.log(quantity)

    return(
         <div>
  <main>
    
    {/* Flash sell area start */}
    <section className="flash__sell pt-25 pb-40 grey-bg-2">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="tab-content" id="flast-sell-tabContent">
              <div className="tab-pane fade show active" id="computer" role="tabpanel" aria-labelledby="computer-tab">
                <div className="row">
                <nav aria-label="breadcrumb">
                                    <ol class="breadcrumb">
                                      <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                                    </ol>
                                  </nav>
                  <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-6 col-sm-6 products__container">

{/* render the function starts here */}
{
                  (quantity.length > 0 ) ? quantity.map(
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
                        </div>
                        <div className="product__content text-center">
                          <h6 className="product-name">
                          {product.Name}
                          </h6>
                          <h6 className="product-name">
                          Quantity: {product.Quantity}
                          </h6>
                          <span className="new">Amount: ${product.Price}</span>
                        </div>
                      
                      </div>
                    </div>

                    </>
                  )
                  }
                  ): <p>No Product In Cart</p>
                  }
 {/* Render the function stops here */}

                  </div> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Flash sell area end */}

  </main>
  </div>
  )
  }
