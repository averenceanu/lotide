const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) {
    return (false);
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }

    }
  }
  return true;
};

const assertArraysEqual = function (array1, array2) {

  if (eqArrays(array1, array2) === true) {
    console.log(`✅ Assertion Passed ✅`)
  } else {
    console.log(`‼️ Assertion Failed ‼️`)
  }
}

const takeUntil = function (array, callback) {
  let indexToCut = array.findIndex(callback);
  let newArray = array.splice(0, indexToCut);
  return newArray;

}
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');

assertArraysEqual(results1, [1, 2, 5, 7, 2]);
assertArraysEqual(results2, ['I\'ve', 'been', 'to', 'Hollywood']);