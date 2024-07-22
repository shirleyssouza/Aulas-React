import Menu from "./components/Menu";
import Rodape from "./components/Rodape";
import Ajuda from "./pages/Ajuda";
import Cadastro from "./pages/Cadastro";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import NovaTarefa from "./pages/NovaTarefa";
import PoliticasDePrivacidade from "./pages/PoliticasDePrivacidade";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tarefas from "./pages/Tarefas";
import { Toaster } from "react-hot-toast";
import EditarTarefa from "./pages/EditarTarefa";
// BrowserRouter: componente essencial para conduzir o roteamento no navegador.
// Route: indicamos a rota (path) e o elemento que será exibido na tela.

function App() {
    return (
        <>
            <BrowserRouter>
                <Menu />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/cadastro" element={<Cadastro />} />
                    <Route path="/ajuda" element={<Ajuda />} />
                    <Route
                        path="/p-privacidade"
                        element={<PoliticasDePrivacidade />}
                    />
                    <Route path="/tarefas" element={<Tarefas />} />
                    <Route path="/tarefas/adicionar" element={<NovaTarefa />} />
                    <Route
                        path="/tarefas/editar/:id"
                        element={<EditarTarefa />}
                    />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Rodape />
            </BrowserRouter>
            <Toaster position="bottom-right" />
        </>
    );
}

export default App;
