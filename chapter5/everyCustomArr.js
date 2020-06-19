function every(inputArr, predicateFunc) {
  for (let i of inputArr) {
    if (!predicateFunc(i)) return false;
  }
  return true;
}

arr1 = [1, 1, 1, 1, 1, 1];

arr2 = [1, 1, 1, 1, 1, 1, 0];

console.log(every(arr1, (a) => a == 1));
console.log(every(arr2, (a) => a == 1));

//Last task is linked with initial data. It was skipped
