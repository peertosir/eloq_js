function fizzBuzz(countTo) {
  for (let idx = 0; idx < countTo; idx++) {
    let result = '';
    result = idx % 3 == 0 ? (result += 'Fizz') : result;
    result = idx % 5 == 0 ? (result += 'Buzz') : result;
    console.log(result || idx);
  }
  console.log('Done');
}

fizzBuzz(100);
