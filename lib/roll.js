export function roll(sides, dice, rolls) {
    let final_result = [];
    
    for (let n=0; n<numRolls; n++) {
        let final_sum = 0;
        for (let n1=0; n1<numDice; n1++) {
            final_sum += Math.floor(Math.random() * numSides + 1);
        }
        final_result.push(final_sum);
    }

    return {sides: sides, dice: dice, rolls: rolls, results: final_result};
}
