import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <>
    <div className="pageNotFound">
      <div className="pos">
        <p>It Appears Something Went Wrong...</p>
      </div>
      <div className="pos2">
        <Link to="/" class="notfoundbuttn">
          <h3>Go Home</h3>
        </Link>
      </div>
    </div>
  </>
);

export default NotFound;
