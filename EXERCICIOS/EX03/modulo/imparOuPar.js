const imparOuPar = function(inicialValor, finalValor, solicitacao) {
    let valorInicial = inicialValor
    let valorFinal = finalValor
    let tipoSolicitado = solicitacao.toUpperCase()

    // if (tipoSolicitado == 'PAR') {
    //     console.log(`---------------${tipoSolicitado}---------------`)
    //     while (valorInicial <= valorFinal)
    //         resultado = valorInicial % 2
    //     if (resultado == 0) {
    //         console.log(`${valorInicial}`)
    //     }
    //     valorInicial++

    // }
    if (tipoSolicitado == 'PAR') {
        console.log(`---------------${tipoSolicitado}---------------`)
        while (valorInicial <= valorFinal) {
            resultado = valorInicial % 2
            if (resultado == 0) {
                console.log(`${valorInicial}`)
            }
            valorInicial++
        }
    } else if (tipoSolicitado == 'IMPAR') {
        console.log(`---------------${tipoSolicitado}---------------`)
        while (valorInicial <= valorFinal) {
            resultado = valorInicial % 2
            if (resultado != 0) {
                console.log(`${valorInicial}`)
            }
            valorInicial++
        }
    }
}
imparOuPar(0, 23, 'IMPAR')