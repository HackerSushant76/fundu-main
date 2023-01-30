import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
   const {isAuthenticated} = useAuth0()
    if(!isAuthenticated){
        <Navigate to="/login" />
    }
  return children
}

export default PrivateRoute