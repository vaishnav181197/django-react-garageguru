import { useState } from 'react'
import './bootstrap.min.css'

import Home from './pages/Home'
import Service from './pages/Service'
import Customer from './pages/Customer'
import Header from './components/Header'
import Footer from './components/Footer'
import Log from './pages/Log'
import Reg from './pages/Reg'
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css'
import { Routes,Route } from 'react-router-dom'

import './App.css'

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Log/>}/>
        <Route path='/reg' element={<Reg/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/customer' element={<Customer/>}/>
        <Route path='/service/:id' element={<Service/>}/>
      </Routes>
      <Footer/>
      <ToastContainer/>
    </>
  )
}

export default App
