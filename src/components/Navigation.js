import React, {Component} from 'react';
import {Nav,Navbar,Container} from "react-bootstrap";
import {render} from "@testing-library/react";

class Navigation extends Component
{
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">Password Generator</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                            </Nav>
                            <Nav>
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link eventKey={2} href="/about">
                                    About
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}
export default Navigation;
