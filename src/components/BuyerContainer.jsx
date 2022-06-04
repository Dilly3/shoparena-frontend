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
        <a href="#">
          <i className="fas fa-th-large" />
          <div className="title-bdb">Dashboard</div>
        </a>
      </li>
      <li>
        <Link to="/buyer/profile">
          <i className="fas fa-user" />
          <div className="title-bdb">Profile</div>
        </Link>
      </li>
      <li>
        <a href="#">
          <i className="fas fa-archive" />
          <div className="title-bdb">Orders</div>
        </a>
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
    <div className="tables-bdb">
      <div className="dashboard-table-bdb">
        <div className="heading-bdb">
          <h2>Order Overview</h2>
          <a href="#" className="btn-bdb">View All</a>
        </div>
        <table className="table-head-bdb">
          <thead>
            <tr><td>Name</td>
              <td>Product</td>
              <td>Price</td>
              <td>Action</td>
            </tr></thead>
          <tbody>
            <tr>
              <td>Oreva Ansel</td>
              <td>Television</td>
              <td>$4,000</td>
              <td>
                <i className="far fa-eye" />
                <i className="far fa-edit" />
                <i className="far fa-trash-alt" />
              </td>
            </tr>
            <tr>
              <td>Oluchi Tiyan</td>
              <td>Drapes</td>
              <td>$2,000</td>
              <td>
                <i className="far fa-eye" />
                <i className="far fa-edit" />
                <i className="far fa-trash-alt" />
              </td>
            </tr>
            <tr>
              <td>Chuks Okoro</td>
              <td>Toothpick</td>
              <td>$1</td>
              <td>
                <i className="far fa-eye" />
                <i className="far fa-edit" />
                <i className="far fa-trash-alt" />
              </td>
            </tr>
            <tr>
              <td>Victor Ihemadu</td>
              <td>Main.go</td>
              <td>$20</td>
              <td>
                <i className="far fa-eye" />
                <i className="far fa-edit" />
                <i className="far fa-trash-alt" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
     {/* <div class="second-dashboard">
          <div class="heading">
              <h2>Buyer records</h2>
              <a href="#" class="btn">View All</a>
          </div>
          <table class="visiting">
              <thead>
                  <td>Photo</td>
                  <td>Name</td>
                  <td>Total Orders</td>
                  <td>Details</td>
              </thead>
              <tbody>
                  <tr>
                      <td>
                          <div class="img-box-small">
                              <img src="./images/cv__29__generated.jpg" alt="">
                          </div>
                      </td>
                      <td>Gbenga</td>
                      <td>11</td>
                      <td><i class="far fa-eye"></i></td>
                  </tr>
                  <tr>
                      <td>
                          <div class="img-box-small">
                              <img src="./images/cv__29__generated.jpg" alt="">
                          </div>
                      </td>
                      <td>Cecelia</td>
                      <td>24</td>
                      <td><i class="far fa-eye"></i></td>
                  </tr>
              </tbody>
          </table>
      </div> */}
</div>
</div>
</div>
    </>
  )
}
