import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs'; // eslint-disable-line
import { attach, contents } from './type';

// BEGIN
export const make = (name, damagePoints) => attach('SimpleCard', cons(name, damagePoints));

export const getName = self => car(contents(self));

export const damage = self => cdr(contents(self));
// END
