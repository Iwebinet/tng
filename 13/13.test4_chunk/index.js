// BEGIN (write your solution here)
export default (arr, n) => {
  const iter = (array, acc) => {
    if (array.length === 0) {
      return acc;
    }
    return iter(array.slice(n), [...acc, array.slice(0, n)]);
  };

  return iter(arr, []);
};
// END
