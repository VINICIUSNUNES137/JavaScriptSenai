/*****************************DOC**************************************
 * Objetivo: Arquivo de funções para realizar cálculos matemáticos
 * Data: 03/02/2023
 * Autor: Vinicius Nunes
 * Versão: 1.1
 * *******************************************************************/

//criando uma função - 01
// 
//     let valor1 = Number(numero1)
//     let valor2 = Number(numero2)
//     let operacao = tipoCalculo.toUpperCase()

//     let resultado
//     let status = true //variavel boolean para identificar o status do calculo

//     // if (operacao == 'SOMAR') {
//     //     resultado = valor1 + valor2
//     // } else if (operacao == 'SUBTRAIR') {
//     //     resultado = valor1 - valor2
//     // } else if (operacao == 'MULTIPLICAR') {
//     //     resultado = valor1 * valor2
//     // } else if (operacao == 'DIVIDIR') {
//     //     if (valor2 == 0) {
//     //         console.log('Não é possível dividir por 0')
//     //         status = false
//     //     } else {
//     //         resultado = valor1 / valor2
//     //     }
//     // } else {
//     //     console.log('ERRO: A operação informada não é válida. Confira a entrada.')
//     //     status = false
//     // }

//     //switch case é parecido com o if/else
//     switch (operacao) {
//         case 'SOMAR':
//             resultado = valor1 + valor2
//             break
//         case 'SUBTRAIR':
//             resultado = valor1 - valor2
//             break
//         case 'MULTIPLICAR':
//             resultado = valor1 * valor2
//             break
//         case 'DIVIDIR':
//             if (valor2 == 0) {
//                 console.log('Não é possível dividir por 0')
//                 status = false
//             } else {
//                 resultado = valor1 / valor2
//             }
//             break

//         default: //similar ao último else
//             console.log('ERRO: A operação informada não é válida. Confira a entrada.')
//             status = false
//     }



//     if (resultado != undefined) {
//         return resultado
//     } else {
//         return status
//     }
// }

//criando uma função - 02
const calcular = function(numero1, numero2, tipoCalculo) {
    let valor1 = Number(numero1)
    let valor2 = Number(numero2)
    let operacao = tipoCalculo.toUpperCase()

    let resultado
    let status = true //variavel boolean para identificar o status do calculo

    // if (operacao == 'SOMAR') {
    //     resultado = valor1 + valor2
    // } else if (operacao == 'SUBTRAIR') {
    //     resultado = valor1 - valor2
    // } else if (operacao == 'MULTIPLICAR') {
    //     resultado = valor1 * valor2
    // } else if (operacao == 'DIVIDIR') {
    //     if (valor2 == 0) {
    //         console.log('Não é possível dividir por 0')
    //         status = false
    //     } else {
    //         resultado = valor1 / valor2
    //     }
    // } else {
    //     console.log('ERRO: A operação informada não é válida. Confira a entrada.')
    //     status = false
    // }

    //switch case é parecido com o if/else
    switch (operacao) {
        case 'SOMAR':
            resultado = valor1 + valor2
            break
        case 'SUBTRAIR':
            resultado = valor1 - valor2
            break
        case 'MULTIPLICAR':
            resultado = valor1 * valor2
            break
        case 'DIVIDIR':
            if (valor2 == 0) {
                console.log('Não é possível dividir por 0')
                status = false
            } else {
                resultado = valor1 / valor2
            }
            break

        default: //similar ao último else
            console.log('ERRO: A operação informada não é válida. Confira a entrada.')
            status = false
    }



    if (resultado != undefined) {
        return resultado
    } else {
        return status
    }
}

//criando uma função - 03 (arrow function)
//calculos privados
const somar = (numero1, numero2) => Number(valor1) + Number(valor2);
const subtrair = (numero1, numero2) => Number(valor1) - Number(valor2);
const multiplicar = (numero1, numero2) => Number(valor1) * Number(valor2);
const dividir = (numero1, numero2) => Number(valor1) / Number(valor2);

//exportar uma função, para ser utilizada em outro arquivo
module.exports = {
    calcular
}