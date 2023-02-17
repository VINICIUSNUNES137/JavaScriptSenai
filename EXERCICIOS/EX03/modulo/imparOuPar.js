const imparOuPar = function(inicialValor, finalValor, solicitacao) {
    let valorInicial = inicialValor
    let valorFinal = finalValor
    let tipoSolicitado = solicitacao.toUpperCase()
    let contador
    let contadorPar = 0
    let contadorImpar = 0

    if (tipoSolicitado == 'PAR') {
        console.log(`---------------${tipoSolicitado}---------------`)
        while (valorInicial <= valorFinal) {
            resultado = valorInicial % 2
            if (resultado == 0) {
                console.log(`${valorInicial}`)
                contadorPar++
            }
            valorInicial++
        }
        console.log('---------------QTDE----------------')
        console.log('PARES: ' + contadorPar)
    } else if (tipoSolicitado == 'IMPAR') {
        console.log(`---------------${tipoSolicitado}---------------`)
        while (valorInicial <= valorFinal) {
            resultado = valorInicial % 2
            if (resultado != 0) {
                console.log(`${valorInicial}`)
                contadorImpar++
            }
            valorInicial++
        }

        console.log('---------------QTDE----------------')
        console.log('IMPARES: ' + contadorImpar)
    } else if (tipoSolicitado == 'AMBOS') {
        contador = valorInicial
        console.log(`---------------PAR---------------`)
        while (contador <= valorFinal) {
            resultado = contador % 2
            if (resultado == 0) {
                console.log(`${contador}`)
                contadorPar++
            }
            contador++
        }
        contador = valorInicial
        console.log(`---------------IMPAR---------------`)

        while (contador <= valorFinal) {
            resultado = contador % 2
            if (resultado != 0) {
                console.log(`${contador}`)
                contadorImpar++
            }
            contador++
        }
        console.log('---------------QTDE----------------')
        console.log('PARES: ' + contadorPar)
        console.log('IMPARES: ' + contadorImpar)
    }
}

module.exports = {
    imparOuPar
}