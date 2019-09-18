/* eslint-disable no-extend-native */

// BEGIN
Object.prototype.hash = function hash(path) {
  const keys = path.split('.');
  return keys.reduce((acc, item) =>
    (acc === undefined ? acc : acc[item]), this);
};
// END
