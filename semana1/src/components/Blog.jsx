import "./Blog.css"
import Postagem from "./Postagem"

function Blog() {
    return (
        <section className="blog-body">
            <h1 className="titulo">Praticando HTML, CSS e JS com REACT.</h1>
            <Postagem />
            <Postagem />
            <Postagem />
            <Postagem />
        </section>
    );
}

export default Blog;