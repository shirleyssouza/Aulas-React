import { Container, Spinner } from "react-bootstrap";

function Loader() {
    return (
        <Container className="mt-4">
            <Spinner variant="dark" />
            <span className="ms-1">Carregando...</span>
        </Container>
    );
}

export default Loader;