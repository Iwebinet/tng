// BEGIN (write your solution here)
export default (words, stopWords) => {
  const lowerCaseWords = words.map(v => v.toLowerCase());
  const filterStopWords = lowerCaseWords.filter(v => !stopWords.includes(v));
  console.log(filterStopWords);

  const map = new Map();

  return filterStopWords.reduce(
    (acc, value) => {
      const count = filterStopWords.filter(x => x === value).length;

      return acc.has(value) ? acc : acc.set(value, count);
    },
    map,
  );
};
// END
