const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed ✅: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`‼️ Assertion Failed ‼️ : ${actual} !== ${expected}`);
  }
};

const head = function (element) {
  let firstElement = element[0];
  return firstElement;
};

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");