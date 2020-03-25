function adicionalSaude(idade){
    valor = 100.00
    if(idade < 10){
        return valor + 80.00
    }else if(idade >= 10 && idade <= 30){
        return valor + 50.00
    }else if(idade > 30 && idade <=60){
        return valor + 95
    }else if (idade > 60) {
        return valor + 130
    }
}

console.log(adicionalSaude(30))
console.log(adicionalSaude(9))
console.log(adicionalSaude(31))
console.log(adicionalSaude(60))
console.log(adicionalSaude(61))
