import _ from 'lodash';

// BEGIN (write your solution here)
const duplicateEachItemInArray = arr => _.flatten(arr.map(item => [item, item]));

const enlargeArrayImage = (arr) => {
  const horizontallyStretched = arr.map(duplicateEachItemInArray);
  return duplicateEachItemInArray(horizontallyStretched);
};

export default enlargeArrayImage;
// END
