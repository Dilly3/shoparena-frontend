import React from "react";
import { Link } from "react-router-dom";
import "./pageNotFound.css";

const NotFound = () => (
  <>
    <h2 className="error"> Error 404</h2>
    <div className="pageNotFound">
      <div>
        <span>It Appears Something Went Wrong...</span>
        <Link to="/" className="home">
          Go Home
        </Link>
      </div>
    </div>
  </>
);

export default NotFound;
