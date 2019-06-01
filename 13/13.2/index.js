// BEGIN (write your solution here)
const uniq = arr => arr.reduce((acc, value) => {
  return (acc.includes(value)) ? acc : acc.concat(value);
}, []);

export default uniq;
// END
