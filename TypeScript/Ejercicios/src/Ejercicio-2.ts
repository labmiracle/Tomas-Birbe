import readline from "node:readline/promises";
import { stdin, stdout } from "node:process";

const prompt: readline.Interface = readline.createInterface(stdin, stdout);

function generateNumber(): string {
    let number: string = "";
    for (let i: number = 0; i < 4; i++) {
        number += Math.ceil(Math.random() * 6);
    }

    return number;
}

async function getInput(): Promise<string> {
    let inputIsWrong: boolean = false;
    let exit = false;
    let number: string = "";
    while (!inputIsWrong || !exit) {
        const input: string = await prompt.question("Ingresar un numero de 4 digitos \n>");
        if (input.trim() === "exit") {
            number = input;
            exit = true;
            break;
        }

        if (Number(input) && input.length === 4) {
            number = input;
            inputIsWrong = true;
            break;
        }

        console.log("Numero invalido, intenta otra vez\n");
        inputIsWrong = false;
    }

    return number;
}

async function game(): Promise<void> {
    let finishedGame: boolean = false;
    const randomNumber: string = generateNumber();
    while (!finishedGame) {
        const input: string = (await getInput()).trim();
        const guess: string[] = [];
        if (input === "exit") {
            finishedGame = true;
            prompt.close();
            break;
        }

        if (input === randomNumber) {
            finishedGame = true;
            console.log("Ganaste!");
            break;
        }

        for (let i: number = 0; i < input.length; i++) {
            if (input[i] === randomNumber[i]) {
                guess.push("X");
                continue;
            }
            if (randomNumber.includes(input[i])) {
                guess.push("-");
                continue;
            }
        }

        console.log(guess.sort((a: string, b: string) => (a === "X" ? -1 : 1)).join(""));
    }
    console.log("Hasta la proxima!");
}

game();
