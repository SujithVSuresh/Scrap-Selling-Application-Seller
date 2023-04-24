
import axios from "axios";
import * as SecureStore from 'expo-secure-store';

import { USER_LOGIN_REQUEST,
     USER_LOGIN_SUCCESS,
     USER_LOGIN_FAIL,
     USER_LOGOUT,
     USER_REGISTER_REQUEST,
     USER_REGISTER_SUCCESS,
     USER_REGISTER_FAIL
      } from "../constants/userConstants";




export const login = (phone, password) => async (dispatch) => {
    try{
        dispatch({
            type: USER_LOGIN_REQUEST
        })
        const config = {
            headers:{
                'Content-type':'application/json'
            }
        }
        console.log("login")
        const {data} = await axios.post(
            'https://scrap-selling-app-server.onrender.com/api/login/',
            {'username':phone, 'password':password},
            config
        )
        console.log("userData", data)
        dispatch({
            type:USER_LOGIN_SUCCESS,
            payload:data
        }) 
        
        await SecureStore.setItemAsync("userInfoSecureStore", JSON.stringify(data));

    }catch(error){
        dispatch({
            
            type:USER_LOGIN_FAIL,
            payload:error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
        })
    }
}

export const logout = () => async (dispatch) => {
    await SecureStore.deleteItemAsync("userInfoSecureStore")
    dispatch({type:USER_LOGOUT})
}

export const register = (name, phoneNumber, password) => async (dispatch) => {
    try{
        dispatch({
            type: USER_REGISTER_REQUEST
        })
        const config = {
            headers:{
                'Content-type':'application/json'
            }
        }
        const {data} = await axios.post(
            'https://scrap-selling-app-server.onrender.com/api/register/user/',
            {'username':phoneNumber, 'name':name, 'password':password},
            config
        )
        dispatch({
            type:USER_REGISTER_SUCCESS,
            payload:data
        }) 

        dispatch({
            type:USER_LOGIN_SUCCESS,
            payload:data
        }) 

        await SecureStore.setItemAsync("userInfoSecureStore", JSON.stringify(data));

    }catch(error){
        dispatch({
            type:USER_REGISTER_FAIL,
            payload:error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
        })
    }
}