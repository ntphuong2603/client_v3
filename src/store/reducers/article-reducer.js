import { ARTICLE_ACTIONS } from "../actions";

export default function articleReducer(state={},actions){
    switch(actions.type){
        case ARTICLE_ACTIONS.GET_ARTICLES:
            return {...state, articles: actions.payload}
        default:
            return state
    }
}