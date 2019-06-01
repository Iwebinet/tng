// BEGIN (write your solution here)
export default parameters => {
  return Object.keys(parameters)
  .sort()
  .map((item) => `${item}=${parameters[item]}`)
  .join('&');
};
// END
