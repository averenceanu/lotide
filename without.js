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

const assertArraysEqual = function(array1, array2) {
  
  if (eqArrays(array1, array2) === true) {
    console.log(`✅ Assertion Passed ✅`);
  } else {
    console.log(`‼️ Assertion Failed ‼️`);
  }
};

const without = function(sources, itemsToRemove) {
  let cleanArray = [];
  for (let source of sources) {
    if (!itemsToRemove.includes(source)) {
      cleanArray.push(source);
    }
  }
  return cleanArray;
};

assertArraysEqual(without([1, 2, 3], [1]) , [2, 3]);