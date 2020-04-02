function Carros(modelo){
    switch (modelo){
        case 'hatch':
            console.log('Modelo: ', modelo)
            console.log(" Compra efetuada com sucesso!")
            break
        case 'sedan', 'motocicleta', 'caminhonete':
            console.log('Modelo: ', modelo)
            console.log('Tem certeza que não prefere este modelo? Hatch?')
            break
        default:
            console.log('Modelo: ', modelo)
            console.log('Não trabalhamos com este tipo de automóvel aqui')
    }
}

Carros('hatch')
Carros('caminhonete')
Carros('brasília')