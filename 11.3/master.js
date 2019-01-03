// eslint-disable-next-line
import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs';
// eslint-disable-next-line
import { l, isEmpty, head, tail, cons as consList, toString as listToString } from 'hexlet-pairs-data';

export const make = () => l();
// BEGIN
export const append = (dom, element) => consList(element, dom);

export const node = (tag, content) => cons(tag, content);

export const name = element => car(element);
export const value = element => cdr(element);

export const toString = (elements) => {
  if (isEmpty(elements)) {
    return '';
  }
  const element = head(elements);
  const tag = name(element);
  return `${toString(tail(elements))}<${tag}>${value(element)}</${tag}>`;
};
// END