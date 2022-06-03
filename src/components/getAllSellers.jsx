import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const token = localStorage.getItem("token");

const Seller = ({ id, Rating, Product, Order }) => {
  const [sellers, updateSellers] = useState(null);

  async function fetchSellers() {
    // const { ID, price, image, title } = product;
    try {
      const response = await axios.get(
        `https://oja-ecommerce.herokuapp.com/api/v1/sellers`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      updateSellers(response.data.Sellers);
      // console.log("Sellers: ", response.data.Sellers);
    } catch (error) {
      console.log("Errors", error);
    }
  }

  useEffect(() => {
    fetchSellers();
  }, []);

  return (
    <>
      {sellers ? (
        sellers.map((seller) => {
          console.log(seller);
          return (
            <>
              <div key={id}>
                {/* <Link to={`/sellers/${id}`}>
                    <FaSearch />
                  </Link> */}
              </div>
              <footer>
                <h5>{seller.first_name}</h5>
                {/* <h5>"Order"</h5>
                  <h5>"Rating"</h5>
                  <p>"formatPrice(price)"</p> */}
              </footer>
            </>
          );
        })
      ) : (
        <p>fetching sellers...</p>
      )}
    </>
  );
};
export default Seller;
