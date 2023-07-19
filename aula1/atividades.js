// questão1

let prompt = require("prompt-sync")()


// let nome = prompt("digite seu nome: ")
// let cargo = prompt("Digite seu cargo")
// let salario = parseFloat(prompt("digite o seu salario"));

// if (salario < 1000) {


//     let calculo = parseFloat(salario * 0.1);
//     let novoSalario = parseFloat(salario + calculo);
//     console.log("O nome do funcionario e: " + nome + " O cargo e: " + cargo + " o novo salario e:" + novoSalario)
// }


// Questão 2

// let salario = parseFloat(prompt("digite o seu salario"));

// if (salario < 500) {
//     let calculo=(salario  *0.3);
//     let novoSalario = (salario + calculo);
//     console.log(" o novo salario e:" + novoSalario);
// }

// else if (salario >500){
//     console.log( " Você não tem direito");
// }


// Questão 3

// let numero =   parseInt ( prompt ("Digite um numero:"));
// let restante = numero % 2 
// console.log (restante)

// if(restante != 0){
//     console.log (" o numero e negativo")
// }
// else{
//     console.log (" o numero e positivo");
// }

// Questão 4

// let numero =   parseInt ( prompt ("Digite um numero:"));
// let restante = numero % 2 
// console.log (restante)

// if(restante != 0){
//     console.log (" o numero e impar")
// }
// else{
//     console.log (" o numero e par");
// }

// Questão 5
// let pNum = parseInt(prompt("digite o primeiro numero"));
// let sNum = parseInt(prompt("Digite o segundo numero"))

// if (pNum > sNum) {
//     console.log('O maior numero e:' + pNum)
// }
// else if (sNum > pNum) {
//     console.log('O maior numero e:' + sNum)

// }
// else {
//     console.log("Os números são iguais.");
// }

// // Questao 6

// let pNota = parseInt( prompt("digite a sua nota"));
// let sNota = parseInt(prompt ("digite a segunda nota"));
// let tnota = parseInt(prompt ("Digite a terceira nota"));
// let qNota = parseInt(prompt("Digite a quarta nota"));

// let soma = pNota + sNota + tnota +qNota 
// console.log ( 'Sua Media é: ' +soma /4);

// let media= soma/4;
// if (media > 7){
//     console.log ("Você foi aprovado  Parabens")
// }

// else if(media <=5){
//     console.log (" Reprovado ")
// }

// else (media < 5) {
// console.log (" Recuperação ")
// }


// Questão 1

// let usuario = prompt(" Digite o nome do Usuario")
// let senha = prompt("Digite a senha")

// if  (usuario == 'admin' &&  senha == 'senha123'){
//     console.log('Login bem sucedido')
// }
// else {
//     console.log( "Login ou senha incorreta")
// }

// Questão 2

// let numero = prompt('Digite um numero de 1 a 7');
// console.log(numero);
// switch (numero) {
//     case '1':
//         console.log('segunda feira');
//         break

//     case '2':
//         console.log('Terça Feira');
//         break

//     case '3':
//         console.log('Quarta-Feira');
//         break

//     case '4':
//         console.log('Quinta-Feira');
//         break
//     case '5':
//         console.log('Sexta-Feira');
//         break
//         case '6':
//             console.log('Sabado');
//             break
//             case '7':
//                 console.log('Domingo');
//                 break
//     default: 
//     console.log('Numero escolhido não e valido');

// }
// Questao 3


// let pNum = parseInt(prompt('Digite o primeiro numero'))
// let sNum = parseInt(prompt('Digite o segundo numero'))
// let tNum = parseInt(prompt('Digite o terceiro numero'))

// if (pNum < sNum && sNum < tNum) {

//     console.log('numeros em ordem são:', pNum , sNum , tNum)
// }

// else {
//     console.log('numeros irregular')
// }

// questao 4

let anoNascimento = parseInt(prompt("Digite o ano de Nascimento"))


if (anoNascimento < 2015) {

    console.log("Você e Maior de Idade");
}
else {
    console.log("Você e Menor de Idade");

}


// Questão 5

let des100 = parseInt(prompt("Você não tem direito ao desconto"))
let desc101 = parseInt(prompt("Você ganhou 10% de desconto"))
let desc200 = parseInt(prompt("v=Você ganhou 20% de desconto"))
