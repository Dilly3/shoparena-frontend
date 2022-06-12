import React, { useEffect} from 'react';
import { useAppContext } from '../context/ContextUse';
import {useNavigate} from 'react-router-dom';
import { Link } from "react-router-dom";


export default function UnsuccessfulPayment(){

  const navigate = useNavigate();
  const { cartAmount, quantity} = useAppContext()

  useEffect(()=>{
  
  },[])
  
  
  const token = localStorage.getItem("token")


    return(
  <div>
  <main>
   <div className='payment'>
   <h3>PAYMENT NOT SUCCESSFUL</h3><br></br>
   <Link to="/">
    <h4>Please Go Back Home</h4> 
    </Link>    
   </div>

  </main>
  </div>
  )
  }