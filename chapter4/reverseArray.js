function reverseArray(targetArr) {
  let result = [];
  for (let elem of targetArr) {
    result.unshift(elem);
  }
  return result;
}

function reverseArrayInPlace(targetArr) {
  const leng = targetArr.length / 2;
  for (let i = 0; i < leng; i++) {
    let buffer = targetArr[i];
    targetArr[i] = targetArr[targetArr.length - 1 - i];
    targetArr[targetArr.length - 1 - i] = buffer;
  }
  return targetArr;
}

console.log(reverseArray([1, 2, 3, 4, 5]));
console.log(reverseArrayInPlace([1, 2, 3, 4, 5, 6]));
