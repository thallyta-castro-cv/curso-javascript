function Frutas (string) {
    switch(string){
        case 'maçã':
            console.log('Fruta: ', string)
            console.log('Não vendemos esta fruta aqui!')
            break
        case 'kiwi':
            console.log('Fruta: ', string)
            console.log("Estamos com escassez de Kiwi!")
            break
        case 'melancia':
            console.log('Fruta: ', string)
            console.log('Aqui está 3 reais o quilo')
            break 
        default:
            console.log('Fruta inválida')
    }
}

Frutas('uva')
Frutas('maçã')

