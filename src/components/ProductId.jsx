import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const token = localStorage.getItem("token");

function ProductId(props) {
  const { id } = useParams();
  const [product, updateProduct] = useState(null);

  async function getProductDetails(id) {
    // const { ID, price, image, title } = product;
    try {
      const response = await axios.get(
        `https://oja-ecommerce.herokuapp.com/api/v1/product/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      updateProduct(response.data.Product);
      console.log("Response: ", response);
    } catch (error) {
      console.log("Errors", error);
    }
  }

  useEffect(() => {
    getProductDetails(id);
  }, []);

  return (
    <>
      {product ? (
        <div key="Id">
          <Link to="/">Home</Link>
          <h1>{product.ID}</h1>
          <h4>"Category"</h4>
          <h4>{product.title}</h4>
        </div>
      ) : (
        <h1>loading...</h1>
      )}
    </>
  );
}
export default ProductId;
