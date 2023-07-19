let prompt = require("prompt-sync")()

// for (let contador = 1; contador <= 10; contador++) {
//     console.log(contador);
// }

// Questão 2

// for  (let contador = 0; contador <=10; contador +=2) {
//     console.log( contador);
// }


// // // Questao 3
// for (let contador = 1; contador < 50; contador +=2){
//     console.log(contador);
// }
// Questão 4


// let num = parseInt(prompt("Digite um numero de 1 a 10"))
// for (let index = 0; index < 11; index++) {
//     console.log(`${num} x  ${index} = ${num * index}`);

// }
// Questão 5

// let numAnterior =0;
// let numAtual =1;
// for (let contador = 0; contador < 8; contador++) {
//     let proximoNumero = numAnterior + numAtual;
//     numAnterior = numAtual;
//     numAtual = proximoNumero;

//     console.log(numAnterior);
//     console.log( proximoNumero);

// }

// Questão 6
// let contador= 0 
// while (contador <=20 ) {
//     console.log(contador);
//     contador+=2
// }

// Questão 7

// let num = 0
// let contador = 1
// while (contador <= 100) {
//     num = contador + num;
//     contador++;
//     console.log(num);

// } 
// Questão 8


// let idadeDigitada

// do {
//     idadeDigitada = parseInt(prompt("digite sua idade"))

// } while (idadeDigitada < 18);

// console.log("Você e maior de Idade");


// Questão 9

// let numUsuario = parseInt(prompt("Digite um numero"))
// while (numUsuario >=0) {
//     console.log(numUsuario);
//     numUsuario --;


// }
// Questão 10
let nuUsuario;
do {
    nuUsuario = parseInt(prompt("Digite um numero: "));
} while (nuUsuario !=0);
console.log("Você acertou!");