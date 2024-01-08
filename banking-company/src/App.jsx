import { useState } from 'react'
import './assets/style.css'
import './App.css'
import Home from './pages/home/Home'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/login page/LoginPage'
import SignUpPage from './pages/sign up page/SignUpPage'

function App() {
   return (
      <div>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<LoginPage />} />
            <Route path="/SignUp" element={<SignUpPage />} />
         </Routes>         
      </div>
   )
}

export default App
