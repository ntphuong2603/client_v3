import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import GoogleFontLoader from 'react-google-font-loader'
import Home from './components/home'
import Header from './components/navigations/header'
import MainLayout from './components/hoc/mainLayout'
import Auth from './components/auth/index'
import { useDispatch, useSelector } from 'react-redux'
import { isAuthUser } from './store/actions/user_action'
import Loader from './components/utils/loader'

const Routes = () => {
    const [loading, setLoading] = useState(true)
    const user = useSelector(state=>state.users)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(isAuthUser())
    },[dispatch])

    useEffect(()=>{
        if (user.auth !== null){
            setLoading(false)
        }
    },[user])

    return(
        <BrowserRouter>
            <Header/>
            {loading ? 
                <Loader/>
                : 
                <MainLayout>
                    <Switch>
                        <Route path='/auth' component={Auth}/>
                        <Route path='/' component={Home}/>
                    </Switch>
                    <GoogleFontLoader
                        fonts = {[
                            {font:'Roboto',weights:[300,400,900]},
                            {font:'Fredoka One'}
                        ]}
                    />
                </MainLayout>
            }
        </BrowserRouter>
    )
}

export default Routes