//Eventos = são ações que acontecem na interface, podem ser provocadas pelo usuário.
// Manipulador de evento => é uma resposta ao evento

function Eventos() {
    
    //Manipulador de eventos
    function handleClick() {
        alert("Você clicou!");
    }

    return (
        <section>
            <button onClick={handleClick}>Clique aqui</button>
            <button onClick={() => alert("Clicou novamente")}>Clique novamente</button>
            {/* <h1 onMouseEnter={() => alert("Olá")}>Titulo</h1> */}
        </section>
    );
}

export default Eventos;