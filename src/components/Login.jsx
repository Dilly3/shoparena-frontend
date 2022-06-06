import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import validateEmail from "../emailValidator";
import axios from "../axios";
import Alert from "react-bootstrap/Alert";

export default function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.token) {
      navigate("/");
    }
  }, []);

  const [error, setError] = useState("");
  {
    if (error) {
      setTimeout(() => {
        setError("");
      }, 7000);
    }
  }
  const [alert, setAlert] = useState({
    email: "",
    password: "",
    remember_me: false,
  });
  const [login, setLogin] = useState({
    email: "",
    password: "",
    remember_me: false,
  });
  const loginUser = async (email, password) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await axios.post(
        "/loginbuyer",
        { email, password },
        config
      );
      const token = response.data.data.access_token;
      localStorage.setItem("token", token);
      localStorage.setItem("access_token", token);
      navigate("/");
      window.location.reload();
    } catch (error) {
      setError("invalid password or email");
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    loginUser(login.email, login.password);
  };
  function handleSubmit(e) {
    e.preventDefault();
    const emailValidator = validateEmail(login.email);
    if (emailValidator) {
      setAlert(
        {
          message: "Please enter a valid email",
          color: "red",
          status: false,
        },
        5000
      );
    }
    setTimeout(() => {
      setAlert(
        {
          message: "",
          color: "",
          status: "",
          show: true,
        },
        5000
      );
    });
    let newPassword = `${login.password}`;
    const minNumOfChars = 6;
    const maxNumOfChars = 32;
    if (
      newPassword.length < minNumOfChars ||
      newPassword.length > maxNumOfChars
    ) {
      setAlert(
        {
          message: `Please the length of your password must be greater 6`,
          color: "red",
          status: "",
          show: false,
        },
        5000
      );
    }
    setTimeout(() => {
      setAlert({
        message: "",
        color: "",
        status: "",
        show: true,
      });
    }, 5000);
    return;
  }

<<<<<<< HEAD
    function handleChange(e){
    
       setLogin({...login, [e.target.name]: e.target.value})
      
    }
    
    return (
        <main>
            <section class="login-area pb-100">
                <div class="container">
                <div class="row">
                    <div class="col-lg-8 offset-lg-2">
                            <div class="basic-login">
                            <h3 class="text-center mb-60">Buyer Login</h3>
                            <form method="POST" onSubmit={onSubmit}>
                                <label for="name">Email Address <span>**</span></label>
                                <input 
                                id="email" 
                                type="email" 
                                placeholder="Email address..." 
                                name="email"
                                value={login.email}
                                onChange={handleChange}
                                />
                                <label for="pass">Password <span>**</span></label>
                                <input 
                                id="pass" 
                                name="password" 
                                type="password" 
                                placeholder="Enter password..."
                                value={login.password}
                                onChange={handleChange}
                                 />
                                <div class="login-action mb-20 fix">
                                        <span class="log-rem f-left">
                                        <input id="remember" type="checkbox" />
                                        <label for="remember">Remember me!</label>
                                        </span>
                                        <span class="forgot-login f-right">
                                        <a href="/buyer/forgot">Lost your password?</a>
                                        </span>
                                </div>
                                <button 
                                class="t-y-btn w-100"
                                type="submit"
                                >Login Now</button>
                                <div class="or-divide"><span>or</span></div>
                                
                                <Link to="/buyer/register" class="t-y-btn t-y-btn-grey w-100">Register Now</Link>
                            </form>
                            </div>
                    </div>
                </div>
                </div>
            </section>
        </main>
    )
}
=======
  function handleChange(e) {
    setLogin({ ...login, [e.target.name]: e.target.value });
  }

  return (
    <main>
      <section class="breadcrumb__area box-plr-75">
        <div class="container-fluid">
          <div class="row">
            <div class="col-xxl-12">
              <div class="breadcrumb__wrapper">
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      <Link to="/buyer/login">Buyer Sign in</Link>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="login-area pb-100">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 offset-lg-2">
              <div class="basic-login">
               
                <h3 class="text-center mb-60">Buyer Login</h3>
                {error && (
                  <div class="alert toggle" role="alert">
                    {error}
                  </div>
                )}

                <form method="POST" onSubmit={onSubmit}>
                  <label for="name">
                    Email Address <span>**</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Email address..."
                    name="email"
                    value={login.email}
                    onChange={handleChange}
                  />
                  <label for="pass">
                    Password <span>**</span>
                  </label>
                  <input
                    id="pass"
                    name="password"
                    type="password"
                    placeholder="Enter password..."
                    value={login.password}
                    onChange={handleChange}
                  />
                  <div class="login-action mb-20 fix">
                    <span class="log-rem f-left">
                      <input id="remember" type="checkbox" />
                      <label for="remember">Remember me!</label>
                    </span>
                    <span class="forgot-login f-right">
                      <a href="/buyer/forgot">Lost your password?</a>
                    </span>
                  </div>
                  <button class="t-y-btn w-100" type="submit">
                    Login Now
                  </button>
                  <div class="or-divide">
                    <span>or</span>
                  </div>

                  <Link to="/buyer/register" class="t-y-btn t-y-btn-grey w-100">
                    Register Now
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
>>>>>>> 0976d0ed1ad2ce32e5cb245910718949059c2d27
