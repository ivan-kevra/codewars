let arr = [0, 0, 0, 1];

const binaryArrayToNumber = arr => {

  return parseInt(arr.join(''), 2);
};
binaryArrayToNumber(arr);
