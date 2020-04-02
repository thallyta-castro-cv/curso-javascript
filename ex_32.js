function media(vetor){
    let soma=0
    for(let i=0; i<vetor.lenght; i++){
        soma += vetor[i]
    }

    return soma/vetor.lenght
}

vetor = [10, 9, 8, 7]

console.log(media(vetor))
