import { cloneDeep } from 'lodash';
import getFunction from '../functions';

const set = getFunction();

// BEGIN
let data;
let dataCopy;

beforeEach(() => {
  data = {
    a: [
      {
        b: {
          c: 3,
        },
      },
    ],
  };
  dataCopy = cloneDeep(data);
});

test('plain set', () => {
  set(data, 'a', 'value');
  dataCopy.a = 'value';
  expect(data).toEqual(dataCopy);
});

test('nested set', () => {
  set(data, 'a[0].b.c', true);
  dataCopy.a[0].b.c = true;
  expect(data).toEqual(dataCopy);
});

test('set new property', () => {
  set(data, 'a[0].b.d', false);
  dataCopy.a[0].b.d = false;
  expect(data).toEqual(dataCopy);
});
// END
