/* eslint-disable no-extend-native */

// BEGIN (write your solution here)
Object.prototype.hash = function hash(str) {
  const keys = str.split('.');

  return keys.reduce((acc, key) => {
    if (acc === undefined) return undefined;
    return acc[key] === undefined ? undefined : acc[key];
  }, this);
};
// END
