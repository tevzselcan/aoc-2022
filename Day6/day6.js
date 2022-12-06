const buffer = require('fs').readFileSync('Day6/input.txt').toString();

const scanSize = 14; //4 for part 1, 14 for part 2

function part1(buffer){
    let splitBuffer = buffer.split('');

    for(let i = 0; i < splitBuffer.length; i++){
        let fourCharacters = splitBuffer.slice(i, i + scanSize);
        let hasDuplicates = containsDuplicates(fourCharacters);
        if(!hasDuplicates){
            let string = fourCharacters.join('');
            let index = buffer.indexOf(string);    
            console.log(index + scanSize);
            break;
        }
    }
}

function containsDuplicates(array) {
    if (array.length !== new Set(array).size) {
      return true;
    }
    return false;
  }
  
part1(buffer);