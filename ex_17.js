const AumentoSalario = function (plano, salario) {
    switch (plano) {
        case 'A': 
            console.log("Pedro se enquadra no Plano:", plano)
            console.log("Aumento de 10%")
            salario = salario * (10/100) + salario
            console.log("O salário atual é: R$", salario.toFixed(2))
            break  
        case 'B':
            console.log("Pedro se enquadra no Plano:", plano)
            console.log("Aumento de 15%")
            salario = salario * (15/100) + salario
            console.log("O salário atual é: R$", salario.toFixed(2))
            break   
        case 'C':
            console.log("Pedro se enquadra no Plano:", plano)
            console.log("Aumento de 20%")
            salario = salario * (20/100) + salario
            console.log("O salário atual é: R$", salario.toFixed(2))
            break 
        default:
            return 'Plano Inválido'      
    }
}

AumentoSalario('A', 1200.00)
AumentoSalario('B', 1200.00)
AumentoSalario('C', 1200.00)