const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed ✅: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`‼️ Assertion Failed ‼️ : ${actual} !== ${expected}`);
  }
};

const countLetters = function (stringToCount) {
  //create an object where all the key/their data will be collected 
  const result = {}; 
  
  //create a loop that will go through each letter and insert it in the result 
  for (letter of stringToCount){
    result[letter] = 0
  }

  for (letter of stringToCount){
    result[letter] = result[letter] + 1; 
  }
  return result; 
}

console.log(countLetters("ala"));


assertEqual(countLetters("ala"), { a: 2, l: 1 })