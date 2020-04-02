function DiasUteis(dia){
    switch (dia) {
        case 1:
            console.log('Dia: ', dia)
            console.log('Domingo - Final de semana!')
            break
        case 2:
            console.log('Dia: ', dia)
            console.log('Segunda - Dia útil!')
            break
        case 3:
            console.log('Dia: ', dia)
            console.log('Terça - Dia útil!')
            break
        case 4:
            console.log('Dia: ', dia)
            console.log('Quarta - Dia útil!')
            break
        case 5:
            console.log('Dia: ', dia)
            console.log('Quinta - Dia útil!')
            break
        case 6:
            console.log('Dia: ', dia)
            console.log('Sexta - Dia útil!')
            break
        case 7:
            console.log('Dia: ', dia)
            console.log('Sábado - Dia útil!')
            break  
        default:
            console.log('Opção Inválida!')
    }
}

DiasUteis(8)
DiasUteis(1)