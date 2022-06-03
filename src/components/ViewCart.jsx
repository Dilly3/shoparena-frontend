import React, { useEffect } from 'react';
import {Link} from "react-router-dom"
import { useAppContext } from '../context/ContextUse';
import axios from 'axios';

import SweetAlert from 'react-bootstrap-sweetalert';


export default function ViewCart(props){
  const { handleSearch, cart, cartAmount, filterCart, setCart, quantity, setDeletedITem,deletedItem} = useAppContext()

  console.log("props: ", cartAmount);
  const [sweetalert, setSweetalert] = React.useState(false);
  const [productID, setProductID] = React.useState(null);
  const [event, setEvent] = React.useState(null);

  useEffect(()=>{
    // console.log("setCart ........", cartData())
  },[])
  // console.log("setCart ........", cartData())
  
  const token = localStorage.getItem("token")

  function configDelete(event, id) {
    setProductID(id);
    setEvent(event);

    setSweetalert(true);
  }
  
  function deleteProduct() {
    
    let elem = event.target;
    let initText = elem.innerHTML
    elem.innerHTML = "deleting...";
    elem.disabled = true
    axios.delete(`https://oja-ecommerce.herokuapp.com/api/v1/deletefromcart/${productID}`, {
      headers: {
        Authorization: `Bearer ${token}` 
      }
    })
    .then(response => {
      elem.innerHTML = initText;
      elem.disabled = false
      if (response.status === 200) {
        setDeletedITem(!deletedItem)

    
        setSweetalert(false);
        
       
      }
    })
    .catch(error => {
      console.log(error);
    })
    

  }

  console.log(productID)
  // React.useEffect(()=>{
  //   deleteProduct()
  // }, [])



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

                          <button className='btn btn-primary' onClick={(event) => configDelete(event, product.CartProductID)}>Delete</button>
                        </div>
                      
                      </div>
                    </div>

                    </>
                  )
                  }
                  ): <p>No Product In Cart</p>
                  }
 {/* Render the function stops here */}

                          <SweetAlert
                              custom
                              showCancel
                              confirmBtnText="Yes"
                              cancelBtnText="No"
                              confirmBtnBsStyle="primary"
                              cancelBtnBsStyle="light"
                              title="Are you sure?"
                              onConfirm={()=>deleteProduct()}
                              onCancel={()=>setSweetalert(false)}
                              show={sweetalert}
                              >
                          </SweetAlert>

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
