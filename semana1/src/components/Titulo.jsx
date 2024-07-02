// Titulo é o nome do componente
// Componentes são funções (nome da função mesmo nome do componente)
// Retorno da função é a parte visual
// Exportar o componente

function Titulo() {
    // O conteúdo do return é o visual
    return (
        <h2>Frases do dia</h2>
    );
}

// Disponibilizar o componente para ser utilizado em outros arquivos do projeto
export default Titulo;