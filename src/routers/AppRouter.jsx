import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CartProvider } from 'react-use-cart'
import Footer from '../components/Footer'
import High from '../components/High'
import Nav from '../components/Nav'
import Upto from '../components/Upto'
import About from '../pages/About'
import Blog from '../pages/Blog'
import Cart from '../pages/Cart'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Return from '../pages/Return'
import Shipping from '../pages/Shipping'
import Terms from '../pages/Terms'



class AppRouter extends Component {
  render() {
    return (
 <CartProvider>
 <BrowserRouter>
 
 <Upto />
 <High />
 <Nav />
 
       <Routes>
     <Route path='/' element={<Home/>}></Route>
     <Route path='/about' element={<About/>}></Route>
     <Route path='/return' element={<Return/>}></Route>
     <Route path='/terms' element={<Terms/>}></Route>
     <Route path='/shipping' element={<Shipping/>}></Route>
     <Route path='/contact' element={<Contact/>}></Route>
     <Route path='/blog' element={<Blog/>}></Route>
     <Route path='/login' element={<Login/>}></Route>
     <Route path='/cart' element={<Cart/>}></Route>
 
 
 </Routes>
 
 <Footer />
       
       
       </BrowserRouter>

 </CartProvider>
    )
  }
}

export default AppRouter