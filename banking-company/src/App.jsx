import { useState } from 'react'
import './assets/style.css'
import Header from './components/header/Header.jsx'
import './App.css'
import Welcome from './components/welcome/Welcome'

function App() {
   return (
      <div className='bg-grey-10 absolute w-full pb-20 -z-50'>
         <div className="bgHeader bg-no-repeat h-[500px] w-[800px] bg-contain absolute -left-20 -top-20 -z-40"></div>
         <Header />
         <Welcome />
      </div>
   )
}

export default App
