function Calculadora(num1, operacao, num2){
    switch (operacao){
        case '+':
            console.log('Operação inserida: ', operacao)
            console.log(num1 + num2)
            break
        case '-':
            console.log('Operação inserida: ', operacao)
            console.log(num1 - num2)
            break
        case '*':
            console.log('Operação inserida: ', operacao)
            console.log(num1 * num2)
            break
        case '/':
            console.log('Operação inserida: ', operacao)
            console.log(num1 / num2)
            break
        default:
            console.log('Operação inválida!')
    }
}

Calculadora(2, '+', 3)