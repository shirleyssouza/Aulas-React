import "./Rodape.css"

function Rodape(props) {
    return (
    <footer>
        <div className="textos">
            <h4>Museus do Rio</h4>
            <p>Uma breve descrição de alguns dos principais museus da cidade do Rio de Janeiro, conciliando meu amor pro programação e museologia.</p>
            <p>&copy;{props.data} - Todos os direitos reservados.</p>
        </div>
        <nav>
            <a href="#mnba">Museu de Belas Artes</a>
            <a href="#mamanha">Museu do Amanhã</a>
            <a href="#mam">Museu de Arte Moderna</a>
        </nav>
    </footer>
    );
}

export default Rodape;