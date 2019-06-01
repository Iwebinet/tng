import length from './strings';

// BEGIN
const separator = '\0';

const getSeparatorPosition = (str) => {
  const iter = i => (str[i] === separator ? i : iter(i + 1));

  return iter(0);
};

const getValue = (pair, begin, end) => {
  const iter = (acc, i) => {
    if (i >= end) {
      return acc;
    }
    const newAcc = `${acc}${pair[i]}`;

    return iter(newAcc, i + 1);
  };

  return iter('', begin);
};

export const cons = (a, b) => `${a}${separator}${b}`;
export const car = pair => getValue(pair, 0, getSeparatorPosition(pair));
export const cdr = pair => getValue(pair, getSeparatorPosition(pair) + 1, length(pair));
// END