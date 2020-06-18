function printTriangle(desLength) {
  let strTriangle = '#';
  do {
    console.log(strTriangle);
    strTriangle += '#';
  } while (strTriangle.length <= desLength);
}

printTriangle(5);
printTriangle(7);
