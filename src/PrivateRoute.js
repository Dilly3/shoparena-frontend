import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import {useAppContext} from './context/ContextUse'

const PrivateRoute = ({ children, type }) => {
    const data = useAppContext();
    console.log(data)
    // const { isAuthenticated, user, token } = useContext(AuthContext)
    // console.log({ isAuthenticated })
    //
    // if (token === null) {
    //     return <Navigate to='/login' />
    // }
    // if (
    //     isAuthenticated &&
    //     type !== 'both' &&
    //     user.role.title.toLowerCase() !== type
    // ) {
    //     return <Navigate to='/' />
    // }
    // return children
}

export default PrivateRoute
