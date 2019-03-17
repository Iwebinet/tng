import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs'; // eslint-disable-line
import { cons as consList, l, random, head, reverse, toString as listToString } from 'hexlet-pairs-data'; // eslint-disable-line

const run = (player1, player2, cards) => {
  const iter = (health1, name1, health2, name2, order, log) => {
    // BEGIN (write your solution here)
    const condition = order === 1;
    const currentHealth = condition ? health1 : health2;
    const currentName = condition ? name1 : name2;

    if (currentHealth <= 0) return cons(cons(cons(health1, health2), `${currentName} был убит`), log);

    const card = random(cards);
    const damage = cdr(card)();
    const attackedHealth = condition ? health2 - damage : health1 - damage;
    const cardName = car(card);
    const attackedName = condition ? name2 : name1;
    const message = `Игрок '${currentName}' применил '${cardName}' против '${attackedName}' и нанес урон '${damage}'`;

    if (condition) {
      const logItem = cons(cons(currentHealth, attackedHealth), message);
      return iter(currentHealth, currentName, attackedHealth, attackedName, 2, cons(logItem, log));
    } else {
      const logItem = cons(cons(attackedHealth, currentHealth), message);
      return iter(attackedHealth, attackedName, currentHealth, currentName, 1, cons(logItem, log));
    }
    // END
  };

  const startHealth = 10;
  const logItem = cons(cons(startHealth, startHealth), 'Начинаем бой!');
  return reverse(iter(startHealth, player1, startHealth, player2, 1, l(logItem)));
};

export default cards =>
  (name1, name2) =>
    run(name1, name2, cards);