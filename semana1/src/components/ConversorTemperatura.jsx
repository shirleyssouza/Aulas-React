import { useState } from "react";

function ConversorTemperatura() {
    const [Celsius, setCelsius] = useState(0);
    const [Fahrenheit, setFahrenheit] = useState(0);

    function handleCelsius(event) {
        const input = event.target;
        const valor = input.value;

        setCelsius(valor);
    }

    function handleCalculo() {
        const resultado = Celsius * 1.8 + 32;

        setFahrenheit(resultado);
    }

    return (
        <section>
            <hr />
            <label>Digite a temperatura em celsius: <input type="number" placeholder="Digite a temperatura" onChange={handleCelsius}/></label>
            <button onClick={handleCalculo}>Calcular</button>
            <p> A conversão de Celsius para Fahrenheit é: {Fahrenheit}</p>
        </section>
    );
}

export default ConversorTemperatura;