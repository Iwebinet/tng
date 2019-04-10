// eslint-disable-next-line
import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs';
// eslint-disable-next-line
import { l, isEmpty, head, tail, cons as consList, toString as listToString } from 'hexlet-pairs-data';

export const make = () => l();
// BEGIN (write your solution here)
export const node = (tag, text) => cons(tag, text);

export const name = (node) => car(node);

export const value = (node) => cdr(node);

export const append = (node, html) => cons(html, node);

export const toString = (dom) => {
  if (isEmpty(dom)) return '';

  return `${toString(tail(dom))}<${car(head(dom))}>${cdr(head(dom))}</${car(head(dom))}>`
};
// END
