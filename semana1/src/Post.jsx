import { useState } from "react";

function Post() {
    
    const [Botao, setBotao] = useState(true)
    const handleClicked = () => {
        setBotao(!Botao);
    }

   
    return (
    <section>
        <h2>Aula useState React</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium facere culpa excepturi quisquam commodi placeat provident, aliquid voluptate. Voluptatum, vero!</p>
        <button onClick={handleClicked}>{Botao ? "Descurtir" : "Curtir"}</button>
        <p>{Botao && "Você curtiu nossa página!"}</p>
    </section>
    );
}

export default Post;
