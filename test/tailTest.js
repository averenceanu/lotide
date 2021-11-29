const tail = require('../tail');
const assertEqual = require('../assertEqual'); 

const words = ["hebi", "fegege", "gege"];
tail(words);
assertEqual(words.length, 2);