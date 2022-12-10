//Read the input file
const fs = require('fs');
const input = fs.readFileSync('Day10/input.txt', 'utf8').split('\n');

let cycleCounter = 0;
let xCounter = 1;
let sumSignalStrength = 0;


for(let i = 0; i < input.length; i++){
    let [command, number] = input[i].split(' ');
    if(command === 'noop'){
        cycleCounter++;
        calculateSignalStrength(cycleCounter);

    }
    if(command === 'addx'){
        for(let j = 0; j < 2; j++){
            cycleCounter++;
            calculateSignalStrength(cycleCounter);
        }
        let x = parseInt(number);
        xCounter += x;

    }

        
    
    
    
}

console.log(sumSignalStrength);

function calculateSignalStrength(cycleCounter){
    switch(cycleCounter){
        case 20:
            sumSignalStrength += cycleCounter * xCounter;
            break;
        case 60:
            sumSignalStrength += cycleCounter * xCounter;
            break;
        case 100:
            sumSignalStrength += cycleCounter * xCounter;
            break;
        case 140:
            sumSignalStrength += cycleCounter * xCounter;
            break;
        case 180:
            sumSignalStrength += cycleCounter * xCounter;
            break;
        case 220:
            sumSignalStrength += cycleCounter * xCounter;
            break;
    }
}