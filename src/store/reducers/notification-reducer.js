import { NOTIFICATION_ACTIONS } from "../actions";

export default function notificationReducer(state={},actions){
    switch(actions.type){
        case NOTIFICATION_ACTIONS.ERROR:
            return {...state, error: true, msg: actions.payload}
        case NOTIFICATION_ACTIONS.SUCCESS:
            return {...state, success: true, msg: actions.payload}
        case NOTIFICATION_ACTIONS.CLEAR:
            return {}
        default:
            return state
    }
}