// BEGIN (write your solution here)
export default (params) => {
  const keys = Object.keys(params).sort();
  return keys.map(k => `${k}=${params[k]}`).join('&');
};
// END
