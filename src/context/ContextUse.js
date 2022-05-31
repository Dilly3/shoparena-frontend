import React,{useContext, createContext, useReducer} from 'react'
import {reducer} from "./reducer"
import {DATA_FROM_SEARCH,ADD_TO_CART } from "./actions"

const cartFromLocal = localStorage.getItem("cart")
const cartAmountFromLocal = localStorage.getItem("cartAmount")

const initialState = {
    category:"",
    lowerPrice:"",
    upperPrice:"",
    sort:"",
    cart: cartFromLocal || 0,
    cartAmount: cartAmountFromLocal || 0
    
    }
    const context = createContext()

const ContextUse = ({children}) => {
 
    const [state, dispatch] = useReducer(reducer, initialState)
console.log(state)

    const handleSearch = (data)=>{
dispatch({type: DATA_FROM_SEARCH, payload:{...data}})
    }

    const addToCart = (data)=>{
      dispatch({type:ADD_TO_CART, payload:{...data}})
      // addToLocalStorage()
    }



    
  return (
  <context.Provider value = {{...state,handleSearch,addToCart}}>
{children}
  </context.Provider>
  )
}

export const useAppContext = ()=>{
return useContext(context)
}

export default ContextUse