function jewelOnStones(jewelType: string, stones: string): number {
    let amountOfJewels = 0;
    for (const stone of stones) {
        if (stone === jewelType) {
            amountOfJewels += 1;
        }
    }

    return amountOfJewels;
}

function countJewels(jewelTypes: string, stones: string): number {
    const amountOfJewels = jewelTypes.split("").reduce((amountOfJewels, jewelType) => {
        return (amountOfJewels += jewelOnStones(jewelType, stones));
    }, 0);

    return amountOfJewels;
}

console.assert(countJewels("aA", "aAAbbbb") === 3);
console.assert(countJewels("z", "ZZ") === 0);
