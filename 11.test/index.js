import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs'; // eslint-disable-line
import { l, isEmpty, reverse, toString as listToString, isList, head, tail, cons as consList, reduce } from 'hexlet-pairs-data'; // eslint-disable-line

// BEGIN (write your solution here)
const has = (list, item, country) => {
  if (isEmpty(list)) {
    return false;
  }
  if (head(list) === item || head(list) + country === item || head(list) - country === item) {
    return true;
  }

  return has(tail(list), item, country + 1);
};


const isSafeQueens = (list) => {
  const iter = (items, acc) => {
    if (isEmpty(items)) return true;
    if (has(acc, head(items), 1)) return false;

    return iter(tail(items), cons(head(items), acc));
  }

  return iter(list, l());
};
  
export default isSafeQueens;
// END