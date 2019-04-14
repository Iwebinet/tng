// BEGIN
export default coll => coll.reduce(
  (acc, value) => (
    acc.includes(value) ? acc : acc.concat(value)
  ), // первый параметр reduce — callback-функция
  [], // второй параметр reduce — аккумулятор
);
// END
