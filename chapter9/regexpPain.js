let firstTask = /ca[rt]/;

console.log(firstTask.test('cats are beautiful'));
console.log(firstTask.test('Many cars are expensive'));
console.log('\n');

let secondTask = /pr?op/;

console.log(secondTask.test('so many props are used'));
console.log(secondTask.test('You can pop this values from stack'));
console.log('\n');

let thirdTask = /ferr(et|y|ary)/;

console.log(thirdTask.test('ferry merry cherry'));
console.log(thirdTask.test('ferret carrot barret'));
console.log(thirdTask.test('This car definitely looks like ferrary'));
console.log('\n');

let fourthTask = /\b.*ious\b/;

console.log(fourthTask.test('Fast and furious'));
console.log(fourthTask.test('Mysterious khe khe'));
console.log(fourthTask.test('obvious error'));
console.log('\n');

let fifthTask = /\s.,(:|;)/;

console.log(fifthTask.test('This is         .,;'));
console.log(fifthTask.test('Blablabla .     .,:'));
console.log(fifthTask.test('    ., :obvious error'));
console.log('\n');

let sixthTask = /\w{7,}/;

console.log(sixthTask.test('is this even legal'));
console.log(sixthTask.test('Blablabla blablal blasfs'));
console.log(sixthTask.test('not so funny at aaaaaaa'));
console.log('\n');

let seventhTask = /\b[^eE]+\b/;
console.log(seventhTask.test('thies'));
console.log(seventhTask.test('Blablabla'));
console.log(seventhTask.test('withoutE'));
console.log('\n');
