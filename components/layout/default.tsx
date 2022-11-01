import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

export default function Layout({ children }: { children: any[] }) {
    return ([
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            </Container>
        </Navbar>,
        children
    ])
}