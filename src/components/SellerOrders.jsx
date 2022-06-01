import React, {useState, useEffect} from 'react'
import axios from '../axios'

export default function SellerOrdersComponent() {



    return(

        <section id="main-content" className=" ">
        <div className="dashboard-table">
    <div className="heading">
      <h2>Order Overview</h2>
      <a href="#" className="btn">View All</a>
    </div>
    <table className="table-head">
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
  </section>
    )
}