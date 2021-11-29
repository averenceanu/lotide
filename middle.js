const middle = function(array) {
  const arrayLengthDevided = array.length / 2;
  const arrayLengthOdd = ((array.length - 1) / 2);
  //if array.length < 2 => return empty array
  if (array.length < 3) {
    return [];
  } else if (array.length % 2 !== 0) {
    return [array[arrayLengthOdd]];
  } else if (array.length % 2 === 0) {
    return [array[arrayLengthDevided - 1], array[arrayLengthDevided]];
  }
};

module.exports = middle;