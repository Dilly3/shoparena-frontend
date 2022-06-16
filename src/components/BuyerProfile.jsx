import BuyerContainer from "./BuyerContainer";
import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "../axios";
import "./sellerProfile.css";

export default function BuyerProfile({ handleClick }) {
  //  const { user } = useContext(AuthContext);
  const [user, setUser] = useState(null);

  const getBuyerInfo = async () => {
    try {
      const resp = await axios("getbuyerprofile");
      console.log(resp.data);
      setUser(resp.data.data);
    } catch (error) {
      console.log(error.data);
    }
  };

  useEffect(() => {
    getBuyerInfo();
  }, []);

  console.log(user);
  const defaultImgUrl =
    "https://www.kindpng.com/picc/m/52-526237_avatar-profile-hd-png-download.png";
    //"https://i.ibb.co/5jwDfyF/Photo-on-24-11-2021-at-20-45.jpg";

  if (user === null) {
    return(
    // <h1>Loading...</h1>
    <div className="lds-spinner">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                )
  } else {
    return (
      <>
        <div>
          <BuyerContainer />
        </div>

        <div className="buyerProfile row main-body">
          <div className="mb-3"></div>
          <div className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <div className="buyer-img d-flex flex-column align-items-center text-center">
                  <img
                    width="150"
                    height="150"
                    src={user.image ? user.image : "/assets/img/no-pic-ava.jpeg"}
                    alt={user.first_name}
                    className="rounded-circle"
                  />

                  <div className="mt-3">
                    <h4>
                      {user.first_name} {user.last_name}
                    </h4>
                    <p className="text-muted font-size-sm">{user.address}</p>
                  </div>
                  {/* {!isBuyer && (
                    <Link
                      className="btn btn-primary"
                      style={{ background: `#2076d2` }}
                      to="/bookmark"
                    >
                      Starred Products
                    </Link>
                  )} */}
                </div>
                <div className="d-flex justify-content-around">
                  {/* {isBuyer && (
                    <Link
                      to="/apartment"
                      style={{ background: `#2076d2` }}
                      className="btn btn-primary"
                    >
                      Create
                    </Link>
                  )}
                  {isBuyer && (
                    <Link
                      style={{ background: `#2076d2` }}
                      className="btn btn-primary"
                      to="/profile/apartments"
                    >
                      My Orders
                    </Link>
                  )} */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card mb-3">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Full Name</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    {user.first_name} {user.last_name}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Email</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">{user.email}</div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Phone</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    {user.phone_number}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Username</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">{user.username}</div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Address</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">{user.address}</div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-12">
                    <Link to="/update/buyer/profile">
                      <button
                        style={{ background: `#fcb700`, border: "none" }}
                        className="btn btn-dark"
                        onClick={handleClick}
                        type="button"
                      >
                        Update Profile
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
