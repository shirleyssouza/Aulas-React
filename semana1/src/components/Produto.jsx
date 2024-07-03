import "./Produto.css";

function Produto(props) {
    let valorComDesconto = props.preco - (props.preco /100 * props.valorDesconto)
    return (
        <section class="produto">
            <h3>{props.nome}</h3>
            <h2>
                {props.desconto 
                ? <font color="gray"><strike>R$ {props.preco}</strike></font>
                : `R$ ${props.preco}`
                }
            </h2>
            <h2>{props.desconto && `R$ ${valorComDesconto}.00`}</h2>
            <p>{props.desconto && <mark>{props.valorDesconto} % off</mark>}</p>
        </section>
    );
}

export default Produto;
