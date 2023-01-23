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

entradaDados.question("Digite seu nome: \n", function(nome) {

    console.log('Bem vindo, ' + nome + ' ao servidor node.JS')

});