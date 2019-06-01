// BEGIN (write your solution here)
export default (coll, select) =>
  coll.reduce((acc, item) => ({ ...acc, [select(item)]: item }), {});
// END
