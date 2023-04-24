import { createStore, combineReducers, applyMiddleware} from 'redux';

import thunk from 'redux-thunk'
import { userLoginReducers, userRegisterReducers } from './reducers/userReducers';   
import { reviewListReducer, createAddressReducer, createSellRequestReducer, cancelSellRequestReducer, deleteOrderReviewReducer, allAddressesReducer, allSellRequestOrderReducer, createOrderReviewReducer } from './reducers/sellRequestsReducers';
import { itemsListReducer } from './reducers/itemsReducers';



const rootReducer = combineReducers({
    userLogin:userLoginReducers,
    userRegister:userRegisterReducers,
    itemsList:itemsListReducer,
    reviewList:reviewListReducer,
    createSellRequest:createSellRequestReducer,
    allAddresses:allAddressesReducer,
    allSellRequestOrder:allSellRequestOrderReducer,
    createOrderReview:createOrderReviewReducer,
    deleteOrderReview:deleteOrderReviewReducer,
    cancelSellRequest:cancelSellRequestReducer,
    createAddress:createAddressReducer,
    
  });

  
  const middleware = [thunk]
  export const store = createStore(rootReducer, applyMiddleware(...middleware));