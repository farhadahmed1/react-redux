import React from 'react';

import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavBar.css'




const NavBar = () => {
    return (

        <>
            <Navbar className="navbar" variant="light" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand className="logo-style" to="/home">Supper Shop</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="nav-style">
                            <Link to="/home">Home</Link>
                            <Link to="/products">Product</Link>
                            <Link to="/shopping">Shop</Link>
                            {/*  <Link to="/contect">Contect Us</Link>
                            {user?.email ?
                                <Link to="/home"> <Button onClick={} className="main-btn rounded-pill"> LogOut</Button></Link> :
                                <Link to="/login"> <Button className="main-btn rounded-pill">Login </Button></Link>
                                <i class="fas fa-shopping-cart"> 
                            }
                            <br />
                            <Navbar.Text>

                                <Link to="/home">{user?.displayName}</Link>
                            </Navbar.Text> */}
                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </>

    );
};

export default NavBar;