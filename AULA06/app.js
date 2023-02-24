/*****************************DOC**************************************
 * Objetivo: Trabalhar com Array
 * Data: 24/02/2023
 * Autor: Vinicius Nunes
 * Versão: 1.0
 * *******************************************************************/
/*****************************INFOS************************************
 * SIMBOLOS: [ PADRÃO ] OU { JSON }
 * 
 * *******************************************************************/

const listaNomes = [
    'José',
    'Maria',
    'Luis',
    'Carlos',
    'Caio',
    'Josias'
]

const listaProdutos = [
    'TECLADO',
    'MOUSE',
    'MONITOR',
    'GABINETE',
    'PROCESSADOR',
    'NOTEBOOK',
    'FONE'
]

const manipulandoElementos = function() {

    console.log(listaNomes)
    console.log(typeof listaNomes[1] + '\n')
    console.log(`O nome do usuário é: ${listaNomes[1]}\n`)
    console.log(`QTDE: ${listaNomes.length}`)

    //PERCORRENDO UM ARRAY USANDO WHILE

    let cont = 0
    let qtdeItens = listaNomes.length
    console.log(`\n***************WHILE**************`)
    console.log(`**********EXIBINDO NOMES**********\n`)
    while (cont < qtdeItens) {
        console.log(`Nome: ${listaNomes[cont]}`)
        cont++
    }


    //PERCORRENDO UM ARRAY USANDO FOR

    let qtdeNomes = listaNomes.length

    console.log(`\n***************FOR****************`)
    console.log(`**********EXIBINDO NOMES**********\n`)

    for (let cont = 0; cont < qtdeNomes; cont++) {
        console.log(`Nome: ${listaNomes[cont]}`)
    }

    //PERCORRENDO UM ARRAY USANDO FOREACH

    console.log(`\n**************FOREACH*************`)
    console.log(`**********EXIBINDO NOMES**********\n`)

    //forEach é um método de um objeto array, que retorna uma função de callback
    listaNomes.forEach(function(nome) {
        console.log(`Nome: ${nome}`)
    })

    // ADICIONANDO ELEMENTOS NO ARRAY - PUSH (ADICIONA O ELEMENTO NA ÚLTIMA POSIÇÃO DO ARRAY)
    listaNomes.push('Alexandre')
    listaNomes.push('Marcos', 'Lucas')

    // ADICIONANDO ELEMENTOS NO ARRAY - UNSHIFT (ADICIONA O ELEMENTO NA ÚLTIMA POSIÇÃO DO ARRAY)
    listaNomes.unshift('Ana Maria', 'Leonardo')
    console.log(listaNomes)

    // REMOVENDO ELEMENTOS NO ARRAY - POP (REMOVE O ELEMENTO DA ÚLTIMA POSIÇÃO DO ARRAY)
    listaNomes.pop()
    console.log(listaNomes)

    // REMOVENDO ELEMENTOS NO ARRAY - SHIFT (REMOVE O ELEMENTO DA PRIMEIRA POSIÇÃO DO ARRAY)
    listaNomes.shift()
    console.log(listaNomes)
}

const filtrandoElementos = function() {

    //INDEXOF
    // retorno -1 (ITEM NÃO ENCONTRADO)
    // retorno >= 0 (ITEM ENCONTRADO)
    console.log(listaProdutos)
        // console.log(listaProdutos.indexOf('Fone aaaa'))

    if (listaProdutos.indexOf('Monitor') >= 0) {
        console.log('Item encontrado')
    } else {
        console.log('Item não encontrado')
    }

    //SLICE Cria uma cópia do array, podendo ser completa ou parcial
    const novosProdutos = listaProdutos.slice(0, 3)

    console.log(novosProdutos)
}

const removerElementos = function(array, nomeProduto) {
    let nome = nomeProduto
    const novosProdutos = array.slice()
    let indice = novosProdutos.indexOf(nome)
    let status

    if (indice >= 0) {
        //SPLICE - Permite remover um elemento através do indice
        novosProdutos.splice(indice, 1)
        status = true

    } else {
        status = false
    }

    if (status) {
        return novosProdutos
    } else {
        return status
    }
}

console.log(listaProdutos);
console.log(removerElementos(listaProdutos, 'MOUSE'));



// console.log(listaProdutos)
// console.log(removerElementos('TECLADO'))