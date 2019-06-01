// BEGIN (write your solution here)
export default (cars, fn) => {
  return cars.reduce((acc, value) => ({ ...acc, [fn(value)]: value }), []);

};
// END
