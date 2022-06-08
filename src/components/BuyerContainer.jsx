import React, {useState, useEffect} from 'react'
import axios from '../axios'
import { Link } from 'react-router-dom'


export default function BuyerContainer() {

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
        <Link to="/buyer/dashboard">
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
        <a href="#">
          <i className="fas fa-puzzle-piece" />
          <div className="title-bdb">Change password</div>
        </a>
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
    <div className="cards-bdb">
      <div className="card-bdb">
        <div className="card-content-bdb">
          <div className="number-bdb">67</div>
          <div className="card-name-bdb">Lorem</div>
        </div>
        <div className="icon-box-bdb">
          <i className="fas fa-briefcase-medical" />
        </div>
      </div>
      <div className="card-bdb">
        <div className="card-content-bdb">
          <div className="number-bdb">105</div>
          <div className="card-name-bdb">Ipsum</div>
        </div>
        <div className="icon-box-bdb">
          <i className="fas fa-briefcase-medical" />
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
    </div>
 
</div>
</div>

    </>
  )
}