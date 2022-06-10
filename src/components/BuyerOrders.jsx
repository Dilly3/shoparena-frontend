import React, {useState, useEffect} from 'react'
import axios from '../axios'
import {useNavigate, Link} from 'react-router-dom'
import "./buyerOrders.css";

export default function BuyerOrdersComponent() {
    const navigate = useNavigate()
    
    useEffect(() => {
        if (!localStorage.token) {
            navigate("/buyer/login")
        }}, [localStorage.token])
        
    const [orders, setOrders] = useState([])

    const getOrders = async () => {
        const config = {
            header: { 
            "Authorization": `Bearer ${localStorage.token}`,
            "Content-Type": "application/json"
            }
          }
   
        try {
          const resp = await axios.get("/buyerorders", config)
          
          console.log(resp.data)
          setOrders(resp.data.Buyer_Order)
          console.log(orders)
        } catch (error){
            setOrders('')
          console.log(error.resp)
        }
      }

      useEffect(()=>{
        getOrders()
    }, [])

      
    return(
        <>
         <section id="main-content" className="page-container row-fluid">
        <div className=" container-bdb" >
     
        <div className="tables-bdb">
          <div className="dashboard-table-bdb order">
            <div className="heading-bdb ">
              <h2>Order Overview</h2>
              <p className="btn-bdb">You have {(orders || []).length} Orders</p>
            </div>
            <table className="table-head-bdb">
              <thead>
                <tr><td>Seller</td>
                  <td>Category</td>
                  <td>Product</td>
                  <td>Price</td>
                  <td>Quantity</td>
                </tr>
                </thead>
              <tbody>
              {orders && orders.map((order,index) =>
        <tr key={index}>
        
        <td>{order.Fname} {order.Lname}</td>
          <td>{order.CategoryName} </td>
          <td>{order.Title}</td>
          <td>{order.Price}</td>
          <td>{order.Quantity}</td>
        </tr>
      )}
                
              </tbody>
            </table>
          </div>
       
    </div>
    </div>
    </section>
    
        </>
    )
}