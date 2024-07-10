import { Container, Navbar, NavLink, Nav } from "react-bootstrap";

function Rodape() {
    return (
        <footer>
        <Navbar className="ps-2 pe-2" bg="dark" variant="dark" expand="md" fluid>
            <Nav>
            <NavLink href="/p-privacidade">Políticas de Privacidade</NavLink>
            </Nav>
            <Navbar.Text className="ms-auto">&copy;2024 - Todos os direitos reservados.</Navbar.Text>
        </Navbar>
        </footer>
    );
}

export default Rodape;