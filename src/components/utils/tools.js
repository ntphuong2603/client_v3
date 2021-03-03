import { toast } from 'react-toastify'
import cookie from 'react-cookies'

export const showToast = (type, msg) => {
    switch (type){
        case 'SUCCESS':
            toast.success(msg, {
                position: toast.POSITION.TOP_RIGHT,
            })
            break;
        case 'ERROR':
            toast.error(msg, {
                position: toast.POSITION.TOP_CENTER,
            })
            break;
        case 'INFO':
            toast.info(msg, {
                position: toast.POSITION.TOP_LEFT,
            })
            break;
        default:
            return false;
    }
}

export const getToken = () => cookie.load('myToken')
export const removeToken = () => cookie.remove('myToken')

export const getHeader = {
    headers: {
        'myToken': getToken()
    }
}