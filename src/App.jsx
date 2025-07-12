import { Suspense, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Product from './pages/Product/Product'
import Contact from './pages/Contact/Contact'
import SignUp from './pages/Auth/SignUp';
import Login from './pages/Auth/Login';
import ProtectedRoute from './components/ProtectedRoute';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Suspense
          fallback= {<div className="text-center mt-5">Loading...</div>}>
        <Routes>
          <Route path = "/" element={<Home/>}></Route>
          <Route path = "/product" element={<ProtectedRoute><Product/></ProtectedRoute>}></Route>
          <Route path = "/contact" element={<Contact/>}></Route>
          <Route path = "/register" element={<SignUp/>}></Route>
          <Route path = "/login" element={<Login/>}></Route>


        </Routes>
        </Suspense>

      </Router>
      <ToastContainer position='top-right' autoClose={3000}/>
    </>
  )
}

export default App
