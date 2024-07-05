import "./Cabecalho.css";
import logo from "../assets/images/logomuseu.png";

function Cabecalho(props) {
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
}

export default Cabecalho;
