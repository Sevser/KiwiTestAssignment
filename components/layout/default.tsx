/* eslint-disable react/jsx-key */
import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';

type Props = {
    children:
    | JSX.Element
    | JSX.Element[]
    | string
    | string[];
    openHelpMenu: () => void,
};

const Layout = ({ children, openHelpMenu }: Props) => {
    return (<>
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    React-Bootstrap
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Button onClick={() => openHelpMenu()}>help</Button>
                </Nav>
            </Container>
        </Navbar>
        {children}
    </>)
};

export default Layout;