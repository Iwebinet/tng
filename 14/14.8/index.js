import { reduce } from 'hexlet-immutable-fs-trees';

// BEGIN (write your solution here)
const calculateSize = tree =>
  reduce((acc, node) => (node.type === 'file' ? acc + node.meta.size : acc), tree, 0);

export default tree => tree.children
  .map(n => [n.name, calculateSize(n)])
  .sort(([, size1], [, size2]) => size2 - size1);
// END
