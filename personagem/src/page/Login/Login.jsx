
import './login.css'
import { Link } from 'react-router-dom'


export const Login = () =>{
    return(
        <div class="container">
            <form action="" id="form" class="form">
                <div class="content">
                    
                    <div class="input-box">
                        <label for="username">username</label>
                        <input type="text"  name="username" placeholder="digite seu cpf"/>
                    </div>
                    <div class="input-box">
                        <label for="idade">email</label>
                        <input type="password"  name="senha" placeholder="digite seu email"/>
                    </div>

                     <div className='btn-comand'>
                            <Link to='/cadastro'>Cadastrar</Link>
                            <Link to='/recuperar'>Recuperar senha</Link>
                    </div>
                </div>
               
                <div class="btn-input">
                    <input type="submit" value="Acessar" id="enviar" class="btn"/>
                </div>
                

           
            
            </form>
        </div>
    )
}

// const [values, setValues] = useState({
//     cpf: '',
//     senha: ''
// })

// const navigate = useNavigate()
// const [errors, setErrors] = useState({})

// // não permitir voltar a página principal sem logar
// useEffect( () =>{
//     const authToken = localStorage.getItem('authToken');
//     if (authToken) {
//         navigate('/dashboard');
//     }
// }, [navigate])

// const handleInput = (event) => {
//     const { name, value } = event.target
//     setValues(prev => ({ ...prev, [name]: value }))
// }

// const handleSubmit = (event) => {
//     event.preventDefault();

//     console.log('Valores submetidos:', values);
//     const LoginErrors = LoginValidar(values);
//     setErrors(LoginErrors);

//     const loginData = {
//         cpf: values.cpf,
//         senha: values.senha
//     };

//     axios.post('http://192.168.18.22:8081/pages/login', loginData)
//         .then(res => {
//             console.log('Resposta do servidor:', res.data);
//             if (res.data === 'sucesso') {
//                 localStorage.setItem('authToken', 'someAuthToken');
//                 navigate('/dashboard');
//             } else {
//                 alert('Erro ao logar');
//             }
//         })
//         .catch(err => console.log(err));
// }


// create database registro;

// use registro;

// CREATE TABLE IF NOT EXISTS registros(
// 	id int primary key auto_increment,
//     nome varchar(150) not null,
//     email varchar(150) not null,
//     idade varchar(3) not null,
//     cpf varchar(11) not null unique,
//     cep varchar(9) not null,
//     endereco varchar(50) not null,
//     bairro varchar(25) not null,
//     cidade varchar(25) not null,
//     estado varchar(2) not null,
// 	numero varchar(10) not null,
//     telefone varchar(15) not null,
//     senha varchar(25) not null,
//     confirmarsenha varchar(25) not null

// );

// alter table registros modify column email not null;

// ALTER TABLE registros
// ADD COLUMN sexo VARCHAR(10),
// ADD COLUMN estadoCivil VARCHAR(20),
// ADD COLUMN rendafamiliar VARCHAR(50),
// ADD COLUMN pessoasEmCasa VARCHAR(20),
// ADD COLUMN escolaridade VARCHAR(50),
// ADD COLUMN despesasMensais VARCHAR(50),
// ADD COLUMN raca VARCHAR(20),
// ADD COLUMN filhos VARCHAR(20),
// ADD COLUMN profissao VARCHAR(50);

// ALTER TABLE registros
// ADD COLUMN dadosCriptografados TEXT NOT NULL,
// ADD COLUMN chaveCriptografia VARCHAR(255) NOT NULL;

// select*from registros;

// SELECT 1 FROM registros;

// DESC registros;

// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456';

// drop table registros;

// SELECT * FROM registros WHERE `email` = 'osmarn84@gmail.com' AND `senha` = 'Ab12345678';

// CREATE TABLE IF NOT EXISTS registros(
// 	id int primary key auto_increment,
// 	dadosCriptografados TEXT NOT NULL,
// 	chaveCriptografia VARCHAR(255) NOT NULL
    

// );