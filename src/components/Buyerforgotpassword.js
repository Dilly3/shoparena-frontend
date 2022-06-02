import React, { useState } from "react";



const BuyerforgetPassword = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("")

    const handleSubmit = async (e) => {
            e.preventDefault();
            const response = await fetch("http://localhost:8080/api/v1/buyer/forgotpassword", {
                method: "POST",
                body: JSON.stringify({
                    email: email
                }),
                mode: "cors",
                headers: {"Content-type": "application/json"}
            })
            const data = await response.json()
            console.log(response.status)
            
            if(response.status === 200){
                setMessage("Email sent successfully")
            }else {
                setMessage("An error occured")
            }
    }

    const handleChange = (e) => {
        setEmail(e.target.value)
    }
    return (
        <section className="login-area pb-100">
                <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                            <div className="basic-login">
                            <h3 className="text-center mb-60">Please enter the e-mail address associated with your Oja account. We will send a link to this e-mail address to reset your password.</h3>
                            <form onSubmit={handleSubmit}>
                                <label htmlFor="name">Email Address <span>**</span></label>
                                <input id="name" value={email} type="text" placeholder="Email address..."  onChange={handleChange}/>
                                <button className="t-y-btn w-100">Send reset link</button>
                                {message && <div ><p>{message}</p></div>}
                            </form>
                        </div>
                    </div>
                </div>
                </div>
            </section>
    );
}

export default BuyerforgetPassword;
