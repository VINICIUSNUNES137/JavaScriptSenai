console.log('*****************SISTEMA DE CÁLCULO*****************')
    //IMPORT
var readline = require('readline')
const { stdin, stdout } = require('process')

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//CALLBACK
entradaDados.question('Digite o NÚMERO de acordo com a operação: \n1-SOMA\n2-SUBTRAÇÃO\n3-MULTIPLICAÇÃO\n4-DIVISÃO: \nESCOLHA: ', function(tipo) {
    let tipoOperacao = tipo
    let resultado = 0

    if (isNaN(tipoOperacao)) {
        console.log('ERRO: Célula não pode receber essa informação, por favor, digite apenas o número de acordo com a operação!')
    } else if (tipoOperacao == '') {
        console.log('ERRO: Célula vazia, por favor, digite o número da operação!')
    } else if (Number(tipoOperacao) != 1 && Number(tipoOperacao) != 2 && Number(tipoOperacao) != 3 && Number(tipoOperacao) != 4) {
        console.log('ERRO: Não foi possível selecionar a operação, por favor, digite de 1 até 4')
    } else if (tipoOperacao == '1') {
        console.log('*****************SOMA*****************')
        entradaDados.question('Digite o Valor 1: \n', function(valor1) {
            let primeiroValor = parseFloat(valor1.replace(",", "."))
            entradaDados.question('Digite o Valor 2: \n', function(valor2) {
                let segundoValor = parseFloat(valor2.replace(",", "."))
                if (isNaN(primeiroValor) || isNaN(segundoValor)) {
                    console.log('ERRO algum valor digitado não é um número')
                } else if (primeiroValor == '' || segundoValor == '') {
                    console.log('ERRO não é possível processar o cálculo com a célula vazia')
                } else {
                    resultado = (primeiroValor) + (segundoValor)
                    console.log('O valor da SOMA é: ' + resultado)
                }
            })
        })
    } else if (tipoOperacao == '2') {
        console.log('**************SUBTRACAO*****************')
        entradaDados.question('Digite o Minuendo: \n', function(valor1) {
            let primeiroValor = parseFloat(valor1.replace(",", "."))
            entradaDados.question('Digite o Subtraendo: \n', function(valor2) {
                let segundoValor = parseFloat(valor2.replace(",", "."))
                if (isNaN(primeiroValor) || isNaN(segundoValor)) {
                    console.log('ERRO algum valor digitado não é um número')
                } else if (primeiroValor == '' || segundoValor == '') {
                    console.log('ERRO não é possível processar o cálculo com a célula vazia')
                } else {
                    resultado = (primeiroValor) - (segundoValor)
                    console.log('O valor da SUBTRAÇÃO é: ' + resultado)
                }

            })
        })
    } else if (tipoOperacao == '3') {
        console.log('**************MULTIPLICAÇÃO*****************')
        entradaDados.question('Digite o Multiplicando: \n', function(valor1) {
            let primeiroValor = parseFloat(valor1.replace(",", "."))
            entradaDados.question('Digite o Multiplicador: \n', function(valor2) {
                let segundoValor = parseFloat(valor2.replace(",", "."))
                if (isNaN(primeiroValor) || isNaN(segundoValor)) {
                    console.log('ERRO algum valor digitado não é um número')
                } else if (primeiroValor == '' || segundoValor == '') {
                    console.log('ERRO não é possível processar o cálculo com a célula vazia')
                } else {
                    resultado = (primeiroValor) * (segundoValor)
                    console.log('O valor da Multiplicação é: ' + resultado)
                }

            })
        })
    } else if (tipoOperacao == '4') {
        console.log('**************DIVISÃO*****************')
        entradaDados.question('Digite o Dividendo: \n', function(valor1) {
            let primeiroValor = parseFloat(valor1.replace(",", "."))
            entradaDados.question('Digite o Divisor: \n', function(valor2) {
                let segundoValor = parseFloat(valor2.replace(",", "."))
                if (isNaN(primeiroValor) || isNaN(segundoValor)) {
                    console.log('ERRO algum valor digitado não é um número')
                } else if (primeiroValor == 0 || segundoValor == 0) {
                    console.log('ERRO não é possível realizar a operação com o número 0')
                } else if (primeiroValor == '' || segundoValor == '') {
                    console.log('ERRO não é possível processar o cálculo com a célula vazia')
                } else {
                    resultado = (primeiroValor) / (segundoValor)
                    console.log('O valor da Divisão é: ' + resultado)
                }

            })
        })
    }



})