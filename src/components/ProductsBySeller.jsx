import axios from "axios"
import React, {useEffect, useState}from 'react'
import { Link } from "react-router-dom"

const token = localStorage.getItem("token")

const ProductsBySeller = () => {
    const [state, setState] = useState([])

        
       
 axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    const productCall = async ()=>{
        try{
            axios.get("/seller/allproducts").then((resp) => {
                setState(resp.data.SellerProducts);
            })
        }catch(error){
          console.log(error)
        }
    }

    useEffect(()=> {
        productCall() 
    },[])


  return (

    <div class="container">
      
      <div class="main">
        <p>
            <Link to="/seller/dashboard">
            Back to dashboard
            </Link>
        </p>
        <div class="tables">
            <div class="dashboard-table">
                <div class="heading">
                    <h2>Seller's Products</h2>
                    <a href="#" class="btn">View All</a>
                </div>
                <table>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Product</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {state > 0 ? state.map((item, index)=>{
                        return(                         
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.title}</td>
                                <td>{item.Category.name}</td>
                                <td>{item.price}</td>
                                <td>{item.quantity}</td>
                                <td>
                                 <i                                 
                                //  onClick={pass the function}
                                 class="far fa-eye"></i>
                                 <i class="far fa-edit"></i>
                                 <i class="far fa-trash-alt"></i>
                             </td>
                            </tr>
                        )
                    }) : "Nothing to show"}
                    </tbody>
                </table>
               
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsBySeller


