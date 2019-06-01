// BEGIN (write your solution here)
export default array => {
  const arr = array.split('');
  if (arr.length % 2 !== 0) return false;

  const check = (start, end) => {
    const sample = [['(', ')'], ['[', ']'], ['{', '}'], ['<', '>']];
    return sample.reduce((acc, item) => {
      return ((item[0] === start && item[1] === end) || acc) ? true : false;
    }, false);
  };

  for (let i = 1; arr.length !== 0; i++) {
    const itemStart = arr.shift();
    const itemEnd = check(itemStart, arr[0]) ? arr.shift() : arr.pop();
    if (!check(itemStart, itemEnd)) return false;
  }

  return true;
};
// END
