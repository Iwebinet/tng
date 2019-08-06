// BEGIN (write your solution here)
const filter = (f, node) => {
  return (f(node) && node.children) ?
  { ...node, children: node.children.map(c => filter(f, c)).filter(v => v) }
  : f(node) ? node : null;
};

export default filter;
// END
