// BEGIN
export default (coll, size) => {
  const iter = (iterColl, acc = []) => {
    if (iterColl.length === 0) {
      return acc;
    }
    return iter(
      iterColl.slice(size),
      [...acc, iterColl.slice(0, size)],
    );
  };

  return iter(coll);
};
// END
