import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Button, TextField } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser, signin } from '../../store/actions/user_action'

const Auth = (props) => {

    const [register, setRegister] = useState(false)
    const notification = useSelector(state=>state.notifications)
    const dispatch = useDispatch()

    const formilk = useFormik({
        initialValues:{email:'ntphuong@gmail.com',password:'1234567890'},
        validationSchema:Yup.object({
            email:Yup.string()
                .required('Email is required')
                .email('This is not a valid email'),
            password:Yup.string()
                .required('Password is required')
        }),
        onSubmit:(values,{resetForm})=>{
            // console.log('Values: ',values)
            handleSubmit(values)
        }
    })

    const errorHelper = (formilk, values) => ({
        error: formilk.errors[values] && formilk.touched[values] ? true : false,
        helperText: formilk.errors[values] && formilk.touched[values] ? formilk.errors[values] : null,
    })

    const handleSubmit = (values) => {
        if (register){
            dispatch(registerUser(values))
        } else {
            dispatch(signin(values))
        }
    }

    useEffect(()=>{
        if (notification && notification.success){
            props.history.push('/dashboard')
        }
    },[notification, props.history])

    return(
        <div className="auth_container">
            <h1>Authentication</h1>
            <form className="mt-3" onSubmit={formilk.handleSubmit}>
                <div className="form-group">
                    <TextField
                        style={{width:"100%"}}
                        name="Email"
                        label="Enter your email"
                        variant="outlined"
                        {...formilk.getFieldProps('email')}
                        // error={formilk.errors.email && formilk.touched.email ? true : false}
                        // helperText={formilk.errors.email}
                        {...errorHelper(formilk,'email')}/>
                </div>
                <div className="form-group">
                    <TextField
                        style={{width:"100%"}}
                        name="Email"
                        label="Enter your password"
                        variant="outlined"
                        {...formilk.getFieldProps('password')}
                        // error={formilk.password.email && formilk.touched.password ? true : false}
                        // helperText={formilk.password.email}
                        {...errorHelper(formilk,'password')}/>
                </div>
                <Button 
                    variant="contained" 
                    color="primary" 
                    type="submit" 
                    size="large">
                    {register ? 'Register' : 'Login'}
                </Button>
                <Button 
                    className="mt-3"
                    variant="outlined" 
                    color="secondary" 
                    size="large"
                    onClick={()=>setRegister(!register)}>
                    Want to {!register ? 'Register' : 'Login'} ?
                </Button>
            </form>
        </div>
    )
}

export default Auth;