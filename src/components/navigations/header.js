import React, { useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import Sidedrawer from './sidedraw'
import { showToast } from '../utils/tools'
import { useDispatch, useSelector } from 'react-redux'
import { clearNotification } from '../../store/actions/index'
import { signout } from '../../store/actions/user_action'

const Header = (props) => {
    const notification = useSelector(state=>state.notifications)
    const dispatch = useDispatch()

    const signOut = () => {
        dispatch(signout())
        props.history.push('/')
    }

    useEffect(()=>{
        if (notification && notification.error){
            const msg = notification.msg ? notification.msg : 'Error'
            showToast('ERROR', msg)
            dispatch(clearNotification())
        }
        if (notification &&  notification.success){
            const msg = notification.msg ? notification.msg : 'Finish'
            showToast('SUCCESS', msg)
            dispatch(clearNotification())
        }
    },[notification])

    return(
        <nav className="navbar fixed-top">
            <Link style={{fontFamily:"Fredoka One"}} to="/"
                className="navbar-brand d-flex align-items-center">Final</Link>
            <Sidedrawer signout={signOut}/>
        </nav>
    )
}

export default withRouter(Header);