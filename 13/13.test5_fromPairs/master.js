// BEGIN (write your solution here)
export default pairs => pairs.reduce(
  (acc, [key, value]) => ({ ...acc, [key]: value }),
  {},
);
// END
