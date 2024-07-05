import "./Produto.css";

function Produto(props) {
    let valorComDesconto = props.preco - (props.preco /100 * props.valorDesconto)
    return (
        <section className="produto">
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

/*
import "./CardProduto.css";

// <CardProduto nome="" precoUnitario={0} desconto={0}/>
function CardProduto(props) {
    const valorDesconto = props.precoUnitario - props.precoUnitario * (props.desconto/100);

    return (
        <article className="card-produto">
            <p>{props.nome}</p>
            {props.desconto > 0 && <p className="grifado">R$ {props.precoUnitario}</p>}
            {props.desconto > 0 ? <h4>R$ {valorDesconto}</h4> : <h4>R$ {props.precoUnitario}</h4>}
            {props.desconto > 0 && <p className="desconto">{props.desconto}% OFF</p>}
        </article>
    );
}

export default CardProduto;
*/