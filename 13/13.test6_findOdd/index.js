// BEGIN (write your solution here)
export default (numbers) => {
  const objNumbers = numbers.reduce((acc, el) => {
    acc[el] = (acc[el] || 0) + 1;
    return acc;
  }, {});
   const filNum = [...new Set(numbers)].filter(item => objNumbers[item] % 2 !== 0);

   return filNum[0];
};
// END
