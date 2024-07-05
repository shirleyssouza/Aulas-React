import "./CardAlunoAula.css";

const alunos = [
    { matricula: 1, nome: "Maria", serie: "Terceira", media: "9.0" },
    { matricula: 2, nome: "João", serie: "Primeira", media: "4.0" },
    { matricula: 3, nome: "Pedro", serie: "Terceira", media: "7.0" },
    { matricula: 4, nome: "Sandra", serie: "Segunda", media: "5.0" },
];

// <CardAluno nome="" serie="" media={0}/>
function CardAlunoAula() {
    const listaAlunos = alunos.map((aluno) => {
        const classe = aluno.media >= 7 ? "aprovado" : "reprovado";
        return (
            <article className="card-aluno" key="aluno.matricula">
                <h4>{aluno.nome}</h4>
                <p>Série: {aluno.serie}</p>
                <strong className={classe}>Média: {aluno.media}</strong>
                <p className={classe}>
                    {aluno.media >= 7 ? "Aprovado!" : "Reprovado!"}
                </p>
            </article>
        );
    })

    return (
       <section>
        {listaAlunos}
       </section>
    );
}

export default CardAlunoAula;
