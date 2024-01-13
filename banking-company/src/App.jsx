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
            <Route path="/banking-company/" element={<Home />} />
            <Route path="/banking-company/Login" element={<LoginPage />} />
            <Route path="/banking-company/SignUp" element={<SignUpPage />} />
         </Routes>
      </div>
   )
}

export default App
