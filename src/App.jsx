import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './component/Header'
import Coins from './pages/Coins'
import Footer from "./component/Footer"
import Notfound from './pages/Notfound'

const App = () => {
  return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<Coins/>} path='/coins/:id' />
          <Route element={<Notfound/>} path='*' />
        </Routes>
        <Footer/>
      </BrowserRouter>

  )
}

export default App