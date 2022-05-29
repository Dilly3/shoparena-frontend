import { DATA_FROM_SEARCH, ADD_TO_CART } from "./actions";
import {
GET_SELLERS_BEGIN,
  GET_SELLERS_SUCCESS,
  GET_SELLERS_ERROR,} from "./actions"

export const reducer = (state, action) => {
  switch (action.type) {
    case DATA_FROM_SEARCH:
      return {
        ...state,
        ...action.payload,
      };
    case ADD_TO_CART:

 addToLocalStorage(state, action)
      return {
        ...state,
        cart: (Number(state.cart) + Number(action.payload.quantity)),
        cartAmount: (Number(state.cartAmount) + (Number(action.payload.price )* Number(action.payload.quantity))),
      };
    default:
      return state;
  }
};





const addToLocalStorage = (state, action)=>{
    localStorage.setItem("cart", (Number(state.cart) + Number(action.payload.quantity)))
        localStorage.setItem("cartAmount",(Number(state.cartAmount) + (Number(action.payload.price )* Number(action.payload.quantity))))
      }



// export  const reducer = (state, action)=>{
// switch (action.type){
//     case DATA_FROM_SEARCH: 
//     return{
//         ...state, ...action.payload
//     }
//     default: return state
// }
// }
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
