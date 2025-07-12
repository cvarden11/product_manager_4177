import '../App.css'
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import  Button  from 'react-bootstrap/Button';


function Header() {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("token");


  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  }



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
                {isLoggedIn ?(<Button variant="outline-danger" onClick = {handleLogout}>Logout</Button>):(<Nav.Link href="/login"><Button variant="outline-success">Login</Button></Nav.Link>)}
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Header