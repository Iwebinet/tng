class Enumerable {
  constructor(collection, operations) {
    this.collection = collection;
    this.operations = operations || [];
  }

  build(fn) {
    return new Enumerable(this.collection.slice(), this.operations.concat(fn));
  }

  // BEGIN (write your solution here)
  where(...els) {
    return this.build(els.map(el => {
      if (typeof el === 'function') {
        return coll => coll.filter(el);
      }
      const keys = Object.keys(el);

      return coll => coll.filter(col =>
        keys.every(key => col[key] === el[key]))
    }));
  }
  // END

  getProcessedCollection() {
    if (!this.memo) {
      this.memo = this.operations.reduce((acc, func) => func(acc), this.collection);
    }

    return this.memo;
  }

  get length() {
    return this.getProcessedCollection().length;
  }

  toArray() {
    return this.getProcessedCollection().slice();
  }
}

export default Enumerable;
