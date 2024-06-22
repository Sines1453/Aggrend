import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar
            bg='dark'
            variant='dark'
            expand='lg'>
            <Container>
                <Navbar.Brand>My App</Navbar.Brand>
                <Nav className='mr-auto'>
                    <Nav.Link
                        as={Link}
                        to='/'>
                        Home
                    </Nav.Link>
                    <Nav.Link
                        as={Link}
                        to='/faggot'>
                        Aggrend
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;
