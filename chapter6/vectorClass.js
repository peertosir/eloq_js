class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  plus(anotherVector) {
    return new Vec(this.x + anotherVector.x, this.y + anotherVector.y);
  }
  minus(anotherVector) {
    return new Vec(this.x - anotherVector.x, this.y - anotherVector.y);
  }
  get length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  get [Symbol.toStringTag]() {
    return `(${this.x}, ${this.y})`;
  }
}

let tryVec = new Vec(3, 4);

let try2Vec = new Vec(3, 3);

console.log(tryVec.plus(try2Vec));

console.log(tryVec.length);
