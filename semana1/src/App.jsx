// jsx => Javascript Extended
// Vai permitir escrever código "HTML" dentro do js
// Declarativa
// Açucar sintático

import Blog from "./components/Blog";
import Rodape from "./components/Rodape";
import Navbar from "./components/Navbar";
import CardAluno from "./components/CardAluno";
import Produto from "./components/Produto";
import Listagem from "./components/Listagem";
import CardAlunoAula from "./components/CardAlunoAula";
import Banner from "./components/Banner";
import Eventos from "./components/Eventos"
import Contador from "./components/Contador";
import Abas from "./components/Abas";
import Carrossel from "./components/Carrossel";
import CalculadoraIMC from "./components/CalculadoraIMC";
import Post from "./components/Post"
import ConversorTemperatura from "./components/ConversorTemperatura";

// Componente principal da aplicação
function App() {
    return (
        <>
            <main>
            {/*    <Navbar logado={true} nomeUsuario="Shirley" />
                <Blog />
                <CardAluno nome="Shirley" serie="Oitava" media="8.0" />
                <Produto
                    nome="Playstation 5.0"
                    preco="2600.00"
                    desconto={true}
                    valorDesconto="16"
                />
                <Listagem />
                <CardAlunoAula /> */ }
                {/* <Contador valorInicial={20} />
                <Contador valorInicial={0} />
                <Contador valorInicial={1000} />
                <Contador /> */}
                {/* <Abas /> */}
                {/* <Carrossel /> */}
                {/* <CalculadoraIMC /> */}
                <Post />
                <ConversorTemperatura />
            </main>
            {/* <Rodape /> */}
        </>
    );
}

export default App;
