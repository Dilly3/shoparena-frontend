import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import {
  GET_SELLERS_BEGIN,
  GET_SELLERS_SUCCESS,
  GET_SELLERS_ERROR,
} from "../actions";
const url = "oja-ecommerce.herokuapp.com/api/v1/sellers";
const initialState = {
  sellers_loading: false,
  sellers_error: false,
  sellers: [],
};

function SellerContext({ children }) {
  const SellerContext = React.createContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchSellers = async (url) => {
    dispatch({ type: GET_SELLERS_BEGIN });
    try {
      const response = await axios.get(url);
      const sellers = await response.data;
      console.log(sellers);
      dispatch({ type: GET_SELLERS_SUCCESS, payload: sellers });
    } catch (error) {
      dispatch({ type: GET_SELLERS_ERROR });
    }
  };

  useEffect(() => {
    fetchSellers(url);
  }, []);

  return (
    <>
      <SellerContext.Provider value={{ ...state, fetchSellers }}>
        {children}
      </SellerContext.Provider>
    </>
  );
}
// make sure use
export const useUserContext = () => {
  return useContext(SellerContext);
};
