// BEGIN (write your solution here)
export default (set1, set2) => {
  set2 = new Set(set2);

  return set1.filter(value => !set2.has(value));
}
// END
