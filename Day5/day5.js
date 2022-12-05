const fs = require('fs');
const readline = require('readline');


const rl = readline.createInterface({
  input: fs.createReadStream('Day5/day5Input.txt'),
  crlfDelay: Infinity,
});

let readingCrates = true;
let crates = [];

 
rl.on('line', (line) => {
  if(line == ''){
    readingCrates = false;
  }
  if(readingCrates){
    const crate = line.split(' ');
    for(let i = 0; i < crate.length; i++){
      if(crate[i] == '' && crate[i + 1] == '' && crate[i + 2] == ''){
          crate.splice(i, 3);
      }
    }
    if(crates.length == 0){
      for(let i = 0; i < crate.length; i++){
          crates.push([]);
      }
    }

    for(let i = 0; i < crate.length; i++){
        if(crate[i] != '' && isNaN(crate[i]) ){
        crates[i].push((crate[i]));
        }
    }    
    }
    else if(line !== ''){
        let splitLine = line.split(' ');
        let numberOfCratesToMove = parseInt(splitLine[1]);
        let moveFrom = parseInt(splitLine[3]);
        let moveTo = parseInt(splitLine[5]);

        const getTheCrates = crates[moveFrom - 1].slice(0, numberOfCratesToMove);
        getTheCrates.reverse(); //For part 2 just comment out this line
        crates[moveFrom - 1].splice(0, numberOfCratesToMove);
        crates[moveTo - 1].unshift(...getTheCrates);

    }
  
  
});

rl.on('close', async () => {
    let result = "";
    for(let i = 0; i < crates.length; i++){
        result = result + crates[i][0];
    }
    console.log(result.replaceAll("[", "").replaceAll("]", ""));
});



 
