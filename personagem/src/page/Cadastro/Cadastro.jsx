
import { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';

import { CadastroValidar } from './CadastroValidar';
import './cadastro.css'

export const Cadastro = () =>{

    const [values, setValues] = useState({
        nome: "",
        email:"",
        senha:""
    })

    const navigate = useNavigate()
    const [errors, setErrors] = useState({})

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }))
      }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const validationErrors = CadastroValidar(values)
        setErrors(validationErrors)
    
        if (Object.keys(validationErrors).length === 0) {
          try {
           
            const res = await  axios.post('http://localhost:8081/pages/cadastro', values)
            console.log(res)    
            navigate('/')

          } catch (err) {
            console.log(err)
          }
        }
      }
    

    return(
        
        <section className="container-cadastro">
            <div className="cadastro-titulo">
                <h1>Cadastro do Usuário</h1>
            </div>

            <form className="form-cadastro" onSubmit={handleSubmit}>

                <div className="form-cadastro-box">
                    <label htmlFor="nome">Nome</label>
                    <input type="text" placeholder="digite seu nome" name="nome" id="nome" value={values.nome} onChange={handleInput} autoComplete="off"/>
                    {errors.nome && <span className='res'>{errors.nome}</span>}
                </div>

                <div className="form-cadastro-box">
                     <label htmlFor="email">Email</label>
                    <input type="email" placeholder="digite seu email" name="email" id="email" value={values.email} onChange={handleInput} autoComplete="off"/>
                    {errors.email && <span className='res'>{errors.email}</span>}
                </div>

                <div className="form-cadastro-box">
                   <label htmlFor="senha">Senha</label>
                    <input type="password" placeholder="digite sua senha" name="senha" minLength="6" value={values.senha} onChange={handleInput} id="senha" />
                    {errors.senha && <span className='res'>{errors.senha}</span>}
                </div>

                <div className="btn-cadastro">
                    <input type="submit" value="enviar" />
                </div>

                
            </form>
            <Link to='/'>Voltar</Link>
        </section>
    )
}