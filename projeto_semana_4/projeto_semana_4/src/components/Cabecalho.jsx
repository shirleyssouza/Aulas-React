import "./Cabecalho.css";
import logo from "../assets/images/logomuseu.png";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Cabecalho() {
    return (
        <header>
            <Navbar>
                <img src={logo} alt="logotipo museus" width="100px" />
                <h1>Museus do Rio</h1>

               {/* <Navbar.Toggle /> */}
                {/* <Navbar.Collapse> */}
                    <Nav className="menu">
                        <Link className="nav-link" to="/">
                            Home
                        </Link>
                        <Link className="nav-link" to="/contato">
                            Contato
                        </Link>
                        <Link className="nav-link" to="/cadastro">
                            Cadastro
                        </Link>
                        <Link className="nav-link" to="/login">
                            Login
                        </Link>
                    </Nav>
                {/* </Navbar.Collapse> */}
            </Navbar>
        </header>
    );
}

export default Cabecalho;

/*
 return (
        <header>
            <img src={logo} alt="logo" />
            <h2>Museus do Rio</h2>
            <nav>
                <a href="">Início</a>
                <a href="">Museus</a>
                <a href="">Contato</a>
                <a
                    href=""
                    onClick={function handleClick() {
                        props.logado
                            ? alert("Você clicou para SAIR.")
                            : alert("Você clicou para ENTRAR!");
                    }}
                >
                    {props.logado ? "Sair" : "Entrar"}
                </a>
            </nav>
        </header>
    );
*/
