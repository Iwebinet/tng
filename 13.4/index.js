// BEGIN (write your solution here)
export default (numbers, stopNum) => {
  console.log(numbers.keys());
  console.log(Array.from(numbers));

  const massNumbers = Array.from(numbers);
  const differenceNum = massNumbers.filter(num => !stopNum.has(num));
  return new Set(differenceNum);
};
// END

const result = words.filter(word => !stopWords.has(word));