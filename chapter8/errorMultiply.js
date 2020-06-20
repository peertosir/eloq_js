class MultyplyUnitError extends Error {}

function primitiveMultiply(a, b) {
  let possibility = Math.random();
  if (possibility < 0.8) {
    throw new MultyplyUnitError('Try to multuply error. Trying one more time');
  } else {
    console.log(a * b);
  }
}

function tryToMultyply(a, b) {
  try {
    return primitiveMultiply(a, b);
  } catch (error) {
    if (error instanceof MultyplyUnitError) {
      console.log(error.message);
      tryToMultyply(a, b);
    } else {
      throw error;
    }
  }
}

tryToMultyply(4, 5);
