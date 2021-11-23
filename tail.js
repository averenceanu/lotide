const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed ✅: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`‼️ Assertion Failed ‼️ : ${actual} !== ${expected}`);
  }
};

const tail = function(elements) {
  elements.shift();
  console.log(elements);
};

tail([1, 3, 4]);
tail(["Hello", "Lighthouse", "Labs"]);

const words = ["hebi", "fegege", "gege"];
tail(words);
assertEqual(words.length, 2);