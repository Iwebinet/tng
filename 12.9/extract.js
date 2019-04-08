import { map } from 'hexlet-pairs-data';
import { getAttribute, getName } from './tags';

// BEGIN (write your solution here)
const attrLink = {};
  attrLink.img = 'src';
  attrLink.a = 'href';
  attrLink.link = 'href';

  export default (tags) => map(tag => {
  const nameTag = getName(tag);
  console.log(nameTag);
  const attrName = attrLink[nameTag];
  console.log(attrName);
  return getAttribute(attrName, tag);
}, tags);
// END
