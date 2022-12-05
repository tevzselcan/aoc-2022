const fs = require('fs');
const readline = require('readline');


  const rl = readline.createInterface({
    input: fs.createReadStream('day1Input.txt'),
    crlfDelay: Infinity,
  });

  let skupniZnesekArray = [];
  let lineCounter = 0;
  let trenutniZnesek = 0;

  rl.on('line', (line) => {
    if(line == ''){
      skupniZnesekArray.push(trenutniZnesek);
      trenutniZnesek = 0;
    }
    else{
      trenutniZnesek += parseInt(line);
    }
    

  });

  rl.on('close', async () => {
    console.log(threeLargestNumbers(skupniZnesekArray));

    function threeLargestNumbers(array) {
      let first = 0;
      let second = 0;
      let third = 0;
      for (let i = 0; i < array.length; i++) {
        if (array[i] > first) {
          third = second;
          second = first;
          first = array[i];
        } else if (array[i] > second) {
          third = second;
          second = array[i];
        } else if (array[i] > third) {
          third = array[i];
        }
      }
      console.log(first, second, third);
      return first + second +third;

    }

    
    
  });



 
