import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs'; // eslint-disable-line
import { definer } from './generic';
import { attach } from './type';

// BEGIN (write your solution here)
const defmethod = definer('SimpleCard');

const make = (name, damagePoints) => attach('SimpleCard', cons(name, damagePoints));

export default make;

defmethod('getName', self => car(self));

defmethod('damage', (self) => cdr(self));

// END
