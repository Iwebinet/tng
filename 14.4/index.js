// BEGIN (write your solution here)
const map = (f, node) => {
  const newName = f(node);
  return node.type === 'file' ?
  { ...node, name: newName.name } :
  { ...node, name: newName.name, children: node.children.map(c => map(f, c)) };
};

export default map;
// END
