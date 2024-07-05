import Banner from "./components/Banner";
import Cabecalho from "./components/Cabecalho"
import Galeria from "./components/Galeria"
import Rodape from "./components/Rodape";

function App() {
    return (
        <>
            <Cabecalho logado ={false} />
            <main>
                <Banner />
                <Galeria />
            </main>
            <Rodape data="2024" />
        </>
    );
}

export default App;