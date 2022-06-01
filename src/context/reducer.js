import {
  GET_SELLERS_BEGIN,
  GET_SELLERS_SUCCESS,
  GET_SELLERS_ERROR, DATA_FROM_SEARCH, ADD_TO_CART,GET_USER } from "./actions"

  import {
    GET_PRODUCTID_BEGIN,
    GET_PRODUCTID_SUCCESS,
    GET_PRODUCTID_ERROR,
  } from "./actions";



export const reducer = (state, action) => {
  switch (action.type) {
    case DATA_FROM_SEARCH:
      return {
        ...state,
        ...action.payload,
      };
      // case GET_USER:
      //   return {
      //     ...state,
      //     user:action.payload,
      //   }
    default:
      return state;
  }
};


    // const addToLocalStorage = (state, action)=>{
    // localStorage.setItem("cart", (Number(state.cart) + Number(action.payload.quantity)))
    //     localStorage.setItem("cartAmount",(Number(state.cartAmount) + (Number(action.payload.price )* Number(action.payload.quantity))))
    //   }




 const sellers_reducer = (state, action) => {
  if (action.type === GET_SELLERS_BEGIN) {
    return { ...state, products_loading: true };
  }
  if (action.type === GET_SELLERS_SUCCESS) {
    const featured_products = action.payload.filter(
      (product) => product.featured === true
    );
    return {
      ...state,
      products_loading: false,
      products: action.payload,
      featured_products,
    };
  }
  if (action.type === GET_SELLERS_ERROR) {
    return { ...state, sellers_loading: false, sellers_error: true };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default sellers_reducer;



export const ProductIdreducer = (state, action) => {
  if (action.type === GET_PRODUCTID_BEGIN) {
    return { ...state, productid_loading: true };
  }
  if (action.type === GET_PRODUCTID_SUCCESS) {
    const featured_productid = action.payload.filter(
      (product) => product.featured === true
    );
    return {
      ...state,
      productid_loading: false,
      productsid: action.payload,
      featured_productid,
    };
  }
  if (action.type === GET_PRODUCTID_ERROR) {
    return { ...state, productid_loading: false, productid_error: true };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};
