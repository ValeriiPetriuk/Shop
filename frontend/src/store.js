import { createStore } from 'redux';
import {combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'
import {productListReducers, productDetailsReducers, productDeleteReducer, productCreateReducer, productUpdateReducer, productReviewCreateReducer, productTopRatedReducer} from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducers';
import { userLoginReducer, 
    userRegisterReducer, 
    userDetailsReducer,
    userUpdateProfileReducer, 
    userListReduces, 
    userDeleteReducer,
    userUpdateReducer,
} from './reducers/userReduces';
import { orderDetailsReducers, orderListMyReducers, orderPayReducers, orderReducers, orderListReducers, orderDeliverReducers } from './reducers/orderReduces';

const reducer = combineReducers({
    productList: productListReducers,
    productDetails: productDetailsReducers,
    productDelete: productDeleteReducer,
    productCreate: productCreateReducer,
    productUpdate: productUpdateReducer,
    productReviewCreate: productReviewCreateReducer,
    productTopRated: productTopRatedReducer,

    cart: cartReducer,  
    userLogin: userLoginReducer, 
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userList: userListReduces,
    userDelete: userDeleteReducer,
    userUpdate: userUpdateReducer,

    orderCreate: orderReducers,
    orderDetails: orderDetailsReducers,
    orderPay: orderPayReducers,
    orderListMy: orderListMyReducers,
    orderList: orderListReducers,   
    orderDeliver: orderDeliverReducers,
})

const CartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

const shippingAddressFromStorage = localStorage.getItem('shippingAdress') ? JSON.parse(localStorage.getItem('shippingAdress')) : {}

const initialState = {
    cart: {cartItems: CartItemsFromStorage, 
        shippingAddress: shippingAddressFromStorage        
    },
    userLogin:{userInfo: userInfoFromStorage},

}

const middleware = [thunk]

export const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

