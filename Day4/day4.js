const fs = require('fs');
const readline = require('readline');


const rl = readline.createInterface({
    input: fs.createReadStream('day4Input.txt'),
    crlfDelay: Infinity,
});

let valid = 0;

rl.on('line', (line) => {
    let lineArray = line.split(',');
    let elf1 = lineArray[0];
    let elf2 = lineArray[1];

    let range1 = elf1.split('-');
    let range2 = elf2.split('-');

    let range1Start = parseInt(range1[0]);
    let range1End = parseInt(range1[1]);

    let range2Start = parseInt(range2[0]);
    let range2End = parseInt(range2[1]);

    if(range1Start >= range2Start && range1End <= range2End){
        valid++;
    }
    else if(range2Start >= range1Start && range2End <= range1End){
        valid++;
    }


});

rl.on('close', () => {
    console.log(valid);
});