import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Sellerupdatepassword = () => {
    const [password, setPassword] = useState("");
    const [conPassword, setConPassword] = useState("");
    // const [message, setMessage] = useState("")

     const  location  = useNavigate();

    console.log(password, conPassword)

console.log(window.location.pathname.split("/")[3])

    const handleSubmit = async(e) => {
    

        e.preventDefault();
        const response = await fetch(`http://localhost:8080/api/v1/sellerresetpassword?reset_token=${window.location.pathname.split("/")[3]}`, {
            method: "PUT",
            body: JSON.stringify({
                new_password: password,
                confirm_new_password: conPassword
            }),
            mode: "cors",
            headers: {"Content-type": "application/json"}
        })
        console.log(response.status)

        // console.log(response.status)

        if (password !== conPassword) {
            console.log("Password error");
        }
        else{
            // setMessage("Password changed")
            location("/")
        }
    }


    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleConPassword = (e) => {
        setConPassword(e.target.value)
    }



  return (
    <section className="login-area pb-100">
                <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                            <div className="basic-login">
                            <h3 className="text-center mb-60">reset password</h3>
                            <form onSubmit={handleSubmit}>
                                <label htmlFor="name">New password <span>**</span></label>
                                <input id="name" value={password} type="password" placeholder="New password..."  onChange={handlePassword}/>
                                <label htmlFor="name">Confirm password <span>**</span></label>
                                <input id="name" value={conPassword} type="password" placeholder="Confirm new password..."  onChange={handleConPassword}/>
                                 <button className="t-y-btn w-100" type='submit'>Reset password</button>
                               {/* {message && <div ><p>{message}</p></div>}
                                <button type='submit'>Submit</button> */}
                            </form>
                        </div>
                    </div>
                </div>
                </div>
            </section>
  )
}

export default Sellerupdatepassword