class Group {
  constructor() {
    this.group = [];
  }
  add(val) {
    if (this.group.indexOf(val) == -1) {
      this.group.push(val);
    }
  }

  delete(val) {
    const idxOfVal = this.group.indexOf(val);
    if (idxOfVal != -1) {
      this.group = this.group
        .slice(0, idxOfVal)
        .concat(this.group.slice(idxOfVal + 1));
    }
  }

  get values() {
    return this.group;
  }

  has(val) {
    if (this.group.indexOf(val) != -1) {
      return true;
    }
    return false;
  }

  static from(someIterable) {
    let iterator;
    try {
      if (Symbol.iterator in someIterable) {
        iterator = someIterable[Symbol.iterator]();
      } else {
        throw new Error('Is not iterable');
      }
    } catch (error) {
      console.log(error.message);
    }

    if (iterator) {
      let group = new Group();
      let member = iterator.next();
      while (!member.done) {
        group.add(member.value);
        member = iterator.next();
      }
      return group;
    }
  }

  [Symbol.iterator]() {
    return new GroupIterator(this);
  }
}

class GroupIterator {
  constructor(target) {
    this.group = target.group;
    this.idx = -1;
  }

  next() {
    this.idx++;
    if (this.idx <= this.group.length - 1) {
      return { value: this.group[this.idx], done: false };
    } else {
      return { done: true };
    }
  }
}

let tryGroup = new Group();
tryGroup.add(1);
tryGroup.add(2);
tryGroup.add(3);
tryGroup.add(4);
tryGroup.add(5);
tryGroup.delete(3);
console.log(tryGroup.values);

let fromIterable = Group.from([1, 2, 3, 4, 5]);
console.log(fromIterable.values);

let errorGroup = Group.from({});

for (let value of tryGroup) {
  console.log(value);
}
