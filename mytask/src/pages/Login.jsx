import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { entrarGoogle, loginUsuario } from "../firebase/auth";

// Aplicar validação nos campos de Login
// Email (obrigatório)
// Senha (obrigatório, min 6 caracteres)

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const navigate = useNavigate();

    function entrar(data) {
        // data é um objeto com os dados do formulário
        loginUsuario(data.email, data.senha)
            .then(() => {
                toast.success("Bem-vindo(a)!");
                navigate("/tarefas");
            })
            .catch(() => {
                toast.error("Email e/ou senha incorreta!");
            });
    }

    function handleEntrarGoogle() {
        entrarGoogle().then(() => {
            toast.success("Bem-vindo(a)!");
            navigate("/tarefas");
        });
    }

    return (
        <main>
            <form className="form-section" onSubmit={handleSubmit(entrar)}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        className="form-control"
                        {...register("email", {
                            required: "O email é obrigatório.",
                        })}
                    />
                    {errors.email && (
                        <small className="invalid">
                            {errors.email.message}
                        </small>
                    )}
                </div>
                <div>
                    <label htmlFor="senha">Senha:</label>
                    <input
                        type="password"
                        id="senha"
                        className="form-control"
                        {...register("senha", {
                            required: "A senha é obrigatória.",
                            minLength: {
                                value: 6,
                                message: "Mínimo de 6 caracteres.",
                            },
                        })}
                    />
                    {errors.senha && (
                        <small className="invalid">
                            {errors.senha.message}
                        </small>
                    )}
                </div>
                <Button variant="dark" className="mt-1 w-100" type="submit">
                    Entrar
                </Button>
                <Button
                    variant="danger"
                    className="mt-1 w-100"
                    type="button"
                    onClick={handleEntrarGoogle}
                >
                    Entrar com o Google
                </Button>
            </form>
        </main>
    );
}
export default Login;
