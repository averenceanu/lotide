const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed ✅: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`‼️ Assertion Failed ‼️ : ${actual} !== ${expected}`);
  }
};


const findKeyByValue = function(listToLook, elementToFind) {
  for (let element in listToLook) {
    if (listToLook[element] === elementToFind) {
      return element;
    } else if (listToLook[element] === elementToFind) {
      return undefined;
    }
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);