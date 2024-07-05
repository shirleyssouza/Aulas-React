import "./CardAluno.css";

function CardAluno(props) {
    if (props.media >= "7.0") {
        return (
            <section className="aprovado2">
                <h1>Caro(a) aluno(a), {props.nome}!</h1>
                <h3>Nocê está cursando a {props.serie} série.</h3>
                <p>
                    Devido a média das suas notas, {props.media}, sua situação
                    é:
                </p>
                <h2>Aprovado(a)!</h2>
            </section>
        );
    } else {
        return (
            <section className="reprovado2">
                <h1>Caro(a) aluno(a), {props.nome}!</h1>
                <h3>Nocê está cursando a {props.serie} série.</h3>
                <p>
                    Devido a média das suas notas, {props.media}, sua situação
                    é:
                </p>
                <h2>Reprovado(a)!</h2>
            </section>
        );
    }
}

export default CardAluno;