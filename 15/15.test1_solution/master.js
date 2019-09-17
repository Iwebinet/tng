/* eslint-disable no-extend-native */

// BEGIN
Function.prototype.wrap = function wrap(func) {
  return (...args) => func(this, ...args);
};
// END