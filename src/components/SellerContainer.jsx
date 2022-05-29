import React from 'react'




export default function SellerContainer() {
  return (
    <>
{/* START CONTAINER */}
<div className="page-container row-fluid">
  {/* SIDEBAR - START */}
  <div className="page-sidebar ">
    {/* MAIN MENU - START */}
    <div className="page-sidebar-wrapper" id="main-menu-wrapper"> 
      {/* USER INFO - START */}
      <div className="profile-info row">
        <div className="profile-image col-lg-4 col-md-4 col-4">
          <a href="ui-profile.html">
            <img src="data/profile/profile-ecommerce.jpg" className="img-fluid rounded-circle" />
          </a>
        </div>
        <div className="profile-details col-lg-8 col-md-8 col-8">
          <h3>
            <a href="ui-profile.html">Seller Name</a>
            {/* Available statuses: online, idle, busy, away and offline */}
            <span className="profile-status online" />
          </h3>
          <p className="profile-title">Store Manager</p>
        </div>
      </div>
      {/* USER INFO - END */}
      <ul className="wraplist">	
        <li className="open"> 
          <a href="index-ecommerce.html">
            <i className="fa fa-dashboard" />
            <span className="title">Dashboard</span>
          </a>
        </li>
        <li className> 
          <a href="javascript:;">
            <i className="fa fa-cubes" />
            <span className="title">Products</span>
            <span className="arrow " />
          </a>
          <ul className="sub-menu">
            <li>
              <a className href="eco-products.html">All Products</a>
            </li>
            <li>
              <a className href="eco-product-add.html">Add Product</a>
            </li>
            <li>
              <a className href="eco-product-edit.html">Edit Product</a>
            </li>
          </ul>
        </li>
          
        <li className> 
          <a href="javascript:;">
            <i className="fa fa-shopping-cart" />
            <span className="title">Orders</span>
            <span className="arrow " />
          </a>
          <ul className="sub-menu">
            <li>
              <a className href="eco-orders.html">All Orders</a>
            </li>
          </ul>
        </li>
    
        <li className> 
          <a href="javascript:;">
            <i className="fa fa-sitemap" />
            <span className="title">Product Categories</span>
            <span className="arrow " />
          </a>
          <ul className="sub-menu">
            <li>
              <a className href="eco-categories.html">Product Categories</a>
            </li>
            <li>
              <a className href="eco-category-add.html">Add Product Category</a>
            </li>
            <li>
              <a className href="eco-category-edit.html">Edit Product Category</a>
            </li>
          </ul>
        </li>
       
      </ul>
    </div>
    {/* MAIN MENU - END */}
    <div className="project-info">
      <div className="block1">
        <div className="data">
          <span className="title">Orders</span>
          <span className="total">545</span>
        </div>
        <div className="graph">
          <span className="sidebar_orders">...</span>
        </div>
      </div>
      <div className="block2">
        <div className="data">
          <span className="title">Customers</span>
          <span className="total">3146</span>
        </div>
        <div className="graph">
          <span className="sidebar_visitors">...</span>
        </div>
      </div>
    </div>
  </div>
  {/*  SIDEBAR - END */}
  {/* START CONTENT */}
  <section id="main-content" className=" ">
    <section className="wrapper main-wrapper" style={{}}>
      <div className="col-xl-12 col-lg-12 col-md-12 col-12">
        <div className="page-title">
          <div className="float-left">
            <h1 className="title">SELLER DASHBOARD</h1>                          </div>
        </div>
      </div>
      <div className="clearfix" />
      <div className="col-lg-12 col-md-12 col-12">
        <section className="box nobox">
          <div className="content-body">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-12">
                <div className="r1_graph1 db_box db_box_large">
                  <span className="bold">New Orders</span>
                  <span className="float-right"><small>BAG IMAGE</small></span>
                  <div className="clearfix" />
                  <span className="db_dynamicbar">ORDER NUMBER</span>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className="r1_graph2 db_box db_box_large">
                  <span className="bold">Total Quantity Sold</span>
                  <span className="float-right"><small>SOLD IMAGE</small></span>
                  <div className="clearfix" />
                  <span className="db_linesparkline">NUM QUANTITY SOLD</span>
                </div>
              </div>
              <div className="col-lg-4 hidden-sm col-md-12 col-12">
                <div className="r1_graph1 db_box db_box_large">
                  <span className="bold">Total Quantity Remaining</span>
                  <span className="float-right"><small>REMAINING</small></span>
                  <div className="clearfix" />
                  <span className="db_compositebar">NUM QUANTITY REMAINING</span>
                </div>
              </div>
            </div> {/* End .row */}    
            <div className="row">
              <div className="col-lg-12 col-md-12 col-12">
                <div className="r1_maingraph db_box">
                  <span className="float-left">
                    <i className="icon-purple fa fa-square icon-xs" />&nbsp;<small>Page Views</small>
                    &nbsp; &nbsp;<i className="fa fa-square icon-xs icon-primary" />&nbsp;
                    <small>Unique Visitors</small>
                  </span>
                  <div id="db_morris_bar_graph" style={{height: 'auto', width: '100%'}} />
                </div>
              </div>
            </div> {/* End .row */}
          </div>
        </section></div>
      <div className="row margin-0">
        <div className="col-lg-4 col-md-12 col-12">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-12">
              <section className="box ">
                <header className="panel_header">
                  <h2 className="title float-left">New Users</h2>
                  <div className="actions panel_actions float-right">
                    <i className="box_toggle fa fa-chevron-down" />
                    <i className="box_setting fa fa-cog" data-toggle="modal" href="#section-settings" />
                    <i className="box_close fa fa-times" />
                  </div>
                </header>
                <div className="content-body">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th style={{width: '60%'}}>Name</th>
                        <th style={{width: '30%'}}>Progress</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Harry P.</td>
                        <td><span className="playlist_song2">...</span></td>
                      </tr>
                      <tr>
                        <td>Will Mark</td>
                        <td><span className="playlist_song3">...</span></td>
                      </tr>
                      <tr>
                        <td>Jason D.</td>
                        <td><span className="playlist_song4">...</span></td>
                      </tr>
                      <tr>
                        <td>Nik P.</td>
                        <td><span className="playlist_song6">...</span></td>
                      </tr>
                      <tr>
                        <td>Kate Wilson</td>
                        <td><span className="playlist_song7">...</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 col-12">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-12">
              <section className="box ">
                <header className="panel_header">
                  <h2 className="title float-left">New Vendors</h2>
                  <div className="actions panel_actions float-right">
                    <i className="box_toggle fa fa-chevron-down" />
                    <i className="box_setting fa fa-cog" data-toggle="modal" href="#section-settings" />
                    <i className="box_close fa fa-times" />
                  </div>
                </header>
                <div className="content-body">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th style={{width: '60%'}}>Name</th>
                        <th style={{width: '30%'}}>Progress</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>John Doug</td>
                        <td><span className="playlist_song1">...</span></td>
                      </tr>
                      <tr>
                        <td>Harry P.</td>
                        <td><span className="playlist_song2">...</span></td>
                      </tr>
                      <tr>
                        <td>Clarke M.</td>
                        <td><span className="playlist_song5">...</span></td>
                      </tr>
                      <tr>
                        <td>Nik P.</td>
                        <td><span className="playlist_song6">...</span></td>
                      </tr>
                      <tr>
                        <td>Kate Wilson</td>
                        <td><span className="playlist_song7">...</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 col-12">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-12">
              <section className="box ">
                <header className="panel_header">
                  <h2 className="title float-left">New Customers</h2>
                  <div className="actions panel_actions float-right">
                    <i className="box_toggle fa fa-chevron-down" />
                    <i className="box_setting fa fa-cog" data-toggle="modal" href="#section-settings" />
                    <i className="box_close fa fa-times" />
                  </div>
                </header>
                <div className="content-body">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th style={{width: '60%'}}>Name</th>
                        <th style={{width: '30%'}}>Progress</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Harry P.</td>
                        <td><span className="playlist_song2">...</span></td>
                      </tr>
                      <tr>
                        <td>Will Mark</td>
                        <td><span className="playlist_song3">...</span></td>
                      </tr>
                      <tr>
                        <td>Jason D.</td>
                        <td><span className="playlist_song4">...</span></td>
                      </tr>
                      <tr>
                        <td>Clarke M.</td>
                        <td><span className="playlist_song5">...</span></td>
                      </tr>
                      <tr>
                        <td>Nik P.</td>
                        <td><span className="playlist_song6">...</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
  {/* END CONTENT */}
  <div className="page-chatapi hideit">
    <div className="search-bar">
      <input type="text" placeholder="Search" className="form-control" />
    </div>
    <div className="chat-wrapper">
      <h4 className="group-head">Groups</h4>
      <ul className="group-list list-unstyled">
        <li className="group-row">
          <div className="group-status available">
            <i className="fa fa-circle" />
          </div>
          <div className="group-info">
            <h4><a href="#">Work</a></h4>
          </div>
        </li>
        <li className="group-row">
          <div className="group-status away">
            <i className="fa fa-circle" />
          </div>
          <div className="group-info">
            <h4><a href="#">Friends</a></h4>
          </div>
        </li>
      </ul>
      <h4 className="group-head">Favourites</h4>
      <ul className="contact-list">
        <li className="user-row" id="chat_user_1" data-user-id={1}>
          <div className="user-img">
            <a href="#"><img src="data/profile/avatar-1.png" alt /></a>
          </div>
          <div className="user-info">
            <h4><a href="#">Clarine Vassar</a></h4>
            <span className="status available" data-status="available"> Available</span>
          </div>
          <div className="user-status available">
            <i className="fa fa-circle" />
          </div>
        </li>
        <li className="user-row" id="chat_user_2" data-user-id={2}>
          <div className="user-img">
            <a href="#"><img src="data/profile/avatar-2.png" alt /></a>
          </div>
          <div className="user-info">
            <h4><a href="#">Brooks Latshaw</a></h4>
            <span className="status away" data-status="away"> Away</span>
          </div>
          <div className="user-status away">
            <i className="fa fa-circle" />
          </div>
        </li>
        <li className="user-row" id="chat_user_3" data-user-id={3}>
          <div className="user-img">
            <a href="#"><img src="data/profile/avatar-3.png" alt /></a>
          </div>
          <div className="user-info">
            <h4><a href="#">Clementina Brodeur</a></h4>
            <span className="status busy" data-status="busy"> Busy</span>
          </div>
          <div className="user-status busy">
            <i className="fa fa-circle" />
          </div>
        </li>
      </ul>
      <h4 className="group-head">More Contacts</h4>
      <ul className="contact-list">
        <li className="user-row" id="chat_user_4" data-user-id={4}>
          <div className="user-img">
            <a href="#"><img src="data/profile/avatar-4.png" alt /></a>
          </div>
          <div className="user-info">
            <h4><a href="#">Carri Busey</a></h4>
            <span className="status offline" data-status="offline"> Offline</span>
          </div>
          <div className="user-status offline">
            <i className="fa fa-circle" />
          </div>
        </li>
        <li className="user-row" id="chat_user_5" data-user-id={5}>
          <div className="user-img">
            <a href="#"><img src="data/profile/avatar-5.png" alt /></a>
          </div>
          <div className="user-info">
            <h4><a href="#">Melissa Dock</a></h4>
            <span className="status offline" data-status="offline"> Offline</span>
          </div>
          <div className="user-status offline">
            <i className="fa fa-circle" />
          </div>
        </li>
        <li className="user-row" id="chat_user_6" data-user-id={6}>
          <div className="user-img">
            <a href="#"><img src="data/profile/avatar-1.png" alt /></a>
          </div>
          <div className="user-info">
            <h4><a href="#">Verdell Rea</a></h4>
            <span className="status available" data-status="available"> Available</span>
          </div>
          <div className="user-status available">
            <i className="fa fa-circle" />
          </div>
        </li>
        <li className="user-row" id="chat_user_7" data-user-id={7}>
          <div className="user-img">
            <a href="#"><img src="data/profile/avatar-2.png" alt /></a>
          </div>
          <div className="user-info">
            <h4><a href="#">Linette Lheureux</a></h4>
            <span className="status busy" data-status="busy"> Busy</span>
          </div>
          <div className="user-status busy">
            <i className="fa fa-circle" />
          </div>
        </li>
        <li className="user-row" id="chat_user_8" data-user-id={8}>
          <div className="user-img">
            <a href="#"><img src="data/profile/avatar-3.png" alt /></a>
          </div>
          <div className="user-info">
            <h4><a href="#">Araceli Boatright</a></h4>
            <span className="status away" data-status="away"> Away</span>
          </div>
          <div className="user-status away">
            <i className="fa fa-circle" />
          </div>
        </li>
        <li className="user-row" id="chat_user_9" data-user-id={9}>
          <div className="user-img">
            <a href="#"><img src="data/profile/avatar-4.png" alt /></a>
          </div>
          <div className="user-info">
            <h4><a href="#">Clay Peskin</a></h4>
            <span className="status busy" data-status="busy"> Busy</span>
          </div>
          <div className="user-status busy">
            <i className="fa fa-circle" />
          </div>
        </li>
        <li className="user-row" id="chat_user_10" data-user-id={10}>
          <div className="user-img">
            <a href="#"><img src="data/profile/avatar-5.png" alt /></a>
          </div>
          <div className="user-info">
            <h4><a href="#">Loni Tindall</a></h4>
            <span className="status away" data-status="away"> Away</span>
          </div>
          <div className="user-status away">
            <i className="fa fa-circle" />
          </div>
        </li>
        <li className="user-row" id="chat_user_11" data-user-id={11}>
          <div className="user-img">
            <a href="#"><img src="data/profile/avatar-1.png" alt /></a>
          </div>
          <div className="user-info">
            <h4><a href="#">Tanisha Kimbro</a></h4>
            <span className="status idle" data-status="idle"> Idle</span>
          </div>
          <div className="user-status idle">
            <i className="fa fa-circle" />
          </div>
        </li>
        <li className="user-row" id="chat_user_12" data-user-id={12}>
          <div className="user-img">
            <a href="#"><img src="data/profile/avatar-2.png" alt /></a>
          </div>
          <div className="user-info">
            <h4><a href="#">Jovita Tisdale</a></h4>
            <span className="status idle" data-status="idle"> Idle</span>
          </div>
          <div className="user-status idle">
            <i className="fa fa-circle" />
          </div>
        </li>
      </ul>
    </div>
  </div>
  <div className="chatapi-windows ">
  </div>  </div>
{/* END CONTAINER */}

    
    </>
  )
}
