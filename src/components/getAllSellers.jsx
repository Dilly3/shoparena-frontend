import React from "react"
import { Link } from "react-router-dom";

const Seller = ({id,Rating,Product,Order})=>{
    return (
      <Wrapper>
        <div key={id}>
          <Link to={`/sellers/${id}`}>
            <FaSearch />
          </Link>
        </div>
        <footer>
          <h5>{Product}</h5>
          <h5>{Order}</h5>
          <h5>{Rating}</h5>
          <p>{formatPrice(price)}</p>
        </footer>
      </Wrapper>
    );
}
export default Seller