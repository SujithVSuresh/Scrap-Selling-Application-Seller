import { SELLREQUESTS_ORDER_REVIEW_REQUEST,
    SELLREQUESTS_ORDER_REVIEW_SUCCESS,
     SELLREQUESTS_ORDER_REVIEW_FAIL,
    SELLREQUESTS_ADD_SELECTED_ADDRESS,
SELLREQUESTS_ADD_SELECTED_ITEM,
SELLREQUESTS_CREATE_REQUEST,
SELLREQUESTS_CREATE_SUCCESS,
SELLREQUESTS_CREATE_FAIL,
SELLREQUESTS_GET_ALL_ADDRESSES_REQUEST,
SELLREQUESTS_GET_ALL_ADDRESSES_SUCCESS,
SELLREQUESTS_GET_ALL_ADDRESSES_FAIL,
SELLREQUESTS_GET_ALL_ORDERS_REQUEST,
SELLREQUESTS_GET_ALL_ORDERS_SUCCESS,
SELLREQUESTS_GET_ALL_ORDERS_FAIL,
SELLREQUESTS_CREATE_ORDER_REVIEW_REQUEST,
SELLREQUESTS_CREATE_ORDER_REVIEW_SUCCESS,
SELLREQUESTS_CREATE_ORDER_REVIEW_FAIL,
SELLREQUESTS_DELETE_ORDER_REVIEW_REQUEST,
SELLREQUESTS_DELETE_ORDER_REVIEW_SUCCESS,
SELLREQUESTS_DELETE_ORDER_REVIEW_FAIL,
SELLREQUESTS_CANCEL_REQUEST,
SELLREQUESTS_CANCEL_SUCCESS,
SELLREQUESTS_CANCEL_FAIL,
SELLREQUESTS_CREATE_ADDRESSES_REQUEST,
SELLREQUESTS_CREATE_ADDRESSES_SUCCESS,
SELLREQUESTS_CREATE_ADDRESSES_FAIL } from "../constants/sellRequestsConstants";


     export const reviewListReducer = (state = {reviews:[], loading:true}, action) => {
        switch(action.type){
            case SELLREQUESTS_ORDER_REVIEW_REQUEST:
                return {...state, loading:true}
    
            case SELLREQUESTS_ORDER_REVIEW_SUCCESS:
                return {...state, loading:false, reviews: action.payload}  
                
            case SELLREQUESTS_ORDER_REVIEW_FAIL:
                return {...state, loading:false, error:action.payload}     
                
            default:
                return state    
        }
    
    }
    
    
    export const createSellRequestReducer = (state = {addedSellRequest:{}, items:[], pickupaddress:{}}, action) => {
        switch(action.type){
            case SELLREQUESTS_CREATE_REQUEST:
                return {...state, loading:true}
    
            case SELLREQUESTS_CREATE_SUCCESS:
                return {...state, loading:false, addedSellRequest: action.payload}  
                
            case SELLREQUESTS_CREATE_FAIL:
                return {...state, loading:false, error:action.payload}  
                
            case SELLREQUESTS_ADD_SELECTED_ITEM:
                const existItem = state.items.includes(action.payload)

                if (existItem === false){
                    return{
                        ...state,
                        items: [...state.items, action.payload]
                    }
                }else{
                    return {
                        ...state,
                        items:state.items.filter((arrayData) => (
                            arrayData !== action.payload
                        ))

                    }
                }

            case SELLREQUESTS_ADD_SELECTED_ADDRESS:
                return{
                    ...state,
                    pickupaddress:{...action.payload}
                    }    
                
            default:
                return state    
        }
    
    }


    export const allAddressesReducer = (state = {addresses:[], loading:true}, action) => {
        switch(action.type){
            case SELLREQUESTS_GET_ALL_ADDRESSES_REQUEST:
                return {...state, loading:true}
    
            case SELLREQUESTS_GET_ALL_ADDRESSES_SUCCESS:
                return {...state, loading:false, addresses: action.payload}  
                
            case SELLREQUESTS_GET_ALL_ADDRESSES_FAIL:
                return {...state, loading:false, error:action.payload}     
                
            default:
                return state    
        }
    
    }


    export const allSellRequestOrderReducer = (state = {orders:[], loading:true}, action) => {
        switch(action.type){
            case SELLREQUESTS_GET_ALL_ORDERS_REQUEST:
                return {...state, loading:true}
    
            case SELLREQUESTS_GET_ALL_ORDERS_SUCCESS:
                return {...state, loading:false, orders: action.payload}  
                
            case SELLREQUESTS_GET_ALL_ORDERS_FAIL:
                return {...state, loading:false, error:action.payload}     
                
            default:
                return state    
        }
    
    }


    export const createOrderReviewReducer = (state = {review:{}}, action) => {
        switch(action.type){
            case SELLREQUESTS_CREATE_ORDER_REVIEW_REQUEST:
                return {...state, loading:true}
    
            case SELLREQUESTS_CREATE_ORDER_REVIEW_SUCCESS:
                return {...state, loading:false, review: action.payload}  
                
            case SELLREQUESTS_CREATE_ORDER_REVIEW_FAIL:
                return {...state, loading:false, error:action.payload}     
                
            default:
                return state    
        }
    
    } 
    
    export const deleteOrderReviewReducer = (state = {review:{}}, action) => {
        switch(action.type){
            case SELLREQUESTS_DELETE_ORDER_REVIEW_REQUEST:
                return {...state, loading:true}
    
            case SELLREQUESTS_DELETE_ORDER_REVIEW_SUCCESS:
                return {...state, loading:false, review: action.payload}  
                
            case SELLREQUESTS_DELETE_ORDER_REVIEW_FAIL:
                return {...state, loading:false, error:action.payload}     
                
            default:
                return state    
        }
    
    }
    
    
    export const cancelSellRequestReducer = (state = {order:{}}, action) => {
        switch(action.type){
            case SELLREQUESTS_CANCEL_REQUEST:
                return {...state, loading:true}
    
            case SELLREQUESTS_CANCEL_SUCCESS:
                return {...state, loading:false, order: action.payload}  
                
            case SELLREQUESTS_CANCEL_FAIL:
                return {...state, loading:false, error:action.payload}     
                
            default:
                return state    
        }
    
    }

    export const createAddressReducer = (state = {address:{}}, action) => {
        switch(action.type){
            case SELLREQUESTS_CREATE_ADDRESSES_REQUEST:
                return {...state, loading:true}
    
            case SELLREQUESTS_CREATE_ADDRESSES_SUCCESS:
                return {...state, loading:false, address: action.payload}  
                
            case SELLREQUESTS_CREATE_ADDRESSES_FAIL:
                return {...state, loading:false, error:action.payload}     
                
            default:
                return state    
        }
    
    }