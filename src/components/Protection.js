import React from 'react'
import { Navigate, Outlet } from 'react-router'

const Protection = () => {
  return (
    
      localStorage.usertoken ? <Outlet/> : <Navigate to="/" />
    
  )
}

export default Protection
