import { useState } from 'react'
import '../../App.css'
import Header from '../../components/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function Contact() {

  return (
    <>
      <section>
        <Header/>
        <div className='d-flex justify-content-center align-items-center min-vh-100 bg-light'>
          <div className='text-center p-4 border rounded bg-white shadow-sm'>
            <h2 className='mb-4'> Contact Us</h2>
            <p className='mb-2'>
              <strong>Address:</strong> 123 Fake Street, State City, CA 90210
            </p>
            <p className='mb-2'>
              <strong>Email:</strong> name@domain.com
            </p>
            <p className='mb-2'>
              <strong>Phone:</strong> 123 4567 890
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact