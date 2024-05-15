import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const MyNavbar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home" style={{ padding: '0 10px', fontFamily: 'Poppins' }}>KIDDEE</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
                <Nav style={{ padding: '0 10px' }}>
                    <Nav.Link href="#link"></Nav.Link>
                </Nav>
                <Nav style={{ padding: '0 10px' }}>
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#about">About us</Nav.Link>
                    <Nav.Link href="#contact">Members</Nav.Link>
                    <Nav.Link href="#contact">Gallery</Nav.Link>
                    <Nav.Link href="#contact">Recognition</Nav.Link>
                    <Nav.Link href="#contact">Clip</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default MyNavbar;
