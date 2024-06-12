
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
