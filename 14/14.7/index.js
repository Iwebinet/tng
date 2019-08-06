import path from 'path';

// BEGIN (write your solution here)
export default (tree, substr) => {
  const iter = (n, namePath, acc) => {
    if (n.type === 'file' && n.name.includes(substr)) {
      return [...acc, path.join(namePath, n.name)];
    }

    if (n.type === 'file') {
      return [...acc];
    }

    return n.children.reduce((cAcc, nn) => iter(nn, path.join(namePath, n.name), cAcc), acc);
  };

  return iter(tree, '/', []);
};
// END
