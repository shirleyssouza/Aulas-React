import { useForm } from "react-hook-form";
import { Button } from "react-bootstrap";

function Contato() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    function Contatar(data) {
        console.log(data);
    }

return (
    <section>
        <form className="form-section p-3 mt-5" onSubmit={handleSubmit(Contatar)}>
            <h2>Contato</h2>
            <hr />
            <div>
                <label htmlFor="nome">Nome</label>
                <input type="text" id="name" className="form-control" {...register("nome", {required: "Campo obrigatório"})} />
                {errors.nome && <small className="text-danger">{errors.nome.message}</small>}
            </div>
            <div className="mt-1">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" className="form-control" {...register("email", {required: "Email inválido"})} />
                {errors.email && <small className="text-danger">{errors.email.message}</small>}
            </div>
            <div className="mt-1">
                <label htmlFor="feedback">Feedback</label>
                <textarea id="feedback" className="form-control" placeholder="Deixe aqui sua mensagem." {...register("feedback", {required: "Campo obrigatório", maxLength: {value: 150, message: "Máximo de 150 caracteres"}})} />
                {errors.feedback && <small className="text-danger">{errors.feedback.message}</small>}
            </div>
            <Button type="submit" className="mt-3 w-100">Enviar</Button>
        </form>
    </section>
);
}

export default Contato;