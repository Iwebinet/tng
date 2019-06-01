// BEGIN (write your solution here)
const map = (f, node) => {
  const updatedNode = f(node);

  return node.type === 'directory'
    ? { ...updatedNode, children: node.children.map(n => map(f, n)) } : updatedNode;
};

export default map;
// END
