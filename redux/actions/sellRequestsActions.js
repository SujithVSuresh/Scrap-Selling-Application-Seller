import axios from "axios";
import { SELLREQUESTS_ORDER_REVIEW_REQUEST,
     SELLREQUESTS_ORDER_REVIEW_SUCCESS,
      SELLREQUESTS_ORDER_REVIEW_FAIL,
      SELLREQUESTS_GET_ALL_ADDRESSES_REQUEST,
      SELLREQUESTS_GET_ALL_ADDRESSES_SUCCESS,
      SELLREQUESTS_GET_ALL_ADDRESSES_FAIL,
    SELLREQUESTS_CREATE_REQUEST,
SELLREQUESTS_CREATE_SUCCESS,
SELLREQUESTS_CREATE_FAIL,
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


export const getAllUserReviews = () => async (dispatch, getState) => {
    try{
        dispatch({
            type: SELLREQUESTS_ORDER_REVIEW_REQUEST
        })
        
        const {
            userLogin: {userInfo},
            } = getState()
    
            const config = {
                headers:{
                    'Content-type':'application/json',
                    Authorization: `Bearer ${userInfo.token}`
                }
            }

        const {data} = await axios.get(
            'https://scrap-selling-app-server.onrender.com/api/user/review/',
            config
        )

        dispatch({
            type:SELLREQUESTS_ORDER_REVIEW_SUCCESS,
            payload:data
        }) 

    }catch(error){
        dispatch({
            
            type:SELLREQUESTS_ORDER_REVIEW_FAIL,
            payload:error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
        })
    }
}


export const getAllAddresses = () => async (dispatch, getState) => {
    try{
        dispatch({
            type: SELLREQUESTS_GET_ALL_ADDRESSES_REQUEST
        })
        
        const {
            userLogin: {userInfo},
            } = getState()
    
            const config = {
                headers:{
                    'Content-type':'application/json',
                    Authorization: `Bearer ${userInfo.token}`
                }
            }

        const {data} = await axios.get(
            'https://scrap-selling-app-server.onrender.com/api/user/pickup-address-management/',
            config
        )

        dispatch({
            type:SELLREQUESTS_GET_ALL_ADDRESSES_SUCCESS,
            payload:data
        }) 

    }catch(error){
        dispatch({
            
            type:SELLREQUESTS_GET_ALL_ADDRESSES_FAIL,
            payload:error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
        })
    }
}


export const createSellRequest = (addressId, items) => async (dispatch, getState) => {
    try{
        console.log("ooi")
        dispatch({
            type: SELLREQUESTS_CREATE_REQUEST
        })
        
        const {
            userLogin: {userInfo},
            } = getState()
    
            const config = {
                headers:{
                    'Content-type':'application/json',
                    Authorization: `Bearer ${userInfo.token}`
                }
            }
            console.log("ooi2")

        const {data} = await axios.post(
            'https://scrap-selling-app-server.onrender.com/api/user/create-sell-request/',
            {'addressId':addressId, 'items':items},
            config
        )
        console.log("ooi3")
        dispatch({
            type:SELLREQUESTS_CREATE_SUCCESS,
            payload:data
        }) 

    }catch(error){
        dispatch({
            type:SELLREQUESTS_CREATE_FAIL,
            payload:error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
        })
    }
}

export const getSellRequestOrders = () => async (dispatch, getState) => {
    try{
        dispatch({
            type: SELLREQUESTS_GET_ALL_ORDERS_REQUEST
        })
        
        const {
            userLogin: {userInfo},
            } = getState()
    
            const config = {
                headers:{
                    'Content-type':'application/json',
                    Authorization: `Bearer ${userInfo.token}`
                }
            }

        const {data} = await axios.get(
            'https://scrap-selling-app-server.onrender.com/api/user/sellrequest-orders/',
            config
        )

        dispatch({
            type:SELLREQUESTS_GET_ALL_ORDERS_SUCCESS,
            payload:data
        }) 

    }catch(error){
        dispatch({
            
            type:SELLREQUESTS_GET_ALL_ORDERS_FAIL,
            payload:error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
        })
    }
}


export const createSellRequestOrderReview = (review, id) => async (dispatch, getState) => {
    console.log("ooi")
    try{
        dispatch({
            type: SELLREQUESTS_CREATE_ORDER_REVIEW_REQUEST
        })
        
        const {
            userLogin: {userInfo},
            allSellRequestOrder: {orders}
            } = getState()
    
            const config = {
                headers:{
                    'Content-type':'application/json',
                    Authorization: `Bearer ${userInfo.token}`
                }
            }
            console.log("ooi2")

        const {data} = await axios.post(
            `https://scrap-selling-app-server.onrender.com/api/user/sellrequest-orders/manage-review/${id}/`,
            {'review':review},
            config
        )
        console.log("ooi3", data)
        dispatch({
            type:SELLREQUESTS_CREATE_ORDER_REVIEW_SUCCESS,
            payload:data
        }) 

        dispatch({
            type:SELLREQUESTS_GET_ALL_ORDERS_SUCCESS,
            payload:orders.map((x, index) => {
       
                if(x.order!==null && x.order.id===data.order){
                    return {...x, order:{...x.order, review:data}}
                }else{
                    return x 
                }
            })
        }) 

        console.log("ooi4")

    }catch(error){
        dispatch({
            type:SELLREQUESTS_CREATE_ORDER_REVIEW_FAIL,
            payload:error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
        })
    }
}

export const deleteSellRequestOrderReview = (id) => async (dispatch, getState) => {
    console.log("ooi")
    try{
        dispatch({
            type: SELLREQUESTS_DELETE_ORDER_REVIEW_REQUEST
        })
        
        const {
            userLogin: {userInfo},
            allSellRequestOrder: {orders}
            } = getState()
    
            const config = {
                headers:{
                    'Content-type':'application/json',
                    Authorization: `Bearer ${userInfo.token}`
                }
            }

            console.log("ooi2")

        const {data} = await axios.delete(
            `https://scrap-selling-app-server.onrender.com/api/user/sellrequest-orders/manage-review/${id}/`,
            config
        )
        console.log("ooi3", data)
        dispatch({
            type:SELLREQUESTS_DELETE_ORDER_REVIEW_SUCCESS,
            payload:data
        }) 

        dispatch({
            type:SELLREQUESTS_GET_ALL_ORDERS_SUCCESS,
            payload:orders.map((x, index) => {
       
                if(x.order!==null && x.order.id===data.order){
                    return {...x, order:{...x.order, review:null}}
                }else{
                    return x 
                }
            })
        }) 

        dispatch({
            type:SELLREQUESTS_CREATE_ORDER_REVIEW_SUCCESS,
            payload:{}
        }) 


        console.log("ooi4")

    }catch(error){
        dispatch({
            type:SELLREQUESTS_DELETE_ORDER_REVIEW_FAIL,
            payload:error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
        })
    }
}


export const cancelSellRequest = (id) => async (dispatch, getState) => {
    console.log("ooi")
    try{
        dispatch({
            type: SELLREQUESTS_CANCEL_REQUEST
        })
        
        const {
            userLogin: {userInfo},
            allSellRequestOrder: {orders}
            } = getState()
    
            const config = {
                headers:{
                    'Content-type':'application/json',
                    Authorization: `Bearer ${userInfo.token}`
                }
            }

            console.log("ooi2")

        const {data} = await axios.put(
            `https://scrap-selling-app-server.onrender.com/api/user/sellrequest-order/cancel/${id}/`,
            {},
            config
        )
        console.log("ooi3", data)
        dispatch({
            type:SELLREQUESTS_CANCEL_SUCCESS,
            payload:data
        }) 

        dispatch({
            type:SELLREQUESTS_GET_ALL_ORDERS_SUCCESS,
            payload:orders.map((x, index) => {
                if(x.id===data.id){
                    return data
                }else{
                    return x
                }
       
                
            })
        }) 

        console.log("ooi4")

    }catch(error){
        dispatch({
            type:SELLREQUESTS_CANCEL_FAIL,
            payload:error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
        })
    }
}


export const createAddress = (saveAs, landmark, houseOrFlatNo, phone, myState, district, city, village, pincode, coordinates) => async (dispatch, getState) => {
    try{
        console.log("ooi")
        dispatch({
            type: SELLREQUESTS_CREATE_ADDRESSES_REQUEST
        })
        
        const {
            userLogin: {userInfo},
            allAddresses: {addresses}
            } = getState()
    
            const config = {
                headers:{
                    'Content-type':'application/json',
                    Authorization: `Bearer ${userInfo.token}`
                }
            }
            console.log("ooi2")

        const {data} = await axios.post(
            'https://scrap-selling-app-server.onrender.com/api/user/pickup-address-management/',
            {'addressName':saveAs, 'landmark':landmark, 'houseOrFlatNo':houseOrFlatNo, 'phoneNumber':phone, 'state':myState, 'district':district, 'city':city, 'village':village, 'postalCode':pincode, 'latitude':coordinates.latitude, 'longitude':coordinates.longitude},
            config
        )
        console.log("ooi3")
        dispatch({
            type:SELLREQUESTS_CREATE_ADDRESSES_SUCCESS,
            payload:data
        }) 

        dispatch({
            type:SELLREQUESTS_GET_ALL_ADDRESSES_SUCCESS,
            payload:[...addresses, data]
        }) 

    }catch(error){
        dispatch({
            type:SELLREQUESTS_CREATE_ADDRESSES_FAIL,
            payload:error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
        })
    }
}