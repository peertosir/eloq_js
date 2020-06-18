function printChessBoard(size) {
  for (let idx = 0; idx < size; idx++) {
    let result = idx % 2 == 0 ? '#' : ' ';
    for (let innerIdx = 1; innerIdx < size; innerIdx++) {
      result += result[result.length - 1] == '#' ? ' ' : '#';
    }
    console.log(result);
  }
}

printChessBoard(11);
