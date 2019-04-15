class Enumerable {
  constructor(collection) {
    this.collection = collection;
  }

// BEGIN
select(fn) {
  this.collection = this.collection.map(fn);
  return this;
}
// END

// BEGIN
orderBy(fn, direction = 'asc') {
  const compareResult = direction === 'asc' ? 1 : -1;
  const comparator = (a, b) => {
    const a1 = fn(a);
    const b1 = fn(b);

    if (a1 > b1) {
      return compareResult;
    }
    if (a1 < b1) {
      return -compareResult;
    }

    return 0;
  };
  this.collection.sort(comparator);
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
