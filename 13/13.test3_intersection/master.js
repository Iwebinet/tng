// BEGIN (write your solution here)
export default (array1, array2) => {
  const filtered = array1.filter(value => array2.includes(value));
  return [...new Set(filtered)];
};
// END
