import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Product from './pages/Product/Product'
import Contact from './pages/Contact/Contact'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path = "/" element={<Home/>}></Route>
          <Route path = "/product" element={<Product/>}></Route>
          <Route path = "/contact" element={<Contact/>}></Route>

        </Routes>

      </Router>
      <ToastContainer position='top-right' autoClose={3000}/>
    </>
  )
}

export default App
