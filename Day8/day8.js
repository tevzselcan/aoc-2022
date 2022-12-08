const fs = require('fs');
const path = require('path');

const input = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf8');
const lines = input.split('\n').map((line) => line.split('').map((tree) => parseInt(tree)));

function part1(){
  let visibleTrees = 2 * lines.length + 2 * (lines.length - 2);

  for(let i = 1; i < lines.length - 1; i++){ //Start at 1 cuz first line is always visible
    for(let j = 1; j < lines[i].length - 1; j++){

      
      //Top view
      let visable = [];
      for(let k = 0; k < i; k++){
        visable.push(lines[k][j]);
      }
      if(visable.every((tree) => tree < lines[i][j] )){
        visibleTrees++;
        continue;
      }
      

      //Down view
      visable = [];
      for(let k = i + 1; k < lines.length; k++){
        visable.push(lines[k][j]);
      }
      if(visable.every((tree) => tree < lines[i][j] )){
        visibleTrees++;
        continue;
      }
      

      //Left view
      visable = [];
      for(let k = 0; k < j; k++){
        visable.push(lines[i][k]);
      }
      if(visable.every((tree) => tree < lines[i][j] )){
        visibleTrees++;
        continue;
      }
      

      //Right view
      visable = [];
      for(let k = j + 1; k < lines[i].length; k++){
        visable.push(lines[i][k]);
      }
      if(visable.every((tree) => tree < lines[i][j] )){
        visibleTrees++;
        continue;
      }
      

    }
  }

  console.log(visibleTrees);
}

function part2(){
  let score = 0;
  for(let i = 0; i < lines.length; i++){
    for (let j = 0; j < lines[0].length; j++) {
      let upView = 0;
      for (let k = i - 1; k >= 0; k--) {
          upView++;
          if (lines[k][j] >= lines[i][j]) {
              break;
          }
      }

      let downView = 0;
      for (let k = i + 1; k < lines.length; k++) {
          downView++;
          if (lines[k][j] >= lines[i][j]) {
              break;
          }
      }

      let rightView = 0;
      for (let k = j + 1; k < lines[i].length; k++) {
          rightView++;
          if (lines[i][k] >= lines[i][j]) {
              break;
          }
      }

      let leftView = 0;
      for (let k = j - 1; k >= 0; k--) {
          leftView++;
          if (lines[i][k] >= lines[i][j]) {
              break;
          }
      }

      const scoreTemp = upView * downView * rightView * leftView;
      if (scoreTemp > score) score = scoreTemp;
  }
}

console.log(score);
  
}

part1();
part2();