import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Login from "./pages/Login"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegisterComponent from "./components/Register";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
   <Router>
     <Routes>
     <Route exact path="/" element={<App/>}></Route>
      <Route exact path="/login" element={<Login/>}></Route>
      <Route exact path="/register" element={<RegisterComponent/>}></Route>
     </Routes>
  </Router>
  </React.StrictMode>
);


