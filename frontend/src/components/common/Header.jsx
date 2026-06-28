import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return (
        <header className='fixed top-0 left-0 w-full z-50 bg-black'>
            <div className="container py-3">
                <Navbar expand="lg">
                    <Navbar.Brand href="/" className='logo'>Fuduzzz</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="/" className='nav-link'>Home</Nav.Link>
                            <Nav.Link href="/about" className='nav-link'>About Us</Nav.Link>
                            <Nav.Link href="#link" className='nav-link'>Services</Nav.Link>
                            <Nav.Link href="#link" className='nav-link'>Projects</Nav.Link>
                            <Nav.Link href="#link" className='nav-link'>Blogs</Nav.Link>
                            <Nav.Link href="#link" className='nav-link'>Contact Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </header>
    )
}

export default Header
