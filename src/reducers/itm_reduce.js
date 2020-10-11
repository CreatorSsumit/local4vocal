import { connect } from "react-redux"

export default function(state={},action){
   

    switch(action.type){
       
        
       
        case 'GET_DETAILS':
            return{...state,show:action.payload}
        case 'GET_VALUE':
                return{...state,updateview:action.payload}
        
    
        default:
            return state
    
    
    
    }
    
    }