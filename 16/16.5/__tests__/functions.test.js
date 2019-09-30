import getFunction from '../functions';

const without = getFunction();

// BEGIN
test('without', () => {
  expect(without([], 3)).toEqual([]);
  expect(without([3, 8, 9, 8, 10], 8, 10)).toEqual([3, 9]);
});
// END
