function AnoBissexto(ano){
    console.log('Ano:', ano)

    if(ano <= 0){
        return 'Ano inválido, falso'
    } else if(ano % 400 == 0){
        return 'Ano bissexto, verdadeiro'
    }else if (ano % 100 == 0){
        return 'Este ano não é bissexto, falso'
    }else if (ano % 4 == 0){
        return 'Ano bissexto, verdadeiro'
    }else{
        return 'Este ano não é bissexto, falso'
    }
}

console.log(AnoBissexto(3))
console.log(AnoBissexto(1901))
console.log(AnoBissexto(4))
console.log(AnoBissexto(100))
console.log(AnoBissexto(400))