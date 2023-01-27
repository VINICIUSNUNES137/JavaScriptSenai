/*****************************DOC**************************************
 * Objetivo: Realizar a médica escolar de 4 notas
 * Data: 27/01/2023
 * Autor: Vinicius Nunes
 * Versão: 1.0
 * *******************************************************************/

/*****************************INFOS************************************
 * VAR: ESCOPO GLOBAL - VARIÁVEL
 * LET: ESCOPO LOCAL - VARIÁVEL
 * CONST: CONSTANTE - NÃO VARIA
 * 
 * *******************************************************************/


/***************************CÓDIGO***********************************/
console.log('Sistema De Calculo De Média Escolar')
    //IMPORT
var readline = require('readline')
const { stdin, stdout } = require('process')

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//CALLBACK
entradaDados.question('Digite o nome do aluno:\n', function(nome) {
    let nomeAluno = nome

    entradaDados.question('Digite a Nota 1: \n', function(nota1) {
        let primeiraNota = (nota1)

        entradaDados.question('Digite a Nota 2: \n', function(nota2) {
            let segundaNota = (nota2)

            entradaDados.question('Digite a Nota 3: \n', function(nota3) {
                let terceiraNota = (nota3)

                entradaDados.question('Digite a Nota 4: \n', function(nota4) {
                    let quartaNota = (nota4)
                    let media = 0

                    /**
                     * Conversão de String para Numero
                     *  parseInt()
                     *  parseFloat()
                     * Pode ser utilizado 
                     * Number.parseFloat() ou parseFloat() ou só Number()
                     * Operadores de comparação
                     * == (Verificar a igualdade)
                     * != (Verificar a diferença)
                     * <  (Verificar se é menor)
                     * >  (Verificar se é maior)
                     * <= (Verificar se é maior ou igual)
                     * >= (Verificar se é menor ou igual)
                     * === (Verificar a igualdade de conteudo e validar a tipagem de dados)
                     * EX: 0 == 0    V
                     * EX: 0 == '0'  V
                     * EX: 0 === '0' F
                     * Operadores Lógios
                     * OU    ||  OR
                     * E     &&  AND
                     * NÃO   !   NOT
                     */

                    //VALIDAÇÃO DE ENTRADAS VAZIAS
                    if (primeiraNota == '' || segundaNota == '' || terceiraNota == '' || quartaNota == '') {
                        console.log('ERRO: É necessário digitar todos os valores')
                    } else if (isNaN(primeiraNota) || isNaN(segundaNota) || isNaN(terceiraNota) || isNaN(quartaNota)) {
                        console.log('ERRO: O texto digitado não é um número')
                    } else {
                        media = (Number(primeiraNota) + Number(segundaNota) + Number(terceiraNota) + Number(quartaNota)) / 4

                        console.log('A média é: ', media)
                    }
                })
            })

        })
    })
})