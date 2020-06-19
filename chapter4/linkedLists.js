function arrayToList(inputArr) {
  let linkedList = {
    value: inputArr[0],
    rest: null,
  };
  const head = linkedList;
  for (let i = 1; i < inputArr.length; i++) {
    linkedList.rest = {
      value: inputArr[i],
      rest: null,
    };
    linkedList = linkedList.rest;
  }
  return head;
}

function listToArray(inputList) {
  let result = [inputList.value];
  let linkedList = inputList.rest;
  while (linkedList) {
    result.push(linkedList.value);
    linkedList = linkedList.rest;
  }
  return result;
}

function prepend(val, linkedList) {
  return {
    value: val,
    rest: linkedList,
  };
}

function nth(idx, linkedList) {
  let counter = 0;
  while (linkedList) {
    if (counter == idx) {
      return linkedList.value;
    }
    linkedList = linkedList.rest;
    counter++;
  }
  return;
}

function nthRecursion(idx, linkedList) {
  if (linkedList == null) {
    return undefined;
  } else if (idx == 0) {
    return linkedList.value;
  } else {
    return nthRecursion(idx - 1, linkedList.rest);
  }
}

console.log(listToArray(prepend(0, arrayToList([1, 2, 3, 4, 5]))));
console.log(nth(12, prepend(0, arrayToList([1, 2, 3, 4, 5]))));
console.log(nthRecursion(2, prepend(0, arrayToList([1, 2, 3, 4, 5]))));
