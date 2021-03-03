import { combineReducers } from 'redux'
import articles from './article-reducer'
import users from './user-reducer'
import sites from './site-reducer'
import notifications from './notification-reducer'

const indexReducers = combineReducers({
    articles,
    users,
    sites,
    notifications,
})

export default indexReducers;