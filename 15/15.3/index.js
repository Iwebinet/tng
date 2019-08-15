import { identity } from 'lodash';

const singleTagsList = new Set(['hr', 'img', 'br']);

// BEGIN (write your solution here)
const propertyActions = [
  {
    name: 'body',
    check: arg => typeof arg === 'string',
  },
  {
    name: 'children',
    check: arg => arg instanceof Array,
  },
  {
    name: 'attributes',
    check: arg => arg instanceof Object,
  },
];

const getPropertyAction = arg => propertyActions.find(({ check }) => check(arg));

export const parse = (data) => {
  const [first, ...rest] = data;
  const root = {
    name: first,
    attributes: {},
    body: '',
    children: [],
  };
  const tag = rest
    .reduce((acc, arg) => {
      const { name } = getPropertyAction(arg);
      return { ...acc, [name]: arg };
    }, root);

  return {name: tag.name, attributes: tag.attributes, body: tag.body,
    children: [...tag.children.map(parse)]};
};


export const render = (tag) => {
  const buildAttrString = attrs =>
    Object.keys(attrs).map(key => ` ${key}="${attrs[key]}"`).join('');

  const tailTag = singleTagsList.has(tag.name) ? '' : `</${tag.name}>`;

  return [`<${tag.name}${buildAttrString(tag.attributes)}>`,
    `${tag.body}${tag.children.map(render).join('')}`,
    `${tailTag}`,
  ].join('');
};
// END
