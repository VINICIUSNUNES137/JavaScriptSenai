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
var matematica = require('./modulo/calculadora.js')

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
                resultado = matematica.calcular(valor1, valor2, operacao)
                console.log(resultado)
                entradaDados.close()
            }

        })
    })
})