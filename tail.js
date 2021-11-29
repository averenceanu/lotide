const tail = function(elements) {
  elements.shift();
  return elements;
};

// tail([1, 3, 4]);
// tail(["Hello", "Lighthouse", "Labs"]);

// const words = ["hebi", "fegege", "gege"];
// tail(words);
// assertEqual(words.length, 2);

module.exports = tail;