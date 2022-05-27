import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Login from "./pages/Login"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContextUse from "./context/ContextUse"
import RegisterComponent from "./pages/Register";
import ResetPassword from "./pages/ResetPassword"



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
   <ContextUse> 
   <Router>
     <Routes>
     <Route exact path="/" element={<App/>}></Route>
      <Route exact path="/login" element={<Login/>}></Route>
      <Route exact path="/register" element={<RegisterComponent/>}></Route>
      <Route exact path="/resetpassword" element={<ResetPassword/>}></Route>
     </Routes>
  </Router>
  </ContextUse>
  </React.StrictMode>
);


