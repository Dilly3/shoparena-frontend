import React, { useState, useEffect } from "react";
import axios from "../axios";
import { useNavigate, Link } from "react-router-dom";
import SellerProduct from "../components/SellerProduct";
import SellerTopBar from "../components/SellerTopBar";

export default function ShopProducts() {
  
  const navigate = useNavigate();
  const [products, setSellerProducts] = useState([]);
  const [isDeleted, setIsDeleted] = useState(false);
  const [setSeller] = useState("");

  useEffect(() => {
    if (!localStorage.token) {
      navigate("/seller/login");
    }
  }, [localStorage.token]);

  useEffect(() => {
    findTheSeller();
    getOrders();
  }, []);


  const findTheSeller = async () => {
    const config = {
      header: {
        Authorization: `Bearer ${localStorage.token}`,
        "Content-Type": "application/json",
      },
    };
    try {
      const resp = await axios.get("/getsellerprofile", config);
      console.log(resp.data.data);
      setSeller(resp.data.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  const handleEdit = (ID) => {
    navigate(`/seller/update/product/${ID}`)
    };


  const HandleDel = (id) => {
    return async () => {
      const config = {
        header: {
          Authorization: `Bearer ${localStorage.token}`,
          "Content-Type": "application/json",
        },
      };
      try {
        const resp = await axios.delete(`/deleteproduct/${id}`);
        setIsDeleted(true);
        console.log(resp);
        getOrders();
      } catch (error) {
        console.log(error);
      }
    };
  };

  if (isDeleted) {
    setTimeout(() => {
      setIsDeleted(false);
    }, 3000);
  }

  const getOrders = async () => {
    const config = {
      header: {
        Authorization: `Bearer ${localStorage.token}`,
        "Content-Type": "application/json",
      },
    };

    try {
      const resp = await axios.get("/seller/allproducts", config);

      console.log(resp.data.SellerProducts);
      setSellerProducts(resp.data.SellerProducts);
    } catch (error) {
      setSellerProducts("");
      console.log(error.resp);
    }
  };



  return (
    <>
      <section id="main-content" className=" ">
        <div className="dashboard-table">
          <div className="heading">
            <h2>Product Overview</h2>
            {isDeleted && (
              <div class="alert toggle3" role="alert">
                {"delete successful"}
              </div>
            )}
            {/* <a href="#" className="btn">View All</a> */}
            <p className="btn"> You have {(products || []).length} Products</p>
          </div>
          <table className="table-head">
            <thead>
              <tr>
                <td>Number#</td>
                <td>Product</td>
                {/* <td>Category</td> */}
                <td>Price</td>
                <td>Quantity</td>
                <td>Actions</td>
              </tr>
            </thead>
            <tbody>
              {products &&
                products.map((product, index) => (
                  <tr key={index}>
                    {/* <td>{product.Fname} {product.Lname}</td> */}
                    <td>{index + 1}</td>
                    <td>{product.title} </td>
                    {/* <td>{product.Category.name}</td> */}
                    <td>{product.price}</td>
                    <td>{product.quantity}</td>
                    <td>
                      {/* <i
                        //  onClick={pass the function}
                        class="far fa-eye"
                      ></i> */}
                      <i class="far fa-edit" onClick={()=>handleEdit(product.ID)}></i>
                      <button onClick={HandleDel(product.ID)}>
                        <i
                          class="far fa-trash-alt"
                          key={index}
                          onClick={HandleDel(index)}
                        ></i>
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
