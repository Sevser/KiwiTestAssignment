/* eslint-disable react/jsx-key */
import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

type Props = {
    children:
    | JSX.Element
    | JSX.Element[]
    | string
    | string[];
};

const Layout = ({ children }: Props) => {
    return (<>
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            </Container>
        </Navbar>
        {children}
    </>)
};

export default Layout;