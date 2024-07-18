import Cabecalho from "./components/Cabecalho";
import Rodape from "./components/Rodape";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import Contato from "./pages/Contato";
import Login from "./pages/Login"
import NotFound from "./pages/NotFound";

function App() {
    return (
        <>
            <BrowserRouter>
                <Cabecalho logado={false} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contato" element={<Contato />} />
                    <Route path="/cadastro" element={<Cadastro />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Rodape data="2024" />
            </BrowserRouter>
        </>
    );
}

export default App;
