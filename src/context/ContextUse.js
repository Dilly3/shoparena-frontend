import React, {
  useContext,
  createContext,
  useReducer,
  useEffect,
  useState,
useMemo} from "react";
import { reducer } from "./reducer";
import { DATA_FROM_SEARCH, GET_USER } from "./actions";
import axios from "axios";
import instance from "../axios"

// const cartFromLocal = localStorage.getItem("cart");
// const cartAmountFromLocal = localStorage.getItem("cartAmount");

const initialState = {
  category: "",
  lowerPrice: "",
  upperPrice: "",
  sort: ""

};

// const userData = {
// address: "Address",
// email: "Email",
// first_name: "First Name",
// image:"https://www.kindpng.com/picc/m/52-526237_avatar-profile-hd-png-download.png",
// last_name: "Last Name",
// phone_number: "Phone Number"
// }

const userData = {
  address: "",
  email: "",
  first_name: "",
  image:"",
  last_name: "",
  phone_number: ""
  }
const context = createContext();

const ContextUse = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [user, setUser] = useState(userData)
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
      getUser()
      
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
      // console.log(cartQuantity)
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

  const getUser = async ()=>{
    try {
     const response = await instance.get('/getbuyerprofile')
            setUser({...user,...response.data.data})
          } catch (error) {
  console.log(error.response, "this is an error")
          }
  }

  console.log(user)
  
  return (
    <context.Provider value={{ ...state, ...cart, handleSearch, addToCart, user, getUser }}>
      {children}
    </context.Provider>
  );
};

export const useAppContext = () => {
  return useContext(context);
};

export default ContextUse;
