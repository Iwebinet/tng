import _ from 'lodash';

// BEGIN (write your solution here)
export default arr => {
  return _.flatten(arr
  .map(item => _.flattenDeep(item.map(el => [el, el])))
  .map(item => [item, item]));
};
// END

