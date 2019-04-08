toString
Convert list to string

Parameters

list List
Examples

toString(l()); // ()
toString(l('hello', 'world')); // ('hello', 'world')
map
Map list

Parameters

func function (value: T): U
list List<T>
Examples

const numbers = l(3, 4, 5, 8);
map(n => n + 2, numbers); // (5, 6, 7, 10)
Returns List<U>