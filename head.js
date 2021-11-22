const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed ✅: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`‼️ Assertion Failed ‼️ : ${actual} !== ${expected}`);
  }
};

const head = function(elements) {
let firstElement = elements[0]; 
return firstElement; 
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");