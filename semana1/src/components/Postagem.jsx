import "./Postagem.css"

function Postagem(props) {
    return (
        <article className="post">
            <h2>{props.titulo}</h2>
            <div className="blocos">
            <p>
               {props.desc}
            </p>
            <img
                src={props.linkImagem} alt={props.descImg}
            />
            </div>
        </article>
    );
}

export default Postagem;