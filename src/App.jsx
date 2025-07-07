import React from 'react'
import Nav from './components/Nav/Nav'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Pages/Home'
import About from './components/Pages/About'
import Contact from './components/Pages/Contact'
import Login from './components/Pages/Login'
import Sign from './components/Pages/Sign'
import Cart from './components/Pages/Cart'

function App() {
  return (
   <>
   <Nav/>
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/About' element={<About/>}></Route>
    <Route path='/Contact' element={<Contact/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='sign' element={<Sign/>}></Route>
    <Route path='/Cart' element={<Cart/>}></Route>
   </Routes>
   
   
   </>
  )
}


export default App
