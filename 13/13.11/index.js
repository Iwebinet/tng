import { has } from 'lodash';

// BEGIN (write your solution here)
export default (cars) => {
  const iter = (cars, acc) => {
    if (cars.length === 0) {
      return acc;
    }
    const [{ year }, ...rest] = cars;
    const counter = has(acc, year) ? acc[year] + 1 : 1;

    return iter(rest, { ...acc, [year]: counter });
  };

  return iter(cars, {});
};
// END

