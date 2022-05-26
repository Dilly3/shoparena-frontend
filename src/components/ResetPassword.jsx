import React, {useEffect, useState} from 'react'
import {Link, useNavigate} from "react-router-dom"
import Navbar from './Navbar'
import axios from '../axios'

const ResetPassword = () => {
    const navigate = useNavigate()

    useEffect(() => {
    if (!localStorage.token) {
        navigate("/")
    }
}, [localStorage.token])
    const [alert,setAlert] = useState({
        newPassword: '',
        confirmNewPassword: '',
    })
    const [reset, setReset] = useState(
        {
            oldPassword: '',
            newPassword: '',
            confirmNewPassword: '',
        }
    )
    const resetUser = async (oldPassword, newPassword, confirmNewPassword) => {
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json"
                }
            }
            console.log(localStorage.token);
            const response = await axios.put("/seller/updatepassword", {
                old_password: oldPassword,
                new_password: newPassword,
                confirm_new_password: confirmNewPassword
            }, config)

            const data = await response 
            localStorage.removeItem("token")
            console.log(data)
            // const token = response.data.data.access_token
            // localStorage.setItem("token", token)
            navigate("/")
        } catch (error) {
            console.log(error.response)
        }
    }

    const onSubmit = (e) => {
        e.preventDefault()
        resetUser(reset.oldPassword, reset.newPassword, reset.confirmNewPassword)
    }
    function handleSubmit(e){
        e.preventDefault()
    
        let newPassword = `${reset.newPassword}`
        let confirmNewPassword = `${reset.confirmNewPassword}`


        const minNumOfChars = 6
        const maxNumOfChars = 32
        if (
            newPassword.length < minNumOfChars ||
            newPassword.length > maxNumOfChars
        ){
            setAlert(
                {
                    message: `Please the length of your password must be greater 6`,
                    color: 'red',
                    status: '',
                    show: false,
                },
                5000
            )
        }

        if (
            confirmNewPassword.length < minNumOfChars ||
            confirmNewPassword.length > maxNumOfChars
        ){
            setAlert(
                {
                    message: `Please the length of your password must be greater 6`,
                    color: 'red',
                    status: '',
                    show: false,
                },
                5000
            )
        }
        setTimeout(()=>{
            setAlert({
                message: '',
                color: '',
                status: '',
                show: true,
            })
        }, 5000)
        return
    }
     function handleChange(e){
       setReset({...reset, [e.target.name]: e.target.value})
    
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
                                      <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                                      <li class="breadcrumb-item active" aria-current="page"><Link to="/login">Lnmnjnmjnogin</Link></li>
                                      <Link to="/login">sdfgsdfgdg</Link>
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
                            <h3 class="text-center mb-60">Reset Password From Here</h3>
                            <form method="POST" onSubmit={onSubmit}>
                                <label for="pass">Old Password <span>**</span></label>
                                <input 
                                id="pass" 
                                name="oldPassword" 
                                type="password" 
                                placeholder="Enter password..."
                                value={reset.oldPassword}
                                onChange={handleChange}
                                 />
                                <label for="pass">New Password <span>**</span></label>
                                <input 
                                id="pass" 
                                name="newPassword" 
                                type="password" 
                                placeholder="Enter password..."
                                value={reset.newPassword}
                                onChange={handleChange}
                                 />

                                <label for="pass">Confirm New Password <span>**</span></label>
                                <input 
                                id="pass" 
                                name="confirmNewPassword" 
                                type="password" 
                                placeholder="Enter password..."
                                value={reset.confirmNewPassword}
                                onChange={handleChange}
                                 />      
                                
                                <button 
                                class="t-y-btn w-100"
                                type="submit"
                                >Reset Password</button>
                                
                            </form>
                            </div>
                    </div>
                </div>
                </div>
            </section>
        </main>
  )
}

export default ResetPassword