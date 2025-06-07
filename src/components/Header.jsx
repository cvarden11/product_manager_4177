import '../App.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function Header() {

  return (
    <Navbar expand="lg" className='bg-body-tertiary'>
        <Container>
            <Navbar.Brand href='/'>ProdManage</Navbar.Brand> 
            <Navbar.Toggle aria-controls='basic-navbar-nav'/>
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='ms-auto'>
                    <Nav.Link href='/'>Home</Nav.Link>
                    <Nav.Link href='/product'>Product</Nav.Link>
                    <Nav.Link href='/contact'>Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Header