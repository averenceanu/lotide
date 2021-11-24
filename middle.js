
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

const assertArraysEqual = function (array1, array2){
  
  if (eqArrays(array1, array2) === true){
    console.log(`✅ Assertion Passed ✅`)
  }
  else {
    console.log(`‼️ Assertion Failed ‼️`)
  }
}


const middle = function (array) {
  const arrayLengthDevided = array.length / 2; 
  const arrayLengthOdd = ((array.length - 1)/ 2);
  //if array.length < 2 => return empty array 
  if (array.length < 3) {
    return [];
  }
  // if array.length % 2 !== 0 => give the middle element 
  else if (array.length % 2 !== 0) {
    return [array[arrayLengthOdd]]
  }
  // if array.length % 2 === 0 => give me the 2 elements in the middle 
  else if (array.length % 2 === 0){
    return [array[arrayLengthDevided - 1],array[arrayLengthDevided]]
  }
  return middleVales;
}

assertArraysEqual(middle([1,2,3,4]),[2,3]);

