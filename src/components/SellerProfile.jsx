import SellerTopBar from "./SellerTopBar";
import SellerContainer from "./SellerContainer";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "../axios";
import React from "react"
import "./sellerProfile.css";

export default function SellerProfile({ handleClick }) {
  //  const { user } = useContext(AuthContext);
  const [user, setUser] = useState(null)

  const getSellerInfo = async () => {
    try {
      const resp = await axios.get("getsellerprofile")
      console.log(resp.data)
      setUser(resp.data.data)
    } catch (error) {
      console.log(error.data)
    }
  };

  useEffect(() => {
    getSellerInfo()
  }, []);

  const defaultImgUrl =
    "https://www.kindpng.com/picc/m/52-526237_avatar-profile-hd-png-download.png";
   //"/assets/img/no-pic-ava.jpeg";

  if (user === null) {
    return(
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
</div>)
  } else {
    return (
      <>
         <SellerTopBar/>
         <SellerContainer/>
        <div className="profile row main-body"> 
         
          <div className="mb-3"></div>
          <div className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center">
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
                </div>
                <div className="d-flex justify-content-around">
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
                  <div className="col-sm-9 text-secondary">{user.phone_number}</div>
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
                    <Link to="/update/seller/profile">
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