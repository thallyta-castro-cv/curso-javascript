import React from 'react'
import './Login.css'


export default ()  =>    
<>
    <div className='title'>
            <img className="logo"/>   
                 <hr />
             <form>
                <label for="email">Usuário</label>
                    <input type="email" id="email"/><br />
                    <label for="senha">Senha</label>
                    <input type="password" id="senha"/>
                    <button>Login</button><br /><br />
                            <small> Não tem cadastro? 
                                <a href="index.html">
                                Cadastre-se aqui!
                            </a>
                        </small>
              </form>
              <div class='goHome'><strong> 
                    Cliente? <br /> 
                   <a href='index.html'>Clique aqui para acessar a página inicial </a></strong>
    </div>
       </div>
       <footer class='rodape'> @Copiright - Todos os Direitos reservados </footer>
       
</>
