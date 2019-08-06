const convert = (arr) => {
  return arr.reduce((acc, v) => {
    const [key, value] = v;
    const val = Array.isArray(value) ? convert(value) : value;

    return {...acc, [key]: val};
  }, {});
};

export default convert;
