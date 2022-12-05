const fs = require('fs');
const readline = require('readline');


const rl = readline.createInterface({
    input: fs.createReadStream('day3Input.txt'),
    crlfDelay: Infinity,
});

let tocke = 0;

//a-z 1-26
//A-Z 27-52

rl.on('line', (line) => {

    let firstHalf = line.slice(0, line.length/2);
    let secondHalf = line.slice(line.length/2, line.length);

    let sameLetter = '';
    for (let i = 0; i < firstHalf.length; i++) {
        for(let j = 0; j < secondHalf.length; j++) {
            if (firstHalf[i] === secondHalf[j]) {
                sameLetter = firstHalf[i];
                break;
            }
        }
    }


    if (sameLetter >= 'a' && sameLetter <= 'z') {
        tocke += sameLetter.charCodeAt(0) - 96;
    } else if (sameLetter >= 'A' && sameLetter <= 'Z') {
        tocke += sameLetter.charCodeAt(0) - 38;
    }


});

rl.on('close', () => {
    console.log(tocke);
});