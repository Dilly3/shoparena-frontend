


import {DATA_FROM_SEARCH} from "./actions"


export  const reducer = (state, action)=>{
switch (action.type){
    case DATA_FROM_SEARCH: 
    return{
        ...state, ...action.payload
    }
    default: return state
}
}