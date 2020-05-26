import './Pricefino.css'
import React from "react";
import fino from "./pricefino"
import plastico from "./priceplastico"
import outros from "./priceoutros"

export default (props) => {
    
    function getLinhas() {
        return fino.map((produto, i) => {
            return (
                <tr key={produto.id} 
                    className={i % 2 === 0 ? 'Par' : 'Impar'}>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>R$ {produto.preco.toFixed(2).replace('.', ',')}</td>
                </tr>
            )
        })
    }

    function getLinhasPlastico() {
        return plastico.map((produto, i) => {
            return (
                <tr key={produto.id} 
                    className={i % 2 === 0 ? 'Par' : 'Impar'}>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>R$ {produto.preco.toFixed(2).replace('.', ',')}</td>
                </tr>
            )
        })
    }

    function getLinhasOutros() {
        return outros.map((produto, i) => {
            return (
                <tr key={produto.id} 
                    className={i % 2 === 0 ? 'Par' : 'Impar'}>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>R$ {produto.preco.toFixed(2).replace('.', ',')}</td>
                </tr>
            )
        })
    }   

    return (
        <React.Fragment>
        <div className="Title">
       
        <h2>
        <img className="logo"/>< br />
            Bem vindo a categoria de Preços de materiais recicláveis!
        </h2>
        <p className='foo'>  Separamos nossa tabela de preços de acordo com a categoria de materias. O preço informado refere-se ao preço por kilo. Em relação ao alumínio, para que possamos pagar o <strong>perfil comum, perfil pintado, panela e aluminio, </strong>os mesmos deverão estar limpos. Dúvidas entrar em contato.</p>
        </div>
        <div className="TabelaProdutos">
         
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {getLinhasOutros()}
                </tbody>
            </table>

            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {getLinhasPlastico()}
                </tbody>
                </table>

                <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {getLinhas()}
                </tbody>
            </table>
                 </div>
          
       </React.Fragment>
    );
};