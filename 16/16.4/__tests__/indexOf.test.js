import assert from 'power-assert';
import getFunction from '../functions';

const indexOf = getFunction();

// BEGIN
assert(indexOf(['one', 'two', 8], 'two') === 1);
assert(indexOf([1, 8, 9, 3, 9], 9) === 2);
assert(indexOf([], 9) === -1);
// END