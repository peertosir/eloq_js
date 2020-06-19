function range(start, end, step = 1) {
  let reverse = false;
  if (end < start) {
    let buffer = start;
    start = end;
    end = buffer;
    step = Math.abs(step);
    reverse = true;
  }
  let result = [];
  for (let i = start; i <= end; i += step) {
    !reverse ? result.push(i) : result.unshift(i);
  }
  return result;
}

function range2(start, end, step = 1) {
  let result = [];
  if (end < start) {
    for (let i = start; i >= end; i += step) {
      result.push(i);
    }
  } else {
    for (let i = start; i <= end; i += step) {
      result.push(i);
    }
  }
  return result;
}

function sum(numArr) {
  let result = 0;
  for (let num of numArr) {
    result += num;
  }
  return result;
}

console.log(sum(range(1, 10)));
console.log(range(1, 10, 2));
console.log(range(5, 2, -1));
console.log(range2(5, 2, -1));
console.log(range2(1, 10, 2));
