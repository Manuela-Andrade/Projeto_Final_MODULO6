
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



function Menu() {

    return (


        <Navbar bg="light" expand="lg" fixed='top'>
            <Container >
                <Navbar.Brand href="#home">Tech Jogos News</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/funcionalidades">Funcionalidades</Nav.Link>
                        <NavDropdown title="Menu" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/sobre">Sobre</NavDropdown.Item>
                            <NavDropdown.Item href="contato">
                                Contato
                            </NavDropdown.Item>
                            <NavDropdown.Item href="equipe">
                                Equipe
                            </NavDropdown.Item>
                            <NavDropdown.Item href="login">
                                Login
                            </NavDropdown.Item>

                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}



export default Menu;

