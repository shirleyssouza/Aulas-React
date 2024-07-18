import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

function Cadastro() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    function cadastrar(data) {
        console.log(data);
    }

    return (
        <section>
            <form
                className="form-section p-3 mt-5"
                onSubmit={handleSubmit(cadastrar)}
            >
                <h2>Cadastro</h2>
                <hr />
                <div>
                    <label htmlFor="nome">Nome</label>
                    <input
                        type="text"
                        id="nome"
                        className="form-control"
                        {...register("nome", { required: "Campo obrigatório"})}
                    />
                    {errors.nome && <small className="text-danger">{errors.nome.message}</small>}
                </div>
                <div className="pt-1">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" className="form-control" {...register("email", {required: "Email inválido"})} />
                    {errors.email && <small className="text-danger">{errors.email.message}</small>}
                </div>
                <div className="pt-1">
                    <label htmlFor="nascimento">Data de nascimento</label>
                    <input
                        type="date"
                        id="nascimento"
                        className="form-control"
                    />
                </div>
                <div className="pt-1">
                    <label htmlFor="senha">Senha</label>
                    <input
                        type="password"
                        id="senha"
                        className="form-control"
                        {...register("senha", {required: "Campo obrigatório", minLength: {value: 6, message: "Minimo de 6 caracteres"}, maxLength: {value: 12, message: "Máximo de 12 caracteres"}})}
                    />
                    {errors.senha && <small className="text-danger">{errors.senha.message}</small>}
                </div>
                <Button className="mt-3 w-100" type="submit">
                    Cadastrar
                </Button>
            </form>
        </section>
    );

}

export default Cadastro;
