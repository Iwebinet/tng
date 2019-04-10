import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs'; // eslint-disable-line
import {
  l, cons as consList, isEmpty, head, tail,
} from 'hexlet-pairs-data';
import { attach, typeTag, contents } from './type';

let methods = l();

export const getMethod = (obj, methodName) => {
  // BEGIN (write your solution here)
  const compare = (methods) => {
    if (isEmpty(methods)) return;
    const method = head(methods);

    if ((typeTag(obj) === typeTag(method)) && (methodName === car(contents(method)))) {
      return cdr(contents(method));
    }

    return compare(tail(methods));
  };
  return compare(methods);
  // END
};

export const definer = type => (methodName, f) => {
  methods = consList(attach(type, cons(methodName, f)), methods);
};
