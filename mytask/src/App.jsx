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
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/config";
import { UsuarioContext } from "./contexts/UsuarioContext";

// BrowserRouter: componente essencial para conduzir o roteamento no navegador.
// Route: indicamos a rota (path) e o elemento que será exibido na tela.

function App() {
    // O estado de usuario indica se ele está logado ou não na aplicação
    // null = deslogado
    const [usuarioLogado, setusuarioLogado] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Monitora/detecta o usuário conectado/desconectado
        onAuthStateChanged(auth, (user) => {
            setusuarioLogado(user);
            // user é nulo = usuario deslogou
            // se tem objeto = usuario logou
            setLoading(false);
        });
    }, []);

    if (loading) {
        // Este elemento será exibido enquanto a aplicação estiver sendo carregada, se for null não será exibido nada.
        return <div>Carregando...</div>;
    }

    // Ususario.Provider é o elemento que irá compartilhar um valor/dado para os componentes filhos da aplicação.
    return (
        <>
            <UsuarioContext.Provider value={usuarioLogado}>
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
                        <Route
                            path="/tarefas/adicionar"
                            element={<NovaTarefa />}
                        />
                        <Route
                            path="/tarefas/editar/:id"
                            element={<EditarTarefa />}
                        />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                    <Rodape />
                </BrowserRouter>
                <Toaster position="bottom-right" />
            </UsuarioContext.Provider>
        </>
    );
}

export default App;
