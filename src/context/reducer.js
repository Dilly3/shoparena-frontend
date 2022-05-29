import { DATA_FROM_SEARCH, ADD_TO_CART } from "./actions";

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