import * as userActions from './index'
import axios from 'axios'
import { getHeader, getToken, removeToken } from '../../components/utils/tools'

axios.defaults.headers.post['Content-Type'] = 'application/json'

export const registerUser = (values) => {
    return async(dispatch) =>{
        try{
            const res = await axios.post('http://localhost:5000/api/users/register',{
                email: values.email,
                password: values.password,
            })
            dispatch(userActions.authUser({data:res.data, auth: true}))
            dispatch(userActions.successGlobal('Welcome to MATRIX'))
        } catch (error){
            dispatch(userActions.errorGlobal(error))
        }
    }
}

export const signin = (values) => {
    return async(dispatch) => {
        try{
            const res = await axios.post('http://localhost:5000/api/users/signin',{
                email: values.email,
                password: values.password,
            })
            console.log('Response:', res.cookies);
            console.log('Token', getToken());
            dispatch(userActions.authUser({data:res.data, auth: true}))
            dispatch(userActions.successGlobal(`Welcome back to MATRIX ${res.data.email}`))
        } catch (error){
            dispatch(userActions.errorGlobal(error.response.data.message))
        }
    }
}

export const isAuthUser = () => {
    return async(dispatch) => {
        try {
            const res = await axios.get('http://localhost:5000/api/users/isAuth',getHeader)
            dispatch(userActions.authUser({data:res.data, auth: true}))
        } catch (error) {
            dispatch(userActions.authUser({data:{}, auth: false}))
        }
    }
}

export const signout = () => {
    return async(dispatch) => {
        removeToken()
        dispatch(userActions.signout())
    }
}