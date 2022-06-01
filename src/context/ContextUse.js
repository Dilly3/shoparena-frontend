import React, {
  useContext,
  createContext,
  useReducer,
  useEffect,
  useState,
} from "react";
import { reducer } from "./reducer";
import { DATA_FROM_SEARCH, ADD_TO_CART } from "./actions";
import axios from "axios";

// const cartFromLocal = localStorage.getItem("cart");
// const cartAmountFromLocal = localStorage.getItem("cartAmount");

const initialState = {
  category: "",
  lowerPrice: "",
  upperPrice: "",
  sort: "",


};
const context = createContext();

const ContextUse = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [cart, setCart] = useState({
    cart: 0,
    cartAmount: 0,
    quantity: {},
    alert: 1
  });
  // console.log(state)

  const handleSearch = (data) => {
    dispatch({ type: DATA_FROM_SEARCH, payload: { ...data } });
  };

  const addToCart = () => {
  ViewCart()
  };

  useEffect(() => {
      ViewCart();
  }, []);

  const ViewCart = async () => {
    try {
      const headers = {
        Authorization: `Bearer ${localStorage.token}`,
        "Content-Type": "application/json",
      };
      const resp = await axios.get(
        "https://oja-ecommerce.herokuapp.com/api/v1/viewcart",
        { headers: headers }
      );
      const cartQuantity = resp.data
      console.log(cartQuantity)
         setCart({
      cart: cartQuantity.length,
      cartAmount: cartQuantity.reduce((acc, product) => {
        return acc + product.Price;
      }, 0),
      quantity: cartQuantity,
    });
      // return resp.data;
    } catch (error) {
      console.log(error.response);
    }
  };
  console.log(cart)

  return (
    <context.Provider value={{ ...state, ...cart, handleSearch, addToCart }}>
      {children}
    </context.Provider>
  );
};

export const useAppContext = () => {
  return useContext(context);
};

export default ContextUse;
