import React from 'react'

const ProductId = ({ product }) => {
  return (
    <>
      {product.map((product) => {
        const { Id, Title, Category } = product;
        return (
          <div key="Id">
            <h4>{Id}</h4>
            <h4>{Category}</h4>
            <h4>{Title}</h4>
          </div>
        );
      })}
    </>
  );
};
export default ProductId
