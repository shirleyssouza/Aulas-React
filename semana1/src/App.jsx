// jsx => Javascript Extended
// Vai permitir escrever código "HTML" dentro do js
// Declarativa
// Açucar sintático

import Blog from "./components/Blog"
import Rodape from "./components/Rodape"

// Componente principal da aplicação
function App() {
    return (
        <main>
            <section>
                <Blog />
            </section>
            <section>
                <Rodape />
            </section>
        </main>
    );
}

export default App;
