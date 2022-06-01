import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Login from "./pages/Login"
import SellerLogin from "./pages/SellerLogin"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContextUse from "./context/ContextUse"
import RegisterComponent from "./pages/Register";
import ResetPassword from "./pages/ResetPassword"
import SellerRegisterComponent from "./pages/SellerRegister"
import Sellerforgotpassword from "./components/Sellerforgotpassword"
import Sellerupdatepassword from "./components/Sellerupdatepassword"
import Buyerforgotpassword from "./components/Buyerforgotpassword"
import Buyerupdatepassword from "./components/Buyerupdatepassword";





const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
   <ContextUse> 
   <Router>
     <Routes>
     <Route exact path="/" element={<App/>}></Route>
      <Route exact path="/buyer/login" element={<Login/>}></Route>
      <Route exact path="/seller/login" element={<SellerLogin/>}></Route>
      <Route exact path="/buyer/register" element={<RegisterComponent/>}></Route>
      <Route exact path="/seller/register" element={<SellerRegisterComponent/>}></Route>
      <Route exact path="/resetpassword" element={<ResetPassword/>}></Route>
      <Route exact path="/seller/dashboard" element={<ResetPassword/>}></Route>
      <Route exact path="/seller/forgot" element={<Sellerforgotpassword/>}></Route>
      <Route exact path="/seller/reset/:token" element={<Sellerupdatepassword/>}></Route>
      <Route exact path="/buyer/forgot" element={<Buyerforgotpassword/>}></Route>
      <Route exact path="/buyer/reset/:token" element={<Buyerupdatepassword/>}></Route>



     </Routes>
  </Router>
  </ContextUse>
  </React.StrictMode>
);


