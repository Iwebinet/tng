Осторожно! Эта задача требует умения работать с массивами для понимания реализации функции l (чтобы принять любое число аргументов). Если вы их не знаете, лучше вернуться к этой задаче после прохождения курса "JS: Коллекции".

Необходимо реализовать набор функций для работы со списками, построенными на базе строк. Данный вид списка представляет собой текст, где каждая строчка — это элемент списка, например:

hello
world
Это пример списка с двумя элементами hello и world.

Подразумевается, что интерфейс работы этой абстракции абсолютно точно такой же, как и тот, что использовался в курсе. Другими словами, можно безболезненно переписать реализацию тех функций, которые делались в курсе, и весь код, использующий списки, будет работать как ни в чем не бывало.

list.js
Реализуйте и экспортируйте следующие функции:

l(...items) — функция-конструктор. Уже реализована.

const list = l('foo', 'bar', 'baz');
toString(list) — возвращает строковое представление списка

const list = l('foo', 'bar', 'baz');
toString(list); // (foo, bar, baz)
head(list) — возвращает первый элемент списка

const list = l('foo', 'bar', 'baz');
const first = head(list); // 'foo'
tail(list) — возвращает "хвост" списка (все элементы, кроме первого)

const list = l('foo', 'bar', 'baz');
const rest = tail(list); // l('bar', 'baz')
isEmpty(list) — проверяет, является ли список пустым

const list = l('foo', 'bar', 'baz');

console.log(isEmpty(list)); // false
console.log(isEmpty(l()));  // true
cons(item, list) — добавляет элемент в начало списка и возвращает новый список

const list = l('foo', 'bar', 'baz');
const newList = cons('bas', list); // l('bas', 'foo', 'bar', 'baz')
filter(predicate, list) — фильтрует список, используя предикат

const list = l('foo', 'bar', 'baz');
const filteredList = filter(item => item[0] === 'b', list); // l('bar', 'baz')
map(callback, list) — преобразует список, используя callback-функцию

const list = l('foo', 'bar', 'baz');
const mappedList = map(item => item[0], list); // l('f', 'b', 'b')
reduce(callback, init, list) — производит свертывание списка

const list = l('foo', 'bar', 'baz');
const result = reduce((item, acc) => acc ? `${acc},${item}` : item, '', list);
console.log(result); // foo,bar,baz
Подсказки
Решение учителя на 100% функциональное
Длина строки str находится так: str.length
Чтобы получить подстроку из строки, используйте метод substr:

'foo'.substr(1, 2); // 'oo';
Чтобы получить индекс, по которому находится отдельный символ в строке, используйте метод indexOf

'bar'.indexOf('a'); // 1;