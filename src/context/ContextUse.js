

import React,{useContext, createContext, useReducer} from 'react'
import {reducer} from "./reducer"
import {DATA_FROM_SEARCH} from "./actions"

const initialState = {
    category:"",
    lowerPrice:"",
    upperPrice:"",
    sort:""
    
    }
    const context = createContext()

const ContextUse = ({children}) => {
 
    const [state, dispatch] = useReducer(reducer, initialState)
// console.log(state)

    const handleSearch = (data)=>{
dispatch({type: DATA_FROM_SEARCH, payload:{...data}})
    }
  return (
  <context.Provider value = {{...state,handleSearch }}>
{children}
  </context.Provider>
  )
}

export const useAppContext = ()=>{
return useContext(context)
}

export default ContextUse