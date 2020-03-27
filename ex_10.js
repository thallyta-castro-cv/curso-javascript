function VerificaDivisaoTres(inteiro){
    if(inteiro / 3 && inteiro % 3 == 0){
        return true
    } else {
        return false
    }
}
console.log(VerificaDivisaoTres(233))
console.log(VerificaDivisaoTres(234))
