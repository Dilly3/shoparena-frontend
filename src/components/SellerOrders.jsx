import React, {useState, useEffect} from 'react'
import axios from '../axios'

export default function SellerOrdersComponent() {
    const [orders, setOrders] = useState([])

    const getOrders = async () => {
   
        try {
          const resp = await axios.get("/sellerorders/")
          console.log(orders)
          console.log(resp.data.data)
          setOrders(resp.data.data.Seller_Order)
        } catch (error){
            setOrders([])
          console.log(error)
        }
      }


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
      {orders && orders.map(order =>
        <tr key={order.id}>
        
        <td>{order.FName} {order.LName}</td>
          <td>{order.Category} </td>
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