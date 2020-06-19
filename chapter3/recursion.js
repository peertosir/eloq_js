function isEven(nmb) {
  nmb = nmb < 0 ? -nmb : nmb;
  if (nmb == 0) {
    return true;
  } else if (nmb == 1) {
    return false;
  } else {
    return isEven(nmb - 2);
  }
}

console.log(isEven(-1));
console.log(isEven(50));
console.log(isEven(75));
