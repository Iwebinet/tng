import _ from 'lodash';

// BEGIN (write your solution here)
const fn = (root, x) => {
  const iter = (n, ancestry, acc) => {
    const [name, children] = n;

    const newAncestry = [...ancestry, name];
    if (name === x) {
      return [...acc, ...newAncestry];
    }

    if (!children) {
      return acc;
    }
    return children.reduce((cAcc, nn) => iter(nn, newAncestry, cAcc), acc);
  };

  return iter(root, [], []);
};

const findFilesByName = (root, a, b) => {
  const arr1 = fn(root, a).reverse();
  const arr2 = fn(root, b);
  const section = arr1.filter(value => -1 !== arr2.indexOf(value));
  const [x, ] = section;
  const filArr1 = arr1.filter(value => -1 === section.indexOf(value));
  const filArr2 = arr2.filter(value => -1 === section.indexOf(value));

  return [...filArr1, x, ...filArr2];
};

export default findFilesByName;
// END
