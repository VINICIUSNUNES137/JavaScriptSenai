var imparOuParModel = require('./modulo/imparOuPar')

var readline = require('readline')

entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


console.log('*********************SISTEMA DE IMPARES E PARES*********************')
console.log('O sistema gera um conjunto de números impares, pares ou ambos, conforme solicitado')


entradaDados.question(
    'Digite o valor inicial [0 até 500]: ',
    function(inicialValor) {
        let valorInicial = Number(inicialValor)
        if (valorInicial === '') {
            console.log('ERRO: não é possível localizar os impares e pares sem a entrada de dados.')
            entradaDados.close()
        } else if (isNaN(valorInicial)) {
            console.log('ERRO: não é possível localizar os impares e pares sem a entrada de valores númericos')
            entradaDados.close()
        } else if (valorInicial < 0 || valorInicial > 500) {
            console.log('ERRO: por favor digite valores entre 0 ao 500')
            entradaDados.close()
        } else {
            entradaDados.question(
                'Digite o valor final [100 até 1000]: ',
                function(finalValor) {
                    let valorFinal = Number(finalValor)
                    if (valorFinal === '') {
                        console.log('ERRO: não é possível localizar os impares e pares sem a entrada de dados.')
                        entradaDados.close()
                    } else if (isNaN(valorFinal)) {
                        console.log('ERRO: não é possível localizar os impares e pares sem a entrada de valores númericos')
                        entradaDados.close()
                    } else if (valorFinal < 100 || valorFinal > 1000) {
                        console.log('ERRO: por favor digite valores entre 100 ao 1000')
                        entradaDados.close()
                    } else if (valorFinal < valorInicial) {
                        console.log('ERRO: o valor inicial não pode ser maior que o final')
                        entradaDados.close()
                    } else {
                        entradaDados.question(
                            'Qual conjunto você deseja? \n[IMPAR] [PAR] [AMBOS]: ',
                            function(questaoEscolha) {
                                let escolha = questaoEscolha.toUpperCase()
                                if (escolha == '') {
                                    console.log('ERRO: não é possível localizar os impares e pares a escolha.')
                                    entradaDados.close()
                                } else if (escolha != 'IMPAR' && escolha != 'PAR' && escolha != 'AMBOS') {
                                    console.log('ERRO: escolha inválida, digite apenas [IMPAR] [PAR] [AMBOS]')
                                    entradaDados.close()
                                } else {
                                    imparOuParModel.imparOuPar(valorInicial, valorFinal, escolha)
                                        // console.log('*********************FIM*********************')
                                    entradaDados.close()
                                }
                            })
                    }
                })
        }
    })