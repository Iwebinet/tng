import { cons, car, cdr } from '../pairs';

describe('Pairs on strings', () => {
  it('1 set', () => {
    const pair = cons('hi', 'hexlet');
    expect(car(pair)).toBe('hi');
    expect(cdr(pair)).toBe('hexlet');
  });

  it('2 set', () => {
    const pair = cons('Hello!', '');
    expect(car(pair)).toBe('Hello!');
    expect(cdr(pair)).toBe('');
  });

  it('3 set', () => {
    const pair = cons('', 'XXI');
    expect(car(pair)).toBe('');
    expect(cdr(pair)).toBe('XXI');
  });
});
