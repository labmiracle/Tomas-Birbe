function computeScore(word: string) {
    const letters: string[] = word.toUpperCase().split("");
    return letters.reduce<number>((accum: number, curr: string) => (accum += getPointsFor(curr)), 0);
}

function getPointsFor(letter: string): number {
    type LettersAndPoints = [string, number];
    const lettersAndPoints: LettersAndPoints[] = [
        ["AEOIULNRST", 1],
        ["DG", 2],
        ["BCMP", 3],
        ["FHVWY", 4],
        ["K", 5],
        ["JX", 8],
        ["QZ", 10],
    ];

    return lettersAndPoints.reduce<number>((computedScore: number, pointsTuple: LettersAndPoints) => {
        const [letters, score]: LettersAndPoints = pointsTuple;
        if (letters.split("").find((ll: string) => ll === letter)) {
            return (computedScore += score);
        }
        return computedScore;
    }, 0);
}

console.log("[Ejercicio 3.3]", `zoologico vale ${computeScore("zoo")} puntos.`);
