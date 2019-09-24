import assert from 'assert';
import getFunction from '../functions';

const take = getFunction();

// BEGIN
assert.deepEqual(take(['one', 'two', 8], 9), ['one', 'two', 8]);
assert.deepEqual(take([1, 2]), [1]);
assert.deepEqual(take(['one', 'two', 'three'], 2), ['one', 'two']);
assert.deepEqual(take([]), []);
// END
