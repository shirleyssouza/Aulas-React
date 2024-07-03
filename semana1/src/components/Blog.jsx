import "./Blog.css"
import Postagem from "./Postagem"

function Blog() {
    return (
        <section className="blog-body">
            <h1 className="titulo">Praticando HTML, CSS e JS com REACT.</h1>
            <Postagem
                titulo="Aprendendo React!"
                desc=" Criado em 2011 pelo Facebook, com a criação de views declarativas e baseando-se em componentes, possuí o intuito de otimizar a atualização e a sincronização de atividades simultâneas no feed de notícias da rede social e melhorar a manutenção de código."
                linkImagem="https://www.svgrepo.com/show/303500/react-1-logo.svg"
                descImg="React Logo"
            />
            <Postagem
                titulo="CSS é muito bom!"
                desc="Cascading Style Sheets é um mecanismo para adicionar estilos a uma página web, aplicado diretamente nas tags HTML ou ficar contido dentro das tags <style>. Também é possível, adicionar estilos adicionando um link para um arquivo CSS que contém os estilos"
                linkImagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAtzoXRGqGGB95Fm3AwelyqF43jeL6clvzMw&s"
                descImg="CSS Logo"
            />
            <Postagem
                titulo="JS é o momento!"
                desc="JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web."
                linkImagem="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
                descImg="Javascript logo"
            />
        </section>
    );
}

export default Blog;