import readline from "node:readline/promises";
import { stdin, stdout } from "node:process";

enum CardType {
    BASTO = "basto",
    ESPADA = "espada",
    ORO = "oro",
    COPA = "copa",
}

type Player = {
    name: string;
    card: Card;
};

type Card = [number, CardType];

const prompt: readline.Interface = readline.createInterface(stdin, stdout);

function generateCardNumber(): number {
    const randomNumber: number = Math.floor(Math.random() * 12) + 1;

    if (randomNumber >= 1 && randomNumber <= 12) {
        return randomNumber;
    }

    return 1;
}

function generateCardType(): CardType {
    const arrayWithTypes: CardType[] = Object.values(CardType);

    const randomType: CardType = arrayWithTypes[Math.floor(Math.random() * 4)];

    return randomType;
}

function pickOne(): Card {
    return [generateCardNumber(), generateCardType()];
}

async function game() {
    const playerOne: Player = {
        name: await prompt.question("Nombre del jugador 1: \n> "),
        card: pickOne(),
    };
    const playerTwo: Player = {
        name: await prompt.question("Nombre del jugador 2: \n> "),
        card: pickOne(),
    };

    while (playerOne.card[0] === playerTwo.card[0] && playerOne.card[1] === playerTwo.card[1]) {
        playerTwo.card === pickOne();
    }

    console.log(`${playerOne.name} obtuvo la carta ${playerOne.card[0]} de ${playerOne.card[1]}`);
    console.log(`${playerTwo.name} obtuvo la carta ${playerTwo.card[0]} de ${playerTwo.card[1]}`);
    prompt.close();
}

game();
