import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import indexReducers from './reducers/index'

const ReducerStore = () => {
    const composeEnhance = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    const store = createStore(
        indexReducers,
        composeEnhance(applyMiddleware(thunk))
    )
    return store
}

export default ReducerStore