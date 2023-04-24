import axios from "axios";
import { ITEMS_LIST_REQUEST,
    ITEMS_LIST_SUCCESS,
    ITEMS_LIST_FAIL
     } from "../constants/itemsConstants";


export const getAllItemsList = () => async (dispatch, getState) => {
    try{
        dispatch({
            type: ITEMS_LIST_REQUEST
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
            'https://scrap-selling-app-server.onrender.com/api/category/items/',
            config
        )

        dispatch({
            type:ITEMS_LIST_SUCCESS,
            payload:data
        }) 

    }catch(error){
        dispatch({
            
            type:ITEMS_LIST_FAIL,
            payload:error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
        })
    }
}