function forLoop(value, condFunc, refreshFunc, bodyFunc) {
  if (condFunc(value)) {
    bodyFunc(value);
    return forLoop(refreshFunc(value), condFunc, refreshFunc, bodyFunc);
  } else {
    return;
  }
}

console.log(
  forLoop(
    0,
    (a) => a < 10,
    (a) => ++a,
    console.log
  )
);
