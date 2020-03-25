function dinheiro(valor){
    resultado = valor.toFixed(2)
    console.log('Valor R$', resultado.replace('.', ','))
    
}

dinheiro(0.300004)

