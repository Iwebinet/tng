// BEGIN (write your solution here)
const sortDeps = (obj) => {
  const keys = Object.keys(obj);

  const iter = (arrKeys, acc) => {
    if (arrKeys.length === 0) return acc;

    const [n, ...array] = arrKeys;
    
    const intermediate = (n) => {
      const fn = obj[n].reduce((iacc, v) => {
        if (acc.includes(v)) return [...iacc];
        if (array.includes(v)) return [...iacc, ...intermediate(v)];
        return [...iacc, v];
      }, []);

      const j = acc.includes(n) ? [] : [n];
      return [...fn, ...j]
    };


    return iter(array, [...acc, ...intermediate(n)]);
  };

  return iter(keys, []);
};

export default sortDeps;
// END
