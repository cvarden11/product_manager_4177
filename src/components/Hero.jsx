import { useState } from 'react'
import {Container, Button, Row, Col, Card} from 'react-bootstrap'
import {Link} from "react-router-dom"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function Hero() {

  return (
        <div className='home-hero text-white d-flex align-items-center'>
            <center>
                <Row className='align-items-center'>
                    <Col md={6}>
                        <h1 className='display-4 fw-bold'>Welcome to ProdManage</h1>
                        <p className='lead'>
                           Upload Products for users to see
                        </p>
                        <Link to='/product'>
                            <Button  size='lg' className='mt-3'>
                                Products
                            </Button>
                        </Link>
                    </Col>
                    <Col md={6}>
                        <img
                        src='https://bloomidea.com/sites/default/files/styles/og_image/public/blog/Porque%20deve%20ter%20uma%20loja%20online_0.png?itok=lxdmtNZE'
                        alt='Product illustration'                        
                        className='img-fluid mt-4 mt-md-0'/>
                    </Col>
                </Row>
            </center>

        </div>
  )
}

export default Hero