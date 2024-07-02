import "./Postagem.css"

function Postagem() {
    return (
        <section className="post">
            <h2>Aprendendo React</h2>
            <div className="blocos">
            <p>
                Criado em 2011 pelo Facebook, com a criação de views
                declarativas e baseando-se em componentes, possuía o intuito de
                otimizar a atualização e a sincronização de atividades
                simultâneas no feed de notícias da rede social e melhorar a
                manutenção de código.
            </p>
            <img
                src="https://www.svgrepo.com/show/303500/react-1-logo.svg"
                alt="React logo"
            />
            </div>
        </section>
    );
}

export default Postagem;