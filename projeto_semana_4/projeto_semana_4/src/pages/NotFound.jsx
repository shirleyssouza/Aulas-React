import { Button, Container } from "react-bootstrap";

function NotFound() {
return (
 
        <Container className="mt-5">
            <div className="alert bg-danger p-5">
                <h1>Pagina não encontrada!</h1>
                <a href="../" className="btn btn-outline-dark bg-danger btn-lg mt-4" role="button">Retornar a pagina principal</a>
            </div>
        </Container>

);
}

export default NotFound;