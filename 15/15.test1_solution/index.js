/* eslint-disable no-extend-native */

// BEGIN (write your solution here)
Function.prototype.wrap = function wrap(f) {
  return (yourName, myName) => f(this, yourName, myName);
};
// END