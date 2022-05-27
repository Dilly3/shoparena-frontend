import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Login from "./pages/Login"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContextUse from "./context/ContextUse"
import Register from "./pages/Register";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
   <ContextUse> 
   <Router>
     <Routes>
     <Route exact path="/" element={<App/>}></Route>
      <Route exact path="/login" element={<Login/>}></Route>
      <Route exact path="/register" element={<Register/>}></Route>
     </Routes>
  </Router>
  </ContextUse>
  </React.StrictMode>
);


