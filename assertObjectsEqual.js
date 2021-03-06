const eqArrays = function(array1, array2) {
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

const eqObjects = function(object1, object2) {
  const keysOfObject1 = Object.keys(object1);
  const keysOfObject2 = Object.keys(object2);

  if (keysOfObject1.length !== keysOfObject2.length) {
    return false;

  } else {
    for (key of keysOfObject1) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (eqArrays(object1[key], object2[key]) === false) {
          return false;
        }
      } else if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅ Assertion Passed ✅ : ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`‼️ Assertion Failed ‼️ : ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const cd = {
  c: "1",
  d: ["2", 3]
};
const dc = {
  d: ["2", 3],
  c: "1"
};

assertObjectsEqual(cd, dc);