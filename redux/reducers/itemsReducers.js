
import { ITEMS_LIST_REQUEST,
    ITEMS_LIST_SUCCESS,
    ITEMS_LIST_FAIL
     } from "../constants/itemsConstants";


export const itemsListReducer = (state = {categories:[], loading:true}, action) => {
    switch(action.type){
        case ITEMS_LIST_REQUEST:
            return {...state, loading:true}

        case ITEMS_LIST_SUCCESS:
            return {...state, loading:false, categories: action.payload}  
            
        case ITEMS_LIST_FAIL:
            return {...state, loading:false, error:action.payload}     
            
        default:
            return state    
    }

}