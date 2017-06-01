require('./utils');
let fs = require('fs');
// console.log(process.argv);

if(!process.argv[2]){
  console.error('Please supply an argument.');
  return;
}

console.log('Parsing board...');

let boardStr = fs.readFileSync(process.argv[2], 'utf-8');

// Get the board as a 2-D array.
let board = parseBoard(boardStr);

console.log('Rows: ', validateRows(board))
console.log('Cols: ', validateColumns(board))
console.log('Sub Boards: ', validateSubboards(board))

console.log(validateRows(board) && validateColumns(board) && validateSubboards(board));




