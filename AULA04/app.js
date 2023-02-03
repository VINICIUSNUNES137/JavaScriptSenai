/*****************************DOC**************************************
 * Objetivo: Refator a calculadora com os cálculos: adição, subtração, divisão e multiplicação
 * Data: 03/02/2023
 * Autor: Vinicius Nunes
 * Versão: 1.1
 * *******************************************************************/

/*****************************INFOS************************************
 * 
 * 
 * 
 * 
 * *******************************************************************/

var readline = require('readline')
const { isUndefined } = require('util')
entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Valor 1: \n', function(numero1) {
    let valor1 = numero1.replace(',', '.')

    entradaDados.question('Valor 2: \n', function(numero2) {
        let valor2 = numero2.replace(',', '.')

        entradaDados.question('Escolha uma operação [ SOMAR | SUBTRAIR | MULTIPLICAR | DIVIDIR ]: \n', function(tipoCalculo) {
            //toUpperCase: converte uma string para CAIXA ALTA
            let operacao = tipoCalculo.toUpperCase()
            let resultado
                //entrada de dados vazias
            if (valor1 == '' || valor2 == '' || operacao == '') {
                console.log('ERRO: Não é possível calcular sem preencher todos os dados')
                entradaDados.close() //encerra o objeto de entrada de dados
            }
            //validação de entradas não numéricas (isNaN || typeof)
            //para typeof tem que garantir que o número já chegue convertido
            //para não reconhecer a tipagem errada
            else if (isNaN(valor1) || isNaN(valor2)) {
                console.log('ERRO: Não é possível processar o cálculo sem a entrada de valores numéricos')
                entradaDados.close()
            } else {
                if (operacao == 'SOMAR') {
                    resultado = parseFloat(valor1) + parseFloat(valor2)
                } else if (operacao == 'SUBTRAIR') {
                    resultado = parseFloat(valor1) - parseFloat(valor2)
                } else if (operacao == 'MULTIPLICAR') {
                    resultado = parseFloat(valor1) * parseFloat(valor2)
                } else if (operacao == 'DIVIDIR') {
                    if (valor2 == 0) {
                        console.log('Não é possível dividir por 0')
                        entradaDados.close()
                    } else {
                        resultado = parseFloat(valor1) / parseFloat(valor2)
                    }
                } else {
                    console.log('ERRO: A operação informada não é válida. Confira a entrada.')
                }
                if (resultado != undefined) {
                    console.log(resultado)
                }
                entradaDados.close()
            }
        })
    })
})