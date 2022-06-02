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
import SellerDashboard from "./pages/SellerDashboard";
import Createproduct from "./components/Createproduct";



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
      <Route exact path="/seller/dashboard" element={<SellerDashboard/>}></Route>
      <Route exact path="/seller/createproduct" element={<Createproduct/>}></Route>
     </Routes>
  </Router>
  </ContextUse>
  </React.StrictMode>
);


