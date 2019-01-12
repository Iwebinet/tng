import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs'; // eslint-disable-line
import { l, isEmpty, reverse, toString as listToString, isList, head, tail, cons as consList, reduce } from 'hexlet-pairs-data'; // eslint-disable-line

// BEGIN
const isSafeQueens = (list) => {
  if (isEmpty(list)) {
    return true;
  }
  const y1 = head(list);
  const checkSafe = reduce(
    (y2, x) => (!x || y1 === y2 || Math.abs(y1 - y2) === x ? false : x + 1),
    1,
    tail(list),
  );
  return checkSafe ? isSafeQueens(tail(list)) : false;
};
export default isSafeQueens;
// END