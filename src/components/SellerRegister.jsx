import React, {useEffect, useState} from 'react'
import {Link, useNavigate} from "react-router-dom";
import validateEmail from "../emailValidator"
import axios from "../axios"


export default function SellerRegisterComponent() {

    const navigate = useNavigate()

    useEffect(() => {
        if (localStorage.token) {
            navigate("/seller/dashboard")
        }}, [localStorage.token])
    
  
   
        const [success, setSuccess] = useState("")
        const [error, setError] = useState("")
        const [signup, setSignup] = useState(
            {
                first_name: '',
                last_name: '',
                email: '',
                username: '',
                phone_number: '',
                password: '',
            }
        )
    
        const signUpUser = async (first_name, last_name, username, email, phone_number, password) => {

            try {
                const config = {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
              
                const response = await axios.post("/sellersignup", {
                first_name,
                last_name,
                username,
                email,
                phone_number,
                password
                }, config)
    
                const data =  response.data 
               
                console.log(data)
    
                setSuccess("Sign Up Successful")
    
                setTimeout(()=>{
                    navigate("/seller/login")
                }, 5000)
                
            } catch (error) {
                //console.log(error.response.data.error)
                setError(error.response.data.error)

                setTimeout(()=>{
                    setError("")
                }, 5000)
                return
            }
        }
    
        
        
    
    
    const handleSubmit =(e)=> {
        e.preventDefault()

        setError("");

        let newPassword = `${signup.password}`
        const minNumOfChars = 8
        const maxNumOfChars = 20

        let newPhone_number = `${signup.phone_number}`
        const minNumOfCharsPhone_number = 11
        const maxNumOfCharsPhone_number = 13
    
        const emailValidator= validateEmail(signup.email)

        if (!emailValidator){
            setError( "Please enter a valid email");
            return;
        }else if (
            newPassword.length < minNumOfChars || newPassword.length > maxNumOfChars ){
                setError( "Password should not be less than 8 charcters")
                return;
        }else if (newPhone_number.length < minNumOfCharsPhone_number || newPhone_number.length > maxNumOfCharsPhone_number){
            setError( "Enter valid phone number")   
            return;
        }

        signUpUser(signup.first_name,signup.last_name,signup.username,signup.email,signup.phone_number ,signup.password)
    }
    
        function handleChange(e){
           setSignup({...signup, [e.target.name]: e.target.value})
    }
    
    
    
        return (
            <>
            <main>
<<<<<<< HEAD
=======
                <section class="breadcrumb__area box-plr-75">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-xxl-12">
                                <div class="breadcrumb__wrapper">
                                    <nav aria-label="breadcrumb">
                                        <ol class="breadcrumb">
                                          <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                                          <li class="breadcrumb-item active" aria-current="page">Seller Sign up</li>
                                        </ol>
                                        <div style={{position:"fixed", left:"50%", transform: "translate(-50%,0)"}}>
                 {success && <div style={{ padding: "10px", backgroundColor: "#008000", color: "#ffffff", zIndex: 100, textalign: "center"}}>{success}</div>}
                 {error && <div style={{ padding: "10px", backgroundColor: "#f44336", color: "#ffffff", zIndex: 100, textalign: "center"}} >{error}</div>}
                                        </div>
                                      </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
>>>>>>> 0976d0ed1ad2ce32e5cb245910718949059c2d27
                <section class="login-area pb-100">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-8 offset-lg-2">
                                <div class="basic-login">
                                    <h3 class="text-center mb-60"> Seller Signup</h3>
    
         
                                    
                                    <form method="POST" onSubmit={handleSubmit}>
    
                                    <label for="first_name">First name <span>**</span></label>
                                        <input id="first_name" 
                                        type="text" 
                                        placeholder="Enter First name" 
                                        name="first_name"
                                        value={signup.first_name}
                                        onChange={handleChange}/>
    
    
                                        <label for="last_name">Last name <span>**</span></label>
                                        <input id="last_name" 
                                        type="text" 
                                        placeholder="Enter Last name" 
                                        name="last_name"
                                        value={signup.last_name}
                                        onChange={handleChange}/>
    
    
    
                                        <label for="username">Username <span>**</span></label>
                                        <input id="username" 
                                        type="text"
                                         placeholder="Enter Username"                               
                                        name="username"
                                        value={signup.username}
                                        onChange={handleChange}/>
    
    
                                        <label for="email-id">Email Address <span>**</span></label>
                                        <input 
                                        id="email-id"
                                        type="email" 
                                        placeholder="Email address..." 
                                        name="email"
                                        value={signup.email}
                                        onChange={handleChange}/>
    
                                        <label for="phone_number">Phone Number <span>**</span></label>
                                        <input 
                                        id="phone_number"
                                        type="text" 
                                        placeholder="Phone Number" 
                                        name="phone_number"
                                        value={signup.phone_number}
                                        onChange={handleChange}/>
    
    
                                        <label for="pass">Password <span>**</span></label>
                                        <input 
                                        id="pass" 
                                        name="password" 
                                        type="password" 
                                        placeholder="Enter password..."
                                        value={signup.password}
                                        onChange={handleChange}
                                        />
    
                                        <div class="mt-10"></div>
                                        <button type="submit" class="t-y-btn w-100">Register Now</button>
                                        <div class="or-divide"><span>or</span></div>
                                        <Link to="/seller/login" class="t-y-btn t-y-btn-grey w-100">login Now</Link>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
     
            </main>
    
            </>
        )
    }