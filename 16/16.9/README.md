tests/cart.test.js
Напишите тесты для класса Cart, представляющего собой покупательскую корзину. Интерфейс:

1 addItem(good, count) – добавляет в корзину товары и их количество. Товар это объект у которого два свойства: name – имя и price – стоимость.
2 getItems – возвращает товары в формате [{ good, count }, { good, count }, ...]
3 getCost – возвращает стоимость корзины. Стоимость корзины высчитывается как сумма всех добавленных товаров с учетом их количества.
4 getCount – возвращает количество товаров в корзине

const cart = new Cart();
cart.addItem({ name: 'car', price: 3 }, 5);
cart.addItem({ name: 'house', price: 10 }, 2);
cart.getItems().length; // 2
cart.getCost(); // 35