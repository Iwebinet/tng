import length from './strings';

// BEGIN (write your solution here)
export const cons = (a, b) => {
  console.log(`${a}\0${b}`);
  return `${a}\0${b}`;
};

const separator = (str) => {
  let i = 0;

  while (str[i] !== '\0') {
    i = i + 1;
  }

  return i;  
};

export const car = (str) => {
    let i = 0;
    let result = '';
    const lengthSeparator = separator(str);
  
    while (i < lengthSeparator) {
      result = result + str[i];
      i = i + 1;
    }
  
    return result;  
};

export const cdr = (str) => {
    let i = separator(str) + 1;
    let result = '';
  
    while (i < str.length) {
      result = result + str[i];
      i = i + 1;
    }
  
    return result;  
};
// END
