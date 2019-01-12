// eslint-disable-next-line
import { l, cons as consList, isList, isEmpty, head, tail, concat, toString as listToString } from 'hexlet-pairs-data';
// eslint-disable-next-line
import { is, toString as htmlToString, hasChildren, children, filter, reduce } from 'hexlet-html-tags';

// BEGIN (write your solution here)
const select = (tag, elements) => {
	const result = reduce((element, acc) => {
	if (is(tag, element)) {
		if (hasChildren(element)) return consList(element, concat(select(tag, children(element)), acc));
    	return consList(element, acc);
    }
    if (hasChildren(element)) {
    	return concat(select(tag, children(element)), acc);
    }

  	return acc;
	}, l(), elements);
  	
	return result;
};
  

export default select;
// END