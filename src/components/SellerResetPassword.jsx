import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../axios";

const SellerResetPassword = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.token) {
      navigate("/");
    }
  }, [localStorage.token]);

  const [reset, setReset] = useState({
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });
  const resetUser = async (oldPassword, newPassword, confirmNewPassword) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      console.log(localStorage.token);
      const response = await axios.put(
        "/seller/updatepassword",
        {
          old_password: oldPassword,
          new_password: newPassword,
          confirm_new_password: confirmNewPassword,
        },
        config
      );

      const data = await response;
      localStorage.removeItem("token");
      console.log(data);
      alert(response.data.message);
      navigate("/");
    } catch (error) {
      alert(error.response.data.message);
      console.log(error.response.data.message);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    resetUser(reset.oldPassword, reset.newPassword, reset.confirmNewPassword);
  };
  
  function handleChange(e) {
    setReset({ ...reset, [e.target.name]: e.target.value });
  }
  return (
    <main>
      <section className="breadcrumb__area box-plr-75">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xxl-12">
              <div className="breadcrumb__wrapper">
                <nav aria-label="breadcrumb"></nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="login-area pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="basic-login">
                <h3 className="text-center mb-60">Reset Password From Here</h3>
                <form method="POST" onSubmit={onSubmit}>
                  <label for="pass">
                    Old Password <span>**</span>
                  </label>
                  <input
                    id="pass"
                    name="oldPassword"
                    type="password"
                    placeholder="Enter password..."
                    value={reset.oldPassword}
                    onChange={handleChange}
                  />
                  <label for="pass">
                    New Password <span>**</span>
                  </label>
                  <input
                    id="pass"
                    name="newPassword"
                    type="password"
                    placeholder="Enter password..."
                    value={reset.newPassword}
                    onChange={handleChange}
                  />

                  <label for="pass">
                    Confirm New Password <span>**</span>
                  </label>
                  <input
                    id="pass"
                    name="confirmNewPassword"
                    type="password"
                    placeholder="Enter password..."
                    value={reset.confirmNewPassword}
                    onChange={handleChange}
                  />

                  <button className="t-y-btn w-100" type="submit">
                    Reset Password
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SellerResetPassword;
