import { useState } from "react";
import "./Contador.css"

function Contador(valorInicial = 0, outraprop) {
    // Para definir um estado usamos: useState
    // useState -> estado, função para alterar esse estado
    // Definimos no useState o valor inicial do estado
    // userState -> react hooks
    const [numero, setNumero] = useState(valorInicial);

    function handleIncremento() {
        // Indica ao componente que ele deve "atualizar" para corresponder a mudança do estado
        setNumero(numero + 1);
    }

    function handleDecremento() {
        if (numero > 0) {
            setNumero(numero - 1);
        }
    }

    function handleZerar() {
        setNumero(valorInicial);
    }

    // Crie um botão que ao lcicar incrementa +100
    function handleIncremento100() {
        setNumero(numero + 100)
    }

    return (
        <section>
            <h2 className={numero % 2 === 0 ? "par" : "impar"}>Contagem: {numero}</h2>
            <button onClick={handleIncremento}>+1</button>
            <button onClick={handleDecremento}>-1</button>
            <button onClick={handleIncremento100}>+100</button>
            <button onClick={handleZerar}>Zerar</button>
        </section>
    );
}

export default Contador;

// Para que o numero mude, o componente precisa renderizar novamente. Para fazer isso:
// Estado => variavel especial que sincroniza as mudança sna tela.
