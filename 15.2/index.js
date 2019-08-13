// BEGIN (write your solution here)
const buildHtml = (data) => {
  const attrs = (v) => {
    return Object.keys(v).reduce((acc, key) =>
    `${acc} ${key}="${v[key]}"`, '');
  };

  const tag = (node) => {
    const round = node.reduce((acc, v, index) => {
      if (Array.isArray(v)) return `${acc}${tag(v)}`;

      if (v instanceof Object) return `${acc}${attrs(v)}>`;

      if (index === 0 && !Array.isArray(node[1]) && node[1] instanceof Object) return `${acc}<${v}`;
      if (index === 0) return `${acc}<${v}>`;

      return `${acc}${v}`;
    }, '', 0);

    const close = node[0] instanceof Array ? '' : `</${node[0]}>`;

    return `${round}${close}`;
  };

  return tag(data);
};

export default buildHtml;
// END
