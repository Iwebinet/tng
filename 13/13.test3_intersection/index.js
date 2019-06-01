// BEGIN (write your solution here)
export default (array1, array2) => {
  const set = new Set(array2);
  const set2 = new Set(array1.filter(value => set.has(value)));
  return Array.from(set2);
};
// END
