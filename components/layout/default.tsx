import { Navbar, Container, Nav } from 'react-bootstrap';

export default function Layout({ children }) {
    console.log(children);
    return ([
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            </Container>
        </Navbar>,
        ...children
    ])
}