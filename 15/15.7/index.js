// BEGIN (write your solution here)
const magic = (...args) => {
  const sum = args.reduce((acc, x) => x + acc, 0);

  const inner = (...newArgs) => {
    return magic(sum, ...newArgs);
  };

  inner.valueOf = () => sum;

  return inner;
};

export default magic;
// END
