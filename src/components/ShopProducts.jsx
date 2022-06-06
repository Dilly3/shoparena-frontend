import React, {useState, useEffect} from 'react'
import axios from '../axios'
import {useNavigate} from 'react-router-dom'
import SellerProduct from '../components/SellerProduct'
import SellerTopBar from '../components/SellerTopBar'



export default function ShopProducts() {
    const navigate = useNavigate()
    const [products, setSellerProducts] = useState([])
    
    useEffect(() => {
        if (!localStorage.token) {
            navigate("/seller/login")
            
        }}, [localStorage.token])

        useEffect(()=> {
          getOrders() 
      },[])

    

    const getOrders = async () => {
      
        const config = {
            header: { 
            "Authorization": `Bearer ${localStorage.token}`,
            "Content-Type": "application/json"
            }
          }
   
        try {
          const resp = await axios.get("/seller/allproducts", config)
          
          console.log(resp.data.SellerProducts)
          setSellerProducts(resp.data.SellerProducts)
          
        } catch (error){
            setSellerProducts('')
          console.log(error.resp)
        }
      }

     console.log(products)
    return(
<>

<SellerProduct/>
<SellerTopBar/>
        <section id="main-content" className=" ">
        <div className="dashboard-table">
    <div className="heading">
      <h2>Product Overview</h2>
      {/* <a href="#" className="btn">View All</a> */}
      <p className="btn"> You have {products.length} Orders</p>
      
    </div>
    <table className="table-head">
      <thead>
        <tr>
            <td>Number#</td>
            <td>Product</td>
            <td>Category</td>
            <td>Price</td>
            <td>Quantity</td>
            <td>Actions</td>
        </tr>
        </thead>
      <tbody>
      {products && products.map((product,index) =>
        <tr key={index}>
        
        {/* <td>{product.Fname} {product.Lname}</td> */}
        <td>{index + 1}</td>
          <td>{product.title} </td>
          <td>{product.Category.name}</td>
          <td>{product.price}</td>
          <td>{product.quantity}</td>
          <td>
          <i                                 
            //  onClick={pass the function}
              class="far fa-eye"></i>
              <i class="far fa-edit"></i>
              <i class="far fa-trash-alt"></i>
          </td>
        </tr>
      )}
      </tbody>
    </table>
  </div>
  </section>
  </>
    )
}