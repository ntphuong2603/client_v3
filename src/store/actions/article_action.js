import * as articleActions from './index'
import axios from 'axios'

axios.defaults.headers.post['Content-Type'] = 'application/json'

export const getArticles = (sort) => {
    return async(dispatch, getState) =>{
        try{
            const articles = await axios.post('http://localhost:5000/api/articles/loadmore',sort)
            const prev = getState().articles.articles

            let newArticles = [...articles.data]
            if (prev){
                newArticles = [...prev, ...articles.data]
            }
            dispatch(articleActions.getArticles(newArticles))
            dispatch(articleActions.successGlobal('Load more DONE'))
        } catch (error){
            dispatch(articleActions.errorGlobal())
        }
    }
}
