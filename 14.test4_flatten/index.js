// BEGIN
const flatten = (arr) => {
  return arr.reduce((acc, v) => {
    const val = Array.isArray(v) ? flatten(v) : v;

    return acc.concat(val);
  }, []);
};

export default flatten;
// END
