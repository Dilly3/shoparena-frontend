import React from 'react'

export default function CartegoryMenu() {
  return (
    <>
    <div className="col-xl-2 custom-col-2 d-none d-xl-block">
  <div className="cat__menu-wrapper">
    <div className="cat-toggle">
      <button type="button" className="cat-toggle-btn"><i className="fas fa-bars" /> Shop by department</button>
      <div className="cat__menu">
        <nav id="mobile-menu">
          <ul>
            <li>
              <a href="product.html">All Categories <i className="far fa-angle-down" /></a>
              <ul className="mega-menu">
                <li><a href="product.html">Shop</a>
                  <ul className="mega-item">
                    <li><>Fashion</></li>
                    <li><>Electronics</></li>
                    <li><>Health & Beauty</></li>
                    <li><>Phones & Tablets</></li>
                    <li><></></li>
                  </ul>
                </li>
                <li>Product Pages</li>
                  <ul className="mega-item">
                    <li><>Food & Drinks</></li>
                    <li><>Computing</></li>
                    <li><>Baby Products</></li>
                    <li><>Sporting Goods</></li>
                    <li><>Otherst</></li>
                  </ul>
               
              </ul>
            </li>
            <li>
              <a href="product.html">Seller Products
                <span className="cat-label">hot!</span>
              </a>
            </li>
            <li>
              <a href="product.html">Top 10 Offers
                <span className="cat-label green">new!</span>
              </a>
            </li>
            <li>
              <a href="product.html">New Arrivals <i className="far fa-angle-down" /></a>
              <ul className="submenu">
                <li><a href="product.html">Home Appliances</a></li>
                <li><a href="product.html">Technology</a>
                  <ul className="submenu">
                    <li><a href="product.html">Storage Devices</a></li>
                    <li><a href="product.html">Monitors</a></li>
                    <li><a href="product.html">Laptops</a></li>
                  </ul>
                </li>
                <li><a href="product.html">Office Equipments</a></li>
              </ul>
            </li>
            <li><a href="product.html">Phones &amp; Tablets</a></li>
            <li><a href="product.html">Electronics &amp; Digital</a></li>
            <li className="d-laptop-none"><a href="product.html">Fashion &amp; Clothings</a></li>
            <li className="d-laptop-none"><a href="product.html">Jewelry &amp; Watches</a></li>
            <li><a href="product.html">Health &amp; Beauty</a></li>
            <li><a href="product.html">TV &amp; Audio</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</div>

      
    </>
  )
}
