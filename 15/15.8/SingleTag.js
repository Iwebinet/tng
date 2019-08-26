// BEGIN
import Node from './Node';

function toString() {
  return `<${this.name}${this.getAttributesAsLine()}>`;
}

export default function SingleTag(name, attributes = {}) {
  Node.apply(this, [name, attributes]);
  this.toString = toString;
}
// END
