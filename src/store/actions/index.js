import { ARTICLE_ACTIONS, NOTIFICATION_ACTIONS, USER_ACTIONS } from "../actions"

export const getArticles = (articles) => ({
    type: ARTICLE_ACTIONS.GET_ARTICLES,
    payload: articles,
})

export const errorGlobal = (msg) => ({
    type: NOTIFICATION_ACTIONS.ERROR,
    payload: msg,
})

export const successGlobal = (msg) => ({
    type: NOTIFICATION_ACTIONS.SUCCESS,
    payload: msg,
})

export const clearNotification = () => {
    return (dispatch)=>{
        dispatch({
            type: NOTIFICATION_ACTIONS.CLEAR,
        })
    }
}

export const authUser = (user) => ({
    type: USER_ACTIONS.AUTH_USER,
    payload: user,
})

export const signout = () => ({
    type: USER_ACTIONS.SIGN_OUT,
})