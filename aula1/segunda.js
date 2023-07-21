
import PromptSync from "prompt-sync";
const prompt = PromptSync();




export function  escrevade1a10 ( ){
    console.log("Imprima de 1 a 10 utilizado o loop for");
    for (let contador = 1; contador <= 10; contador++) {
        console.log(contador);
    }
}



// Questão 2
export function contador(){
    console.log("Escreva numero pares de 2 a 10");
    for  (let contador = 0; contador <=10; contador +=2) {
        console.log( contador);
    }
}

// // Questao 3
export function contadorimpar(){
    console.log("Imprima numero impar do 0 a 50");
    for (let contador = 1; contador < 50; contador +=2){
        console.log(contador);
    }
}



// Questão 4

export function tabuada(){
    console.log("Imprima a tabuada");
    let num = parseInt(prompt("Digite um numero de 1 a 10"))
for (let index = 0; index < 11; index++) {
    console.log(`${num} x  ${index} = ${num * index}`);

}

}

// Questão 5

export function Fibonacci(){
    console.log(Fibonacci);
    let numAnterior =0;
let numAtual =1;
for (let contador = 0; contador < 8; contador++) {
    let proximoNumero = numAnterior + numAtual;
    numAnterior = numAtual;
    numAtual = proximoNumero;

    console.log(numAnterior);
    console.log( proximoNumero);

}

}


// Questão 6
export function numerosPares0a20(){ 
    console.log("numero pares de 0 a 20");
let contador= 0 
while (contador <=20 ) {
    console.log(contador);
    contador+=2
}

}

// Questão 7

export function somar1a100(){
console.log("somar de 1 a 100");
let num = 0
let contador = 1
while (contador <= 100) {
    num = contador + num;
    contador++;
    console.log(num);

}
}
 
// Questão 8


export function menorque18(){
    console.log("Menor que 18");
    let idadeDigitada

do {
    idadeDigitada = parseInt(prompt("digite sua idade"))

} while (idadeDigitada < 18);

console.log("Você e maior de Idade");
}



// Questão 9
export function contagemregressiva(){
console.log("contagem regressiva");
let numUsuario = parseInt(prompt("Digit(e um numero"))
while (numUsuario >=0) {
    console.log(numUsuario);
    numUsuario --;

}
 }



// }
// Questão 10
export function diferenteque0(){
    console.log("digite um numero");
    let nuUsuario;
do {
    nuUsuario = parseInt(prompt("Digite um numero: "));
} while (nuUsuario !=0);
console.log("Você acertou!");
}
