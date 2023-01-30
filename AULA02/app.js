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
                     * 
                     * mensagem de erro 0-10 
                     * aprovado e reprovado 7
                     */

                    //VALIDAÇÃO DE ENTRADAS VAZIAS
                    if (primeiraNota == '' || segundaNota == '' || terceiraNota == '' || quartaNota == '') {
                        console.log('ERRO: É necessário digitar todos os valores')
                            //VALIDAÇÃO DE ENTRADAS DE DADOS NÃO NUMERICAS
                    } else if (isNaN(primeiraNota) || isNaN(segundaNota) || isNaN(terceiraNota) || isNaN(quartaNota)) {
                        console.log('ERRO: O texto digitado não é um número')
                            //VALIDAÇÃO DE ENTRADAS DE DADOS ENTRE 0 ATÉ 10
                    } else if (primeiraNota < 0 || primeiraNota > 10 && segundaNota < 0 || segundaNota > 10 && terceiraNota < 0 || terceiraNota > 10 && quartaNota < 0 || quartaNota > 10) {
                        console.log('ERRO: A nota deve ser entre 0 a 10')
                    } else {
                        media = (Number(primeiraNota) + Number(segundaNota) + Number(terceiraNota) + Number(quartaNota)) / 4

                        console.log('A média é: ', media.toFixed(1)) // to fixed é pra determinar a qtd de casas após a virgula
                        if (media >= 7) {
                            console.log('APROVADO')
                        } else {
                            console.log('REPROVADO')
                        }
                    }
                })
            })

        })
    })
})