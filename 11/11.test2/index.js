const delimiter = '\n';

export const l = (...items) => items.join(delimiter);

// BEGIN (write your solution here)
export const isEmpty = items => {
  return items === '';
};

export const head = items => {
  let result  = '';

  for (let i = 0; i < items.length && items[i] !== delimiter; i++) {
    result += items[i];
  }

  return result;
};

export const tail = items => {
  let i = 0;
  while (i < items.length && items[i] !== delimiter) {
    i = i + 1;
  }
  i = i + 1;
  let result  = '';
  for (i; i < items.length; i++) {
    result += items[i];
  }

  return result;
};

export const cons = (item, items) => {
  if (isEmpty(items)) return item;

  let result  = item + delimiter;
  for (let i = 0; i < items.length; i++) {
    result += items[i];
  }

  return result;
};

export const map = (func, items) => {
	if (isEmpty(items)) {
		return '';
	}
	const newitem = func(head(items));

  return cons(newitem, map(func, tail(items)));
};

export const filter = (func, items) => {
	if (isEmpty(items)) {
		return '';
	}
  const current = head(items);
  const tailItems = tail(items);
	if (func(current)) {
	  return cons(current, filter(func, tailItems));
	}

  return filter(func, tailItems);
};

export const reduce = (func, acc, items) => {
  if (isEmpty(items)) {
    return acc;
  }

  return reduce(func, func(head(items), acc), tail(items));
};

export const toString = items => {
  let result  = '';

  for (let i = 0; i < items.length; i++) {
    result += items[i] === delimiter ? ', ' : items[i];
  }

  return `(${result})`;
};
// END




console.log(result);