
import PromptSync from "prompt-sync";
const prompt = PromptSync();

import { escrevade1a10, contador, contadorimpar, tabuada, Fibonacci, numerosPares0a20,somar1a100, menorque18, diferenteque0, contagemregressiva } from "../aula1/segunda.js";


//menu para escolher o exercicio ou usuario escolher

let exercicio;
let continuar;

do {
    exercicio = parseInt(prompt("Digite o número que represente um exercicio de  1 a 6:  "));

    switch (exercicio) {
        case 1:
            escrevade1a10();
            break;
        case 2:
            contador();

            break;

        case 3:
            contadorimpar();
            break;

        case 4:
            tabuada();
            break;

        case 5:
            Fibonacci();
            break;

        case 6:
            numerosPares0a20();

            break;
            case 7:
            somar1a100();


            break;
        case 8:
            menorque18();
            break;

        case 9:
            contagemregressiva();
            break;
        case 10:
            diferenteque0();
            break;


        default:
            break;
    }
    continuar = prompt("Deseja continuar e ver outro exercicios:  Digite  S para sim e N para Não ").toLocaleLowerCase();
}
while (continuar === "s");


function helloworld(frase) {
    console.log(frase);
}
