const fs = require('fs');
const readline = require('readline');


  const rl = readline.createInterface({
    input: fs.createReadStream('day2Input.txt'),
    crlfDelay: Infinity,
  });

  //ELFS
  //A rock 1
  //B paper 2 
  //C scissors 3

  //ME
  //X loose
  //Y draw
  //Z win

  //Lose 0
  //Win 6
  //Draw 3

  let myScore = 0;

  rl.on('line', (line) => {
    let split = line.split(' ');
    let elf = split[0];
    let outcome = split[1];

    switch(outcome){
        case 'Y': //Draw
            switch(elf){
                case 'A':
                    myScore += 3;
                    myScore += 1;
                    break;
                case 'B':
                    myScore += 3;
                    myScore += 2;
                    break;
                case 'C':
                    myScore += 3;
                    myScore += 3;
                    break;
            }
            break;
        case 'X': //Lose
            switch(elf){
                case 'A':
                    myScore += 0;
                    myScore += 3;
                    break;
                case 'B':
                    myScore += 0;
                    myScore += 1;
                    break;
                case 'C':
                    myScore += 0;
                    myScore += 2;
                    break;
            }
            break;
        case 'Z': //Win
            switch(elf){
                case 'A':
                    myScore += 6;
                    myScore += 2;
                    break;
                case 'B':
                    myScore += 6;
                    myScore += 3;
                    break;
                case 'C':
                    myScore += 6;
                    myScore += 1;
                    break;
            }
            break;
    }




    

});

rl.on('close', async () => {
    console.log(myScore);
});


