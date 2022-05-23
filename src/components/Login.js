import {Link} from "react-router-dom"
import { useState } from "react"
import validateEmail from "../emailValidator"
export default function Login() {

const [alert,setAlert] = useState({
    email: '',
    password: '',
    remember_me: false,
})
const [login, setLogin] = useState(
        {
            name: '',
            email: '',
            password: '',
            remember_me: false,
        }
    )

    function handleSubmit(e){
        e.preventDefault()
        const emailValidator= validateEmail(login.email)
        if (emailValidator){
            setAlert(
                {
                    message: "Please enter a valid email",
                    color: 'red',
                    status: false,
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
            }, 5000)
        })
        let newPassword = `${login.password}`
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
        const [name, email] = e.target
        setLogin((name, email)=>{
            // return {
            //     ...prev
            // }
        })

        // LoginUser(login.email, login.password)
        setLogin({
            // ...prev,
            email: '',
            password: '',
        })
    }
    
    return (
        <>
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
                            <h3 class="text-center mb-60">Login From Here</h3>
                            <form>
                                <label for="name">Email Address <span>**</span></label>
                                <input 
                                id="name" 
                                type="text" 
                                placeholder="Email address..." 
                                name="email"
                                onChange={handleChange}
                                />
                                <label for="pass">Password <span>**</span></label>
                                <input id="pass" type="password" placeholder="Enter password..." />
                                <div class="login-action mb-20 fix">
                                        <span class="log-rem f-left">
                                        <input id="remember" type="checkbox" />
                                        <label for="remember">Remember me!</label>
                                        </span>
                                        <span class="forgot-login f-right">
                                        <a href="#">Lost your password?</a>
                                        </span>
                                </div>
                                <button 
                                class="t-y-btn w-100"
                                onSubmit={handleSubmit}
                                >Login Now</button>
                                <div class="or-divide"><span>or</span></div>
                                <a href="register.html" class="t-y-btn t-y-btn-grey w-100">Register Now</a>
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