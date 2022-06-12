import React, { useEffect} from 'react';
import { useAppContext } from '../context/ContextUse';
import {useNavigate} from 'react-router-dom';
import { Link } from "react-router-dom";


export default function SuccessfulPayment(){

  const navigate = useNavigate();
  const { cartAmount, quantity} = useAppContext()

  useEffect(()=>{
  
  },[])
  
  
  const token = localStorage.getItem("token")


    return(
  <div>
  <main>
   <div className='payment'>
   <h3>Thank you for your Patronage</h3>
    <h4>{cartAmount} NGN Successfully paid for {quantity} Items</h4><br></br>
    <Link to="/">
    <h4>Continue Shopping</h4> 
    </Link>  
   </div>

  </main>
  </div>
  )
  }