import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <Navbar className="bg-info">
                <Container>
                    <Link to={'/home'} style={{textDecoration:'none'}}>
                        <Navbar.Brand href="#home">
                            <i className="fa-solid fa-car-side fa-bounce fa-xl" style={{ color: "#14d217", }} />
                            {'   '}
                            Garage Guru
                        </Navbar.Brand>
                    </Link>

                    

                </Container>
            </Navbar>
        </>
    )
}

export default Header