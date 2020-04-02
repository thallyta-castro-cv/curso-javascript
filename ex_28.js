const paresImpares = [0,1,2,3,4,69,45,63,21]

let par = paresImpares.map(function (e){
    if(e % 2 == 0){
        console.log('Número par:', e) 
    } else {
        console.log('Número ímpar:', e)
    }
})

function Contar(parImpar){
    let pares = 0
    let impares = 0
    for(let i=0; i < parImpar.length; i++){
        if(parImpar[i] % 2 == 0){
            pares++
        }else{
            impares++
        }
    }
    console.log(`Quantos pares? ${pares}`)
    console.log(`Quantos impares? ${impares}`)

}

Contar(paresImpares)
