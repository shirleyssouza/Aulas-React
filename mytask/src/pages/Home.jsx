import { Container, Card, Button } from "react-bootstrap";

function Home() {
    return (
        <Container className="cards mt-4">
            <Card className="mt-4" bg="dark" text="white" border="primary">
                <Card.Header className="bg-secondary" as="h2">
                    Login
                </Card.Header>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Officia reiciendis eum in dolores, laboriosam
                        ullam quae facere nisi nobis distinctio!
                    </Card.Text>
                    <Card.Link href="/Login">
                        <Button variant="primary">Login</Button>
                    </Card.Link>
                </Card.Body>
            </Card>
            <Card className="mt-4" bg="dark" text="white" border="primary">
                <Card.Header className="bg-secondary" as="h2">
                    Cadastro
                </Card.Header>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Officia reiciendis eum in dolores, laboriosam
                        ullam quae facere nisi nobis distinctio!
                    </Card.Text>
                    <Card.Link href="/Cadastro">
                        <Button variant="primary">Cadastro</Button>
                    </Card.Link>
                </Card.Body>
            </Card>
            <Card className="mt-4 mb-4" bg="dark" text="white" border="primary">
                <Card.Header className="bg-secondary" as="h2">
                    Ajuda
                </Card.Header>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Officia reiciendis eum in dolores, laboriosam
                        ullam quae facere nisi nobis distinctio!
                    </Card.Text>
                    <Card.Link href="/Ajuda">
                        <Button variant="primary">Ajuda</Button>
                    </Card.Link>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default Home;
