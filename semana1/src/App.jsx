// jsx => Javascript Extended
// Vai permitir escrever código "HTML" dentro do js
// Declarativa
// Açucar sintático

import Blog from "./components/Blog";
import Rodape from "./components/Rodape";
import Navbar from "./components/Navbar";
import CardAluno from "./components/CardAluno";
import Produto from "./components/Produto";

// Componente principal da aplicação
function App() {
    return (
        <>
            <main>
                <Navbar logado={true} nomeUsuario="Shirley" />
                <Blog />
                <CardAluno nome="Shirley" serie="Oitava" media="8.0" />
                <Produto
                    nome="Playstation 5.0"
                    preco="2600.00"
                    desconto={false}
                    valorDesconto="16"
                />
            </main>
            <Rodape />
        </>
    );
}

export default App;
