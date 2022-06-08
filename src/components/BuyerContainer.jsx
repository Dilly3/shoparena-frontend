import React, {useState, useEffect} from 'react'
import axios from '../axios'
import { Link ,useNavigate} from 'react-router-dom'


export default function BuyerContainer() {

const navigate = useNavigate()
  useEffect(() => {
    if (!localStorage.token) {
        navigate("/buyer/login")
    }}, [localStorage.token])

    const [buyerDetails, setBuyerDetails] = useState("")

    const getIndividualBuyer = async () =>{
        const config = {
            "Authorization": `Bearer ${localStorage.token}`,
            "Content-Type": "application/json"
        }
        try {
          const resp = await axios.get("/getbuyerprofile", config)
          console.log(resp)
          setBuyerDetails(resp.data.data)
          console.log(resp.data)
          
        }catch(error) {
          console.log(error.response)
      }
  }
 
useEffect(()=>{
    getIndividualBuyer()
}, [])

  return (
    <>
    
    <div className="container-bdb">
  <div className="sidebar-bdb">
    <ul>
      <li>
        <a href="#">
          <i className="fas fa-clinic-medical" />
          <div className="title-bdb">Oja</div>
        </a>
      </li>
      <p className='buyer-name'>{ buyerDetails.first_name } { buyerDetails.last_name }</p>
      <li>
        {/* <Link to="/buyer/dashboard"> */}
        <Link to="/buyer/dashboard/orders">
          <i className="fas fa-th-large" />
          <div className="title-bdb">Dashboard</div>
        </Link>
      </li>
      <li>
        <Link to="/buyer/profile">
          <i className="fas fa-user" />
          <div className="title-bdb">Profile</div>
        </Link>
      </li>
      <li>
        <Link to="/buyer/dashboard/orders">
          <i className="fas fa-archive" />
          <div className="title-bdb">Orders</div>
        </Link>
      </li>
      <li>
        <Link to="/resetpassword">
          <i className="fas fa-user" />
          <div className="title-bdb">Change password</div>
        </Link>
      </li>
      <li>
        <a href="#">
          <i className="fas fa-hand-holding-usd" />
          <div className="title-bdb">Payments</div>
        </a>
      </li>
    </ul>
  </div>
  <div className="main-bdb">
    <div className="top-bar-bdb">
      
      <i className="fas fa-bell" />
      <div className="user-bdb">
        <img src="./images/cv__29__generated.jpg" alt />
      </div>
    </div>
    {/* <div className="left-right cards-bdb">
      <div className="left card-bdb">
        <div className="card-content-bdb">
          <div className="number-bdb">67</div>
          <div className="card-name-bdb">Total product bought</div>
        </div>
        <div className="icon-box-bdb">
          <i className="fas fa-briefcase-medical" />
        </div>
      </div>
      <div className="right card-bdb">
        <div className="card-content-bdb">
          <div className="number-bdb">105</div>
          <div className="card-name-bdb">Total amount spent</div>
        </div>
        <div className="icon-box-bdb">
          <i className="fas fa-naira-sign fa-fw" />
        </div>
      </div>
      <div className="card-bdb">
        <div className="card-content-bdb">
          <div className="number-bdb">8</div>
          <div className="card-name-bdb">Dolor</div>
        </div>
        <div className="icon-box-bdb">
          <i className="fas fa-briefcase-medical" />
        </div>
      </div>
      <div className="card-bdb">
        <div className="card-content-bdb">
          <div className="number-bdb">$4500</div>
          <div className="card-name-bdb">income</div>
        </div>
        <div className="icon-box-bdb">
          <i className="fas fa-dollar-sign" />
        </div>
      </div>
    </div> */}
    <div className="cards-bdb">
      
      
      
    </div>
 
</div>
</div>

    </>
  )
}