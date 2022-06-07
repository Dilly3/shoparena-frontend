import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import SocialShare from "./SocialShare/SocialShare";

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
      <div className="sellersNav"> NAV </div>
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
                      {seller.email}
                      <br />
                      <br />
                      {seller.username}
                      <br />
                      {seller.address}
                      <br />
                      {seller.phone_number}
                      <br />
                      {/*view and share seller shop link start*/}
                      <Link to={`/seller/shop/${seller.ID}`}><p>View Shore</p></Link>
                    
                      <div> 
                        <SocialShare social_id={seller.ID}/>
                      </div>
                      {/* <a href={`/seller/shop/${seller.ID}`} className="facebook-btn">
                          <i className="fab fa-facebook"></i>
                      </a>
                      <a href={`/seller/shop/${seller.ID}`} className="twitter-btn">
                          <i className="fab fa-twitter"></i>
                      </a>
                      <a href={`/seller/shop/${seller.ID}`} className="linkedin-btn ">
                          <i className="fab fa-linkedin"></i>
                      </a>
                      <a href={`/seller/shop/${seller.ID}`} className="whatsapp-btn">
                          <i className="fab fa-whatsapp"></i>
                      </a>  */}
                      
                      
                     


                     

                     
                      {/*social share links end*/}
                      

                      {/*view and share seller shop link end*/}
                      <br />
                      {seller.status}
                      <br />
                      {seller.token}
                      <br />
                      {seller.product}
                      <br />
                      {seller.orders}
                      <br />
                      {seller.rating}
                    </section>
                  </div>
                </div>
              </>
            );
          })
        ) : (
          <p>Fetching sellers...</p>
        )}
      </div>
    </>
  );
};
export default Seller;
