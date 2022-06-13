import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SocialShare from "./SocialShare/SocialShare";
import "./GetAllSellers.css";
import { AiFillShop } from "react-icons/ai";

const token = localStorage.getItem("token");

const GetAllSellers = ({ id, Rating, Product, Order }) => {
  const [sellers, updateSellers] = useState(null);

  async function fetchSellers() {
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
    {/* PRELOADER */}

    <div id="loading">
        <div id="loading-center">
            <div id="loading-center-absolute">
                <div id="object"></div>
            </div>
        </div>
    </div >
      <div className="sellersNav">
        <p>
          <span className="sellerz">SELLER</span> INFORMATION
        </p>
      </div>
      <div className="grid">
        {sellers ? (
          sellers.map((seller) => {
            console.log(seller);
            return (
              <>
                <div key={id}>
                  <div className="sellerslayout">
                    <section className="scontainer">
                      {seller.image}
                      <br />
                      <h2>
                        {seller.first_name} {seller.last_name}
                      </h2>
                      <br />
                      <p className="contentbody">
                        {seller.email}
                        <br />
                        <br />
                        {seller.username}
                        <br />
                        {seller.address}
                        <br />
                        {seller.phone_number}
                        <br />
                        {seller.status}
                        <br />
                        {seller.token}
                        <br />
                        {seller.product}
                        <br />
                        {seller.orders}
                      </p>
                      <br />
                      <br />
                      {/*view and share seller shop link start*/}
                      <div className="links">
                        <Link to={`/seller/shop/${seller.ID}`}>
                          <p className="store">
                            View Store <AiFillShop />
                          </p>
                        </Link>
                        <div>
                          <SocialShare social_id={seller.ID} />
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </>
            );
          })
        ) : (
          <p className="fetch">Fetching Sellers...</p>
        )}
      </div>
    </>
  );
};
export default GetAllSellers;
