class Enumerable {
  constructor(collection) {
    this.collection = collection;
  }

  // BEGIN (write your solution here)
  select(fn) {
    this.collection = this.collection.map(fn);
    return this;
  }
  // END

  // BEGIN (write your solution here)
  orderBy(fn, vector) {
    const vec = vector === 'desc' ? -1 : 1;
    this.collection = this.collection.sort((a, b) => {
      if (fn(a) > fn(b)) {
        return 1*vec;
      }
      if (fn(a) < fn(b)) {
        return -1*vec;
      }
      // a должно быть равным b
      return 0;
    });
    return this;
  }
  // END

  where(fn) {
    this.collection = this.collection.filter(fn);
    return this;
  }

  toArray() {
    return this.collection.slice();
  }
}

export default Enumerable;
