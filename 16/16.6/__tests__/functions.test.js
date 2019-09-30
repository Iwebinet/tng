import getFunction from '../functions';

const gt = getFunction();

// BEGIN
test('gt', () => {
  expect(gt(0, 0)).toBe(false);
  expect(gt(1, 0)).toBe(true);
  expect(gt(1, -3)).toBe(true);
});
// END
