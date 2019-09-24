import getFunction from '../functions';

const get = getFunction();

// BEGIN
if (get({ key: 'value' }, 'key') !== 'value') {
  throw new Error('boom!');
}
if (get({}, 'key', 'value') !== 'value') {
  throw new Error('boom!');
}
if (get({ key: 'value' }, 'key', 'default value') !== 'value') {
  throw new Error('boom!');
}
// END
