import _ from 'lodash';

// BEGIN
const makeRoute = (tree, route = []) => {
  const [city, rest] = tree;
  const newRoute = route.concat(city);
  if (!rest) {
    return newRoute.join('/');
  }

  return rest.map(el => makeRoute(el, newRoute));
};

const makeListRoutes = tree => (tree.reduce(
  (acc, node) => (node instanceof Array
    ? [...acc, ...makeListRoutes(node)]
    : acc.concat(node)), [],
));

const getRoute = (routes, city) => routes.find(el => _.last(el) === city);

const getPartsOfRoute = (route1, route2) => {
  const commonRoute = route1.filter((el, i) => el === route2[i]);
  const turn = _.last(commonRoute);

  const startRoute = route1.filter((el, i) => el !== route2[i]);
  const finishRoute = route2.filter((el, i) => el !== route1[i]);

  return [startRoute, turn, finishRoute];
};

const itinerary = (tree, start, finish) => {
  const routes = makeRoute(tree);
  const listRoutes = makeListRoutes(routes).map(el => el.split('/'));

  const route1 = getRoute(listRoutes, start);
  const route2 = getRoute(listRoutes, finish);

  const [initialRoute, turn, finalRoute] = getPartsOfRoute(route1, route2);

  return initialRoute.reverse().concat(turn, finalRoute);
};

export default itinerary;
// END
