import { useState } from 'react'
import '../../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '../../components/Header'
import Hero from '../../components/Hero'

function Home() {

  return (
    <>
      <section>
        <Header/>
        <Hero/>
      </section>
    </>
  )
}


export default Home