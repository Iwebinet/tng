import { // eslint-disable-next-line no-unused-vars
  cons, car, cdr, toString as pairToString,
} from 'hexlet-pairs';

export const attach = (tag, data) => cons(tag, data);
export const typeTag = taggedData => car(taggedData);
export const contents = taggedData => cdr(taggedData);
