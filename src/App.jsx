import React from 'react'
import { Route } from 'react-router-dom'
import Header from './components/layout/Header'
import { Routes } from 'react-router-dom'
import Home from './pages/Home'
import Pizza from './pages/Pizza'
import Pasta from './pages/Pasta'
import Soup from './pages/Soup'
import Salad from './pages/Salad'
import Drinks from './pages/Drinks'
import Desserts from './pages/Desserts'
import Promotos from './pages/Promotos'
import Combo from './pages/Combo'
import Contact from './pages/Contact'
import Footer from './components/layout/Footer'

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pizza' element={<Pizza />} />
          <Route path='/pasta' element={<Pasta />} />
          <Route path='/soup' element={<Soup />} />
          <Route path='/salad' element={<Salad />} />
          <Route path='/drinks' element={<Drinks />} />
          <Route path='/desserts' element={<Desserts />} />
          <Route path='/promotos' element={<Promotos />} />
          <Route path='/combo' element={<Combo />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </main>


      <Footer />
    </>
  )
}

export default App