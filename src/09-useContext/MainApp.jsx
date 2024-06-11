import React from 'react'
import { AboutPage } from './AboutPage'
import { HomePage } from './HomePage'
import { LoginPage } from './LoginPage'
import { Link, Navigate, Route, Routes } from 'react-router-dom'
import { NavBar } from './NavBar'
import { UserProvider } from './context/UserProvider'

export const MainApp = () => {
  return (
    <UserProvider>
        <h1>Main App</h1>
          <NavBar/>
        <hr />

        <Routes>
          <Route path='/' element={ <HomePage/> }/>
          <Route path='about' element={ <AboutPage/> } />
          <Route path='login' element={  <LoginPage/> } />

          <Route path='/*' element={  <Navigate to='/'/> } />
          
        </Routes>
        
    </UserProvider>
  )
}
