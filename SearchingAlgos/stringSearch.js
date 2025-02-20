// checks the number of times a smaller string appears in a longer string
function stringSearch(long, short) {
    let count = 0;
    for (let i = 0; i < long.length; i++) {
        for (let j = 0; j < short.length; j++) {
            console.log(short[j], long[i + j]);
            if (short[j] !== long[i + j]) {
                console.log("BREAK");
                break;
            }
            if (j === short.length - 1) {
                console.log("Found");
                count++;
            }
        }
    }
    return count;
}

console.log(stringSearch("lorie loled", "lo"));
