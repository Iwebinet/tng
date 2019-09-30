/* eslint-disable */

export default class {
  checks = [];

  addCheck(fn) {
    this.checks.push(fn);
  }

  isValid(data) {
    if (this.checks.length === 0) {
      return true;
    }
    return this.checks.some(fn => fn(data));
  }
}
