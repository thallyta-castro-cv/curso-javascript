let lado_1 = 2
let lado_2 = 2
let lado_3 = 1

const ImprimirResultado = function(lado_1, lado_2, lado_1){
if (lado_1 == lado_2 && lado_2 == lado_3){
    console.log("Triângulo equilátero -Os 3 lados são iguais! ")
} else if( lado_1 == lado_2 || lado_2 == lado_3 || lado_1 == lado_3){
    console.log("Triângulo Isósceles - Dois dos 3 lados são iguais!")
} else{
    console.log("Triângulo escaleno - Todos os lados são diferentes!")
    }
}

console.log("Primeiro lado:", lado_1,
            "Segundo lado:", lado_2,
            "Terceiro lado:", lado_3)
ImprimirResultado()