function deepEquals(obj1, obj2) {
  //   console.log('In equals');
  //   console.log(obj1, obj2);
  //   console.log(typeof obj1);
  //   console.log(typeof obj2);
  if (
    typeof obj1 == typeof obj2 &&
    obj1 != null &&
    obj2 != null &&
    typeof obj1 == 'object'
  ) {
    if (Object.keys(obj1).length != Object.keys(obj2).length) return false;
    for (let i = 0; i < Object.keys(obj1).length; i++) {
      if (!deepEquals(obj1[Object.keys(obj1)[i]], obj2[Object.keys(obj2)[i]])) {
        return false;
      }
    }
    return true;
  } else {
    return obj1 === obj2;
  }
}

let some1 = {
  value: true,
  ciz: 12,
  rest: {
    value: true,
    ciz: 12,
    rest: null,
    arrNum: [1, 2, 3],
  },
};

let some2 = {
  value: true,
  ciz: 12,
  rest: {
    value: true,
    ciz: 12,
    rest: null,
    arrNum: [1, 2, 3, 4],
  },
};

let some3 = {
  value: true,
  ciz: 12,
  rest: {
    value: true,
    ciz: 12,
    rest: null,
    arrNum: [1, 2, 3],
  },
};

console.log(deepEquals(12, 12));
console.log(deepEquals(0, 123));
console.log(deepEquals(some1, some2));
console.log(deepEquals(some1, some3));
