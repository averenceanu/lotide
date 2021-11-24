
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

const assertArraysEqual = function (toVerify){
  
  if (toVerify === true){
    console.log(`✅ Assertion Passed ✅`)
  }
  else {
    console.log(`‼️ Assertion Failed ‼️`)
  }
}

assertArraysEqual(eqArrays(["1", "2", 3], ["1", "2", "3"]));