import { keyBy, get } from 'lodash';
import { eachDay, format } from 'date-fns';

// BEGIN (write your solution here)
export default (data, begin, end) => {
  const keyData = keyBy(data, 'date');

  return eachDay(begin, end)
  .map(d => {
    const formDate = format(d, "DD.MM.YYYY");
    return get(keyData, formDate) === undefined ? { value: 0, date: formDate } : get(keyData, formDate);
  });
};
// END



