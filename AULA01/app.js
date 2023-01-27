//Comentário em linha
/*
Comentário em bloco
*/

//Permite escrever qualquer mensagem no terminal
console.log('Olá, mundo!')
    //import da biblioteca p/ o usuario digitar
var readline = require('readline')
    //Criamos um objeto entradaDados com as referencias do readline
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/*O QUE É CALLBACK?
    É uma função que quando chamada ela
    retorna o seu conteúdo em uma única
    instrução em apenas um passo */


/*O QUE ACONTECE QUANDO RODAMOS O APP?
    Criamos uma função de call back para 
    receber os dados digitados pelo usuário.
    O objeto entradaDados aguarda a
     digitação do usuário, após a digitação do conteúdo 
     é acionado um call back para encaminhar os dados
     para o console.log. Esse conteúdo foi 
     encaminhado através do parametro dados da função.*/
entradaDados.question("Digite seu nome: \n", function(nome) {

    console.log('Bem vindo, ' + nome + ' ao servidor node.JS')

});