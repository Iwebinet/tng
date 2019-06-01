// BEGIN (write your solution here)
export default (sequence) => {
  const arrSequence = sequence.split('');
  return arrSequence.reduce((acc, item, index) => {
    if (item === '|') return acc;
    return arrSequence[index - 1] === '|' ? acc + 1 : acc + 0;
 }, '')
};
// END
