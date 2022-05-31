import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import { reducer } from "./productIdreducer";
import {
  GET_PRODUCTID_BEGIN,
  GET_PRODUCTID_SUCCESS,
  GET_PRODUCTID_ERROR,
} from "../actions";

const initialState = {
  productid_loading: false,
  productid_error: false,
  productid: [],
};
const url = "https://oja-ecommerce.herokuapp.com/api/v1/product/:id";

const ProductidContext = React.createContext();

export const ProductidProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchProductid = async (url) => {
    dispatch({ type: GET_PRODUCTID_BEGIN });
    try {
      const response = await axios.get(url);
      const products = response.data;
      dispatch({ type: GET_PRODUCTID_SUCCESS, payload: products });
    } catch (error) {
      dispatch({ type: GET_PRODUCTID_ERROR });
    }
  };

  useEffect(() => {
    fetchProductid(url);
  }, []);

  return (
    <ProductidContext.Provider value={{ ...state, fetchProductid }}>
      {children}
    </ProductidContext.Provider>
  );
};
// make sure use
export const useProductidContext = () => {
  return useContext(ProductidContext);
};
