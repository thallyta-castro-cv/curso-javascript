function fatorial(numero){
    let contador = 1
    let resultado = 1
    while(contador <= numero){
        resultado = resultado * contador
        contador = contador + 1
        console.log(resultado)
    }
}

fatorial(2)