import React, { useEffect, useState } from 'react';
import { useAppContext } from '../context/ContextUse';
import axios from 'axios';
import instance from '../axios';
import {useNavigate} from 'react-router-dom'


import SweetAlert from 'react-bootstrap-sweetalert';


export default function ViewCart(props){

  const navigate = useNavigate();
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

  
  function payment() {
    
   instance.post(`https://oja-ecommerce.herokuapp.com/api/v1/pay`, {amount: cartAmount}, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
    .then(response => {
      console.log(response.data.data.authorization_url)
      window.location.replace(response.data.data.authorization_url)
      
    })
    .catch(error => {
      console.log(error.response);
    })
    
  }


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
                <button className='checkout' onClick={()=>payment()} >CheckOut</button>
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
                            {/* <img src="assets/img/shop/product/product-8.jpg" alt="product" /> */}
                            {product.Images.length > 0 ? <img src={product.Images[0].url} alt="product" /> : null}
                          </a>
                        </div>
                        <div className="product__content text-center">
                          <h6 className="product-name">
                          {product.Name}
                          </h6>
                          <h6 className="product-name">
                          Quantity: {product.Quantity}
                          </h6>
                          <span className="new">Amount:{product.Price} NGN</span>

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
