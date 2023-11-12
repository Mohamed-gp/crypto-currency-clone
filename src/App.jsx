import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './component/Header'
import Coins from './pages/Coins'

const App = () => {
  return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<Coins/>} path='/coins/:id' />
        </Routes>
      </BrowserRouter>

  )
}

export default App