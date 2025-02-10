import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './components/Dashboard'
import Logout from './components/Logout'
function App() {
  const [regData,setRegData]=useState();
  return (
    <>
    <div>
      <Routes>
          <Route path="/" element={<Home/>}>
          <Route path="/login" element={<Login regData={regData}/>}></Route>
          <Route path="/register" element={<Register setregData={setRegData}/>}></Route>
          </Route>
          <Route path="/dashboard" element={<Dashboard regdash={regData}/>}></Route>
          <Route path="/logout" element={<Logout/>}></Route>
          <Route path="*" element={<h1>No Page Available</h1>}></Route>

      </Routes>
    </div>
      
    </>
  )
}

export default App
