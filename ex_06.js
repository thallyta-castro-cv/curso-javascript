function juros_simples(capInicial, taxaJuros, tempoAplic){
    let jurosSimples = capInicial * taxaJuros * tempoAplic
    let resultadoFinal = capInicial + jurosSimples

    console.log("Rendimento com Juros simples")
    console.log("Valor Juros:", parseFloat(jurosSimples).toFixed(2).replace(".",","))
    console.log("Valor final Aplicação:", parseFloat(resultadoFinal).toFixed(2).replace(".",","))
}

function juros_compostos(capInicial, taxaJuros, tempoAplic){
    let montante = capInicial * (1+taxaJuros) ** tempoAplic
    let jurosCompostos = montante - capInicial
    
    console.log("Rendimento com Juros Compostos")
    console.log("Valor Juros:", parseFloat(jurosCompostos).toFixed(2).replace(".",","))
    console.log("Valor final Aplicação:", parseFloat(montante).toFixed(2).replace(".",","))
}

juros_simples(1200, 0.1, 2)
juros_compostos(1200, 0.1, 2)
