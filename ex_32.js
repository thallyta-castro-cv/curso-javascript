function media(vetor){
    let soma = 0 
    for(let i=0; i<vetor.length; i++){
        soma += vetor[i]
    }

    return soma/vetor.length
}

let vetor = [10, 9, 8, 7]

console.log(vetor)
console.log("A média desses valores é:")
console.log(media(vetor))


