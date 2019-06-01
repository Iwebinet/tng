// BEGIN (write your solution here)
export default (arr, n) => {
  if (arr.length === 0) return null;
  let difference = Math.abs(n - arr[0]);
  let index = 0;
  const fn = (index, d) => ({ id: index, diff: d });
  let obj = fn(index, difference);
  for(let i = 1; i < arr.length; i++) {
    difference = Math.abs(n - arr[i]);
    index += 1;
    if (obj.diff > difference) obj = fn(index, difference);
  }

  return obj.id;
 };
// END
