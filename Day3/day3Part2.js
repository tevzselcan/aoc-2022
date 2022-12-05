const fs = require('fs');
const readline = require('readline');


const rl = readline.createInterface({
    input: fs.createReadStream('day3Input.txt'),
    crlfDelay: Infinity,
});

let tocke = 0;
let lineCounter = 0;

let line1 = '';
let line2 = '';
let line3 = '';




rl.on('line', (line) => {

    let sameLetter = '';
    
    if(lineCounter == 3){
        lineCounter = 0;
        line1 = '';
        line2 = '';
        line3 = '';
    }
    if(lineCounter == 0){
        line1 = line;
    } else if(lineCounter == 1){
        line2 = line;
    } else if(lineCounter == 2){
        line3 = line;
    for (let i = 0; i < line1.length; i++) {
        for(let j = 0; j < line2.length; j++) {
            for(let k = 0; k < line3.length; k++) {
                if (line1[i] === line2[j] && line2[j] === line3[k]) {
                    sameLetter = line1[i];
                    break;
                }
            }
        }
    }
    }


    

    

    lineCounter++;
    if(sameLetter != ''){
        if (sameLetter >= 'a' && sameLetter <= 'z') {
            tocke += sameLetter.charCodeAt(0) - 96;
        } else if (sameLetter >= 'A' && sameLetter <= 'Z') {
            tocke += sameLetter.charCodeAt(0) - 38;
        }
    }
});

rl.on('close', () => {
    console.log(tocke);
});