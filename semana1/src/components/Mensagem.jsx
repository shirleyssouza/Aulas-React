// Importante: importar para que os estilos do arquivo façam parte do projeto
import "./Mensagem.css"

// Exercício: Aplicar props ao componente Mensagem, as propriedades são: 
// textoTitulo, nomeAutor, paragrafo e linkImagem. 
// Adapte o componente para receber props.
// Até 12h

function Mensagem(props) {
 
    return (
        <section className="mensagem-corpo">
            <h2 className="mensagem-titulo">{props.textoTitulo}</h2>
            <img src={props.linkImagem} alt="Imagem da mensagem" />
            <p className="paragrafo">{props.paragrafo}</p>
            <small>Criado por: {props.nomeAutor}</small>
        </section>
    );
}

export default Mensagem;
