function BoasVindas(){
    console.log('******** BEM VINDO A LANCHONETE *******')
    console.log('Escolha um dos itens a seguir:')

    console.log('---------------------------------------')
    console.log('|             CARDÁPIO                |')
    console.log('---------------------------------------')
    console.log('| Código |      Produto       | Preço |')
    console.log('---------------------------------------')
    console.log('|   100  |   Cachorro-quente  |R$ 3,00|')
    console.log('|   200  | Hamburguer simples |R$ 4,00|')
    console.log('|   300  |    Cheesebueguer   |R$ 5,50|')
    console.log('|   400  |       Bauru        |R$ 7,50|')
    console.log('|   500  |     Refrigerante   |R$ 3,50|')
    console.log('|   600  |        Suco        |R$ 3,00|')
    console.log('---------------------------------------')
} 

const cardapio = function(codigo, quantidade){
    BoasVindas()
    switch(codigo){
        case 100:
            var preco = 3.00
            console.log('Codigo:', codigo)
            console.log('Item: Cachorro-quente')
            console.log("Quantidade:", quantidade)
            console.log('Preço:', preco)
            valorTotal = preco * quantidade
            console.log('Valor total: R$', valorTotal)
            break
        case 200:
            var preco = 4.00
            console.log('Codigo:', codigo)
            console.log('Item: Hamburguer Simples')
            console.log("Quantidade:", quantidade)
            console.log('Preço:', preco)
            valorTotal = preco * quantidade
            console.log('Valor total: R$', valorTotal)
            break
        case 300:
            var preco = 5.50
            console.log('Codigo:', codigo)
            console.log('Item: Cheeseburguer')
            console.log("Quantidade:", quantidade)
            console.log('Preço:', preco)
            valorTotal = preco * quantidade
            console.log('Valor total: R$', valorTotal)
            break
        case 400:
            var preco = 7.50
            console.log('Codigo:', codigo)
            console.log('Item: Bauru')
            console.log("Quantidade:", quantidade)
            console.log('Preço:', preco)
            valorTotal = preco * quantidade
            console.log('Valor total: R$', valorTotal)
            break
        case 500:
            var preco = 3.50
            console.log('Codigo:', codigo)
            console.log('Item: Refrigerante')
            console.log("Quantidade:", quantidade)
            console.log('Preço:', preco)
            valorTotal = preco * quantidade
            console.log('Valor total: R$', valorTotal)
            break
        case 600:
            var preco = 2.80
            console.log('Codigo:', codigo)
            console.log('Item: Cheeseburguer')
            console.log("Quantidade:", quantidade)
            console.log('Preço:', preco)
            valorTotal = preco * quantidade
            console.log('Valor total: R$', valorTotal)
            break
        default:
            return 'Código inválido'
        }
        
}

cardapio(100,3)
cardapio(600,2)