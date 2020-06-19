function countBs(inputStr) {
  return countChar(inputStr, 'B');
}

function countChar(inputStr, charToCount) {
  let result = 0;
  for (let symb of inputStr) {
    if (symb == 'B') {
      result++;
    }
  }
  return result;
}

console.log(countBs('fadfafaBBbbBfaf'));
