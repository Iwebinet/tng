import { l, cons, head, tail, isEmpty, toString as listToString } from 'hexlet-pairs-data'; // eslint-disable-line

// BEGIN (write your solution here)
export const has = (numbers, x) => {
  if (isEmpty(numbers)) return false;
  if (head(numbers) === x) return true;

  return has(tail(numbers), x);
};

export const reverse = (numbers) => {
  const iter = (numbers, acc) => {
    if (isEmpty(numbers)) return acc;

    return iter(tail(numbers), cons(head(numbers), acc));
  };

  return iter(numbers, l());
};

export const concat = (numbers, numbers2) => {
  if (isEmpty(numbers)) return numbers2;
  
  return cons(head(numbers), concat(tail(numbers), numbers2));
};
// END