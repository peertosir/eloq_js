arrTarget = [[1, 2], [3, 4], [5, 6], [7]];

let result = arrTarget.reduce((a, b) => a.concat(b), []);
console.log(result);
console.log(result.length);
