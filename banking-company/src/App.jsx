import { useState } from 'react'
import './assets/style.css'
import './App.css'
import Home from './pages/home/Home'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/login page/LoginPage'
import SignUpPage from './pages/sign up page/SignUpPage'
import About from './pages/about/About'

function App() {
   return (
      <div>
         <Routes>
            <Route path="/banking-company/" element={<Home />} />
            <Route path="/banking-company/Login" element={<LoginPage />} />
            <Route path="/banking-company/SignUp" element={<SignUpPage />} />
<<<<<<< HEAD
            <Route path="/banking-company/About" element={<About />} />
         </Routes>         
=======
         </Routes>
>>>>>>> f9c997372d540f5b044d2310393a36e99398f0d6
      </div>
   )
}

export default App
