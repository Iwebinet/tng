// BEGIN (write your solution here)
export default arrPairs => {
  return arrPairs.reduce((acc, value) => {
    const key = value[0];
    const item = value[1];
    return { ...acc, [key]: item };
  }, {})
}
// END
