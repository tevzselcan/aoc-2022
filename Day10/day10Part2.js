//Read the input file
const fs = require('fs');
const input = fs.readFileSync('Day10/input.txt', 'utf8').split('\n');

let cycleCounter = 0;
let xCounter = 1;
let sumSignalStrength = 0;

let television = [];

for(let i = 0; i < 6; i++){
    television.push([]);
    for(let j = 0; j < 40; j++){
        television[i].push(' ');
    }
}

for(let i = 0; i < input.length; i++){
    let [command, number] = input[i].split(' ');
    if(command === 'noop'){
        moveCycleCRT(cycleCounter, xCounter);
        cycleCounter++;
    }
    if(command === 'addx'){
        for(let j = 0; j < 2; j++){
            moveCycleCRT(cycleCounter, xCounter);
            cycleCounter++;
            
        }
        let x = parseInt(number);
        xCounter += x;
    }
        
}

let televisionDisplay = '';

for(let i = 0; i < television.length; i++){
    for(let j = 0; j < television[i].length; j++){
        televisionDisplay += television[i][j];
    }
    televisionDisplay += '\n';
}

console.log(televisionDisplay);


function moveCycleCRT(cycleCounter, xCounter){
    if ([xCounter - 1, xCounter, xCounter + 1].includes(cycleCounter % 40)) {
        television[Math.floor((cycleCounter + 1) / 40)][((cycleCounter) % 40)] = "#";
    }
    
}