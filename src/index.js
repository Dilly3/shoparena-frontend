import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Login from "./pages/Login";
import SellerLogin from "./pages/SellerLogin";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContextUse from "./context/ContextUse";
import RegisterComponent from "./pages/Register";
import ResetPassword from "./pages/ResetPassword";
import SellerRegisterComponent from "./pages/SellerRegister";
import Sellerforgotpassword from "./components/Sellerforgotpassword";
import Sellerupdatepassword from "./components/Sellerupdatepassword";
import Buyerforgotpassword from "./components/Buyerforgotpassword";
import Buyerupdatepassword from "./components/Buyerupdatepassword";
import SellerDashboard from "./pages/SellerDashboard";
import ViewCart from "./pages/ViewCart";
import Profile from "./components/BuyerProfile";
import SellerProfile from "./components/SellerProfile";
import UpdateBuyerProfile from "./components/UpdateBuyerProfile";
import ProductsBySeller from "./components/ShopProducts"
import ProductId from "./components/ProductId";
import Seller from "./components/getAllSellers";
import NotFound from "./pages/pageNotFound";
import Home from "./pages/Home";
import SellerOrdersComponent from "./pages/SellerOrders";
import DeleteAllSellerProducts from "./components/DeleteAllSellerProducts/DeleteAllSellerProducts";
import Createproducts from "./components/CreateProducts";
// import ProductsBySell from "./pages/ProductsBySeller";
import UpdateSellerProfile from "./components/UpdateSellerProfile";
import BuyerDashboard from "./pages/BuyerDashboard";
import SellerShop from "./pages/SellerShop";
import BuyerOrdersComponent from "./pages/BuyerOrders";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextUse>
      <Router>
        <Routes>
          <Route exact path="/" element={<App />}></Route>
          <Route exact path="/viewcart" element={<ViewCart />}></Route>
          <Route exact path="/buyer/login" element={<Login />}></Route>
          <Route exact path="/seller/login" element={<SellerLogin />}></Route>
          <Route exact path="/buyer/logout" element={<App />}></Route>
          <Route exact path="/buyer/register" element={<RegisterComponent />}></Route>
          <Route exact path="/seller/register" element={<SellerRegisterComponent />}></Route>
          <Route exact path="/sellers" element={<Seller />}></Route>
          <Route exact path="/resetpassword" element={<ResetPassword />}></Route>
          <Route exact path="/seller/forgot" element={<Sellerforgotpassword />}></Route>
          <Route exact path="/seller/reset/:token" element={<Sellerupdatepassword />}></Route>
          <Route exact path="/buyer/forgot" element={<Buyerforgotpassword />} ></Route>
          <Route exact path="/buyer/reset/:token" element={<Buyerupdatepassword />}></Route>
          <Route exact path="/seller/dashboard" element={<SellerDashboard />}></Route>
          <Route exact path="/seller/dashboard/orders" element={<SellerOrdersComponent/>}></Route>
          <Route exact path="/buyer/profile" element={<Profile />}></Route>
          <Route exact path="/seller/profile" element={<SellerProfile />} ></Route>
          <Route exact path="/update/buyer/profile" element={<UpdateBuyerProfile />}></Route>
          <Route exact path="/deleteproduct/:id" element={<ProductsBySeller />}></Route>
          <Route exact path="/update/seller/profile" element={<UpdateSellerProfile />}></Route>
          <Route exact path="/productID/:id" element={<ProductId />}></Route>
          {/* <Route exact path = "/seller/productsbyseller" element = {<ProductsBySeller/>} ></Route> */}
          <Route exact path = "/seller/delete-all-products" element = {<DeleteAllSellerProducts/>} ></Route>
          <Route exact path = "/seller/createproducts" element = {<Createproducts/>} ></Route>
          <Route exact path = "/seller/products" element={<ProductsBySeller/>}></Route>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="*" element={<NotFound />}></Route>
          <Route exact path="/buyer/dashboard" element={<BuyerDashboard/>}></Route>
          <Route exact path="/seller/shop/:id" element={<SellerShop/>}></Route>
          <Route exact path="/buyer/dashboard/orders" element={<BuyerOrdersComponent/>}></Route>
          
        </Routes>
      </Router>
    </ContextUse>
  </React.StrictMode>
);