import { Alert, AlertHeading } from "react-bootstrap";

function NotFound() {
    return (
        <main>
            <div className="m-5">
              <Alert variant="danger">
                <AlertHeading className="ms-auto">Página não encontrada! 404</AlertHeading>
              </Alert>
               </div>
        </main>
    );
}

export default NotFound;