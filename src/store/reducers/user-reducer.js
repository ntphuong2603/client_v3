import { USER_ACTIONS } from "../actions";

const initUser = {
    data:{
        id: null,
        role: null,
    },
    auth:null
}

export default function userReducer(state=initUser,actions){
    switch(actions.type){
        case USER_ACTIONS.AUTH_USER:
            return {
                ...state, 
                data: {...state.data, ...actions.payload.data}, 
                auth: actions.payload.auth,
            }
        case USER_ACTIONS.SIGN_OUT:
            return { 
                ...state, 
                data: {...initUser.data}, 
                auth: false,
            }
        default:
            return state
    }
}