import React, {useState, useEffect} from 'react'
import axios from '../axios'
import {useNavigate} from 'react-router-dom'

export default function SellerOrdersComponent() {
    const navigate = useNavigate()
    
    useEffect(() => {
        if (!localStorage.token) {
            navigate("/seller/login")
        }}, [localStorage.token])

    const [orders, setOrders] = useState('')

    const getOrders = async () => {
        const config = {
            header: { 
            "Authorization": `Bearer ${localStorage.token}`,
            "Content-Type": "application/json"
            }
          }
   
        try {
          const resp = await axios.get("/sellerorders/", config)
          
          console.log(resp.data)
          setOrders(resp.data.Seller_Order)
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

        <section id="main-content" className=" ">
        <div className="dashboard-table">
    <div className="heading">
      <h2>Order Overview</h2>
      <a href="#" className="btn">View All</a>
    </div>
    <table className="table-head">
      <thead>
        <tr><td>Buyer Name</td>
          <td>Product Category</td>
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
          <td>{order.Product}</td>
          <td>{order.Price}</td>
          <td>{order.Quantity}</td>
        </tr>
      )}
      </tbody>
    </table>
  </div>
  </section>
    )
}