// BEGIN
export default (arr, num) => {
  if (arr.length === 0) {
    return null;
  }
  return arr.reduce(
    (currIndex, e, i) => (Math.abs(e - num) < Math.abs(arr[currIndex] - num) ? i : currIndex),
    0,
  );
};
// END
