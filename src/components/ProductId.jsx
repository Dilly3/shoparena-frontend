import React from "react";
import { Link } from "react-router-dom";

function ProductId({ id, Title, Category }) {
  return (
    <>
      <div key="Id">
        <Link to="/">Home</Link>
        <h1>{id}</h1>
        <h4>{Category}</h4>
        <h4>{Title}</h4>
      </div>
    </>
  );
}
export default ProductId;
