import React, { useEffect, useReducer } from 'react'
import { Grid } from '@material-ui/core'
import ArticleCard from './utils/articleCard'
import { useDispatch, useSelector } from 'react-redux'
import { getArticles } from '../store/actions/article_action'

const initSort = {sortBy: "_id", order: "asc", limit:8, skip:0}

const Home = () => {
    const [sort, setSort] = useReducer(
        (state, newState) => ({...state, ...newState}),
        initSort
    )

    const articles = useSelector(state => state.articles)
    const dispatch = useDispatch()

    useEffect(()=>{
        if (articles && !articles.articles){
            dispatch(getArticles(initSort))
        }
    },[articles, dispatch])

    return(
        <div style={{fontFamily:'Fredoka One'}}>
            <div>
                ... Carreusoul ...
            </div>
            <Grid container spacing={2} className='article_card'>
                {articles && articles.articles ? 
                articles.articles.map((item)=>(
                    <Grid key={item._id} item xs={12} sm={6} lg={3}>
                        <ArticleCard key={item._id} article={item}/>
                    </Grid>
                ))
                : null}
            </Grid>
            <button onClick={()=>{
                let skip = sort.skip + sort.limit
                dispatch(getArticles({...sort,skip:skip}))
                setSort({skip:skip})
            }}>
                Load more
            </button>
        </div>
    )
}

export default Home