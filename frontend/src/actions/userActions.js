import axios from "axios";
import { USER_LOGIN_SUCCESS, USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGOUT,
        USER_REGISTER_SUCCESS, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_DETAILS_FAIL,  USER_DETAILS_REQUEST, USER_DETAILS_SUCCESS,
        USER_UPDATE_PROFILE_SUCCESS, USER_UPDATE_PROFILE_REQUEST, USER_UPDATE_PROFILE_RESET, USER_UPDATE_PROFILE_FAIL, USER_DETAILS_RESET,
        USER_LIST_REQUEST, USER_LIST_SUCCESS, USER_LIST_RESET, USER_LIST_FAIL,
        USER_DELETE_REQUEST, USER_DELETE_SUCCESS, USER_DELETE_FAIL,
        USER_UPDATE_FAIL, USER_UPDATE_SUCCESS, USER_UPDATE_REQUEST, USER_UPDATE_RESET,
    
    } from "../constants/userConstans"; 
import { ORDER_LIST_MY_RESET } from "../constants/orderConstans";

export const login = (email, password) =>  async (dispatch) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST,
        })

        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }
        const {data} = await axios.post('http://127.0.0.1:8000/api/users/login/', {'username': email, 'password': password}, config)

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data,
        })

        localStorage.setItem('userInfo', JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.detail
            ? error.response.data.detail
            : error.detail,
        }) 
    }
} 

export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo')
    dispatch({type: USER_LOGOUT})
    dispatch({type: USER_DETAILS_RESET})
    dispatch({type: ORDER_LIST_MY_RESET})
    dispatch({type: USER_LIST_RESET})
}


export const register = (name, email, password) =>  async (dispatch) => {
    try {
        dispatch({
            type: USER_REGISTER_REQUEST,
        })

        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }
        const {data} = await axios.post('http://127.0.0.1:8000/api/users/register/',
         {'name': name,'email': email, 'password': password}, config)

        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data,
        })

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data,
        })

        localStorage.setItem('userInfo', JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload: error.response && error.response.data.detail
            ? error.response.data.detail
            : error.detail,
        }) 
    }
} 


export const getUserDetail = (id) =>  async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_DETAILS_REQUEST,
        })

        const {
            userLogin: {userInfo}
        } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const {data} = await axios.get(`http://127.0.0.1:8000/api/users/${id}/`,
          config)

        dispatch({
            type: USER_DETAILS_SUCCESS,
            payload: data,
        })

        

    } catch (error) {
        dispatch({
            type: USER_DETAILS_FAIL,
            payload: error.response && error.response.data.detail
            ? error.response.data.detail
            : error.detail,
        }) 
    }
} 


export const updateUserProfile = (user) =>  async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_UPDATE_PROFILE_REQUEST,
        })

        const {
            userLogin: {userInfo}
        } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const {data} = await axios.put(`http://127.0.0.1:8000/api/users/profile/update/`,
            user,
            config
          )

        dispatch({
            type: USER_UPDATE_PROFILE_SUCCESS,
            payload: data,
        })

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data,
        })

        localStorage.setItem('userInfo', JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: USER_UPDATE_PROFILE_FAIL,
            payload: error.response && error.response.data.detail
            ? error.response.data.detail
            : error.detail,
        }) 
    }
} 

export const listUsers = () =>  async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_LIST_REQUEST,
        })

        const {
            userLogin: {userInfo}
        } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const {data} = await axios.get(`http://127.0.0.1:8000/api/users/`,
            
            config
          )

        dispatch({
            type: USER_LIST_SUCCESS,
            payload: data,
        })


    } catch (error) {
        dispatch({
            type: USER_LIST_FAIL,
            payload: error.response && error.response.data.detail
            ? error.response.data.detail
            : error.detail,
        }) 
    }
} 


export const deleteUser = (id) =>  async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_DELETE_REQUEST,
        })

        const {
            userLogin: {userInfo}
        } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const {data} = await axios.delete(`http://127.0.0.1:8000/api/users/delete/${id}/`,
            
            config
          )

        dispatch({
            type: USER_DELETE_SUCCESS,
            payload: data,
        })


    } catch (error) {
        dispatch({
            type: USER_DELETE_FAIL,
            payload: error.response && error.response.data.detail
            ? error.response.data.detail
            : error.detail,
        }) 
    }
} 

export const updateUser = (user) =>  async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_UPDATE_REQUEST,
        })

        const {
            userLogin: {userInfo}
        } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const {data} = await axios.put(`http://127.0.0.1:8000/api/users/update/${user._id}/`,
            user,
            config
          )

        dispatch({
            type: USER_UPDATE_SUCCESS,
        })

        dispatch({
            type: USER_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: USER_UPDATE_FAIL,
            payload: error.response && error.response.data.detail
            ? error.response.data.detail
            : error.detail,
        }) 
    }
} 