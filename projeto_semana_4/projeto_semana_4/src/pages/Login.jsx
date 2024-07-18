import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

function Login() {
    const {register, handleSubmit, formState: {errors} } = useForm();
    
    function logar(data) {
        console.log(data);
    };

    return (
        <section>
            <form
                className="form-section p-3 mt-5"
                onSubmit={handleSubmit(logar)}
            >
                <h2>Login</h2>
                <hr />
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        className="form-control"
                        {...register("email", { required: "Email inválido!" })}
                    />
                    {errors.email && (
                        <small className="text-danger">{errors.email.message}</small>
                    )}
                </div>
                <div>
                    <label htmlFor="senha">
                        Senha
                    </label>
                    <input
                        type="password"
                        id="senha"
                        className="form-control"
                        {...register("senha", {required: "Senha inválida!", minLength: {value: 6, message: "Minimo de 6 caracteres."}, maxLength: {value: 12, message: "Máximo de 12 caracteres."}})}
                    />
                    {errors.senha && <small className="text-danger">{errors.senha.message}</small>}
                </div>
                <Button type="submit" className="mt-3 w-100">
                    Entrar
                </Button>
            </form>
        </section>
    );
}

export default Login;