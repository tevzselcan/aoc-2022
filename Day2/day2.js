const fs = require('fs');
const readline = require('readline');


  const rl = readline.createInterface({
    input: fs.createReadStream('day2Input.txt'),
    crlfDelay: Infinity,
  });

  //ELFS
  //A rock
  //B paper
  //C scissors

  //ME
  //X rock 1
  //Y paper 2
  //Z scissors 3

  //Lose 0
  //Win 6
  //Draw 3

  let myScore = 0;

  rl.on('line', (line) => {
    let split = line.split(' ');
    let elf = split[0];
    let me = split[1];


    switch(me){
        case 'X':
            myScore += 1;
            break;
        case 'Y':
            myScore += 2;
            break;
        case 'Z':
            myScore += 3;
            break;
    }

    
    if(elf == 'A' && me == 'Y'){
        myScore += 6;
    }
    else if(elf == 'A' && me == 'Z'){
        myScore += 0;
    }
    else if(elf == 'B' && me == 'X'){
        myScore += 0;
    }
    else if(elf == 'B' && me == 'Z'){
        myScore += 6;
    }
    else if(elf == 'C' && me == 'X'){
        myScore += 6;
    }
    else if(elf == 'C' && me == 'Y'){
        myScore += 0;
    }
    else if(elf == 'A' && me == 'X'){
        myScore += 3;
    }
    else if(elf == 'B' && me == 'Y'){
        myScore += 3;
    }
    else if(elf == 'C' && me == 'Z'){
        myScore += 3;
    }

    

});

rl.on('close', async () => {
    console.log(myScore);
});


