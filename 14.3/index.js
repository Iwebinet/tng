// BEGIN (write your solution here)
const dfn = (node) => {
  const {name, children} = node;
  if (!children) {
    return { ...node, name: node.name.toLowerCase() };
  }
  
  return {...node, children: node.children.map(dfn)};
};

export default dfn;
// END
