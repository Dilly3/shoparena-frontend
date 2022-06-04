import React from 'react';
import {useEffect, useState} from "react"
import instance from '../axios'
import {useAppContext} from "../context/ContextUse"
import axios from '../axios'; 
import SellerProductCard from './SellerProductCard';

{/*SEARCH CONSUME START */}
const initialState = {
  quantity: 1
}

export default function SellerShopContent(){
  const { category,
  lowerPrice,
  upperPrice,
  sort, addToCart} = useAppContext()

const [input, setInput ] = useState(initialState)
const [products, setProducts] = useState([])
const [modalProduct, setModalProduct] = useState([{}])
const [sellerShop, setSellerShop] = useState([])

    useEffect(()=>{
      searchProduct()
    }, [category,
      lowerPrice,
      upperPrice,
      sort])

const token = localStorage.getItem("token")

const handleChange = (e)=>{
  // e.preventDefault()
  // const number = parseInt(e.target.value)
  setInput({...input, [e.target.name]:e.target.value})
}

let data
    async function searchProduct(){
      try {
        let url = `/searchproducts?lower-price=${lowerPrice}&upper-price=${upperPrice}&name=${sort}`
        if(category){
  url = url + `&category=${category}`
        }
      const response = await instance.get(url)
      console.log(response.data)
      setProducts(response.data)
      } catch (error) {
        console.log(error.response.data)
        if(error.response.status === 500){
          return data = <div> error.response.data </div>
        }

      }
    }

    const addToCartFunc = async (product)=>{
      const {
        ID,
        price,
        image,
        title,
      }  = product
      try {


        const response = await axios.post("/addtocart", {ID, price, image, title, quantity: Number(input.quantity)}, {
          headers: {
            'Authorization': `Bearer ${token}` 
          }})

        
        if(response.status === 200){
          const obj = {
            quantity: Number(input.quantity),
            price
          }
          addToCart(obj)
          setInput({quantity:1})
        }
      } catch (error) {
        console.log(error)
      }
  
    
    }
const handleModal = (product)=>{
  setModalProduct([product])
}

{/*SEARCH CONSUME END */}
let x = window.location.pathname

{/*SELLER PROFILE AND SHOP CONSUME START */}
     const getIndividualSellerShop = async () =>{
          try {
            const resp = await axios.get(x)
            console.log(resp)
            setSellerShop(resp.data.Seller_Shop)
            
          }catch(error) {
            console.log(error.response)
          }
    }

   

    
useEffect(()=>{
    getIndividualSellerShop()
  }, [])
  
{/*SELLER PROFILE AND SHOP CONSUME END */}
    return(

         <div>
  <main>
    
    {/* features area start */}
    <section id= "top" className="features__area grey-bg-2 pt-40 pb-20 pl-10 pr-10">
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
  
 {/* Flash seller shop area start */}

 { sellerShop.map((shop) => (
                    
 <section className="flash__sell pt-25 pb-40 grey-bg-2">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="section__head d-md-flex justify-content-between mb-40">
              <div className="section__title">
                <h3>SELLER'S <span>STORE</span></h3>
            <p></p>
              </div>
            </div>
          </div>
        </div>        
        <div className="row">
            <div className='Seller-shop-container'>
                {/*seller card start*/}
            <div className='left-side'>
            <div className='boarder'>
            <div className='avatar-seller'>
                    <img src={  shop.image } className='avatar-seller' alt/>
                </div>
            </div>   
            <div className='seller-01'>      
            <p className='shop-details name'><b>{ shop.first_name } { shop.last_name }</b></p>
            <div className='hold-details'>
            <p className='shop-details'><i className="fas fa-envelope-open-text"></i> { shop.email }</p>
            <p className='shop-details'><i class="fas fa-mobile-alt"></i> { shop.phone_number}</p>
            <p className='shop-details'><i class="fas fa-map-marker" aria-hidden="true"></i> { shop.address}</p>
            <p className='shop-details'><i className="fas fa-user-plus"></i> { shop.username }</p>
            <p className='shop-details'><i className="fas fa-check"></i> Verified Seller On <span className='oja-label'>Oja</span></p>
            <form className="rating star">
  <label>
    <input type="radio" name="stars" defaultValue={1} /> 
    <span className="icon">★</span>
  </label>
  <label>
    <input type="radio" name="stars" defaultValue={2} />
    <span className="icon">★</span>
    <span className="icon">★</span>
  </label>
  <label>
    <input type="radio" name="stars" defaultValue={3} />
    <span className="icon">★</span>
    <span className="icon">★</span>
    <span className="icon">★</span>   
  </label>
  <label>
    <input type="radio" name="stars" defaultValue={4} />
    <span className="icon">★</span>
    <span className="icon">★</span>
    <span className="icon">★</span>
    <span className="icon">★</span>
  </label>
  <label>
    <input type="radio" name="stars" defaultValue={5} />
    <span className="icon">★</span>
    <span className="icon">★</span>
    <span className="icon">★</span>
    <span className="icon">★</span>
    <span className="icon">★</span>
  </label>
</form>
            </div>
            
            </div>
            </div>
             {/*seller card end*/}
            <div className='right-side'>
                
            <div className='seller-profile'>
            <h3 className='store-keeper'><b>{ shop.first_name } { shop.last_name }'s Store </b></h3>
            <div className='sec-one'>
            <img src='/assets/images/cartoon dlv 2.webp' className='sec-one' alt />
           
            </div>
            </div>
<hr/>
            <div className='seller-product'>

            {/*seller product card start*/}
            <SellerProductCard/>
            {/*seller product card end*/}
            </div>

            </div>

            

            </div>

            
        </div>
        
      </div>
    </section>
     ))}
    {/* Flash seller shop area end */}
    
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
            <div id="scroll" className="back-to-top-btn text-center">
              <a href="#top">back to top</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* back to top btn area end */}


  </main>
  </div>
  )
  }