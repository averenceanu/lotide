const assert = require('chai').assert;
const tail = require('../tail');
const assertEqual = require('../assertEqual');

describe('tail function', () => {
  it('should return [fegege, gege] when given "hebi", "fegege", "gege"]', () => {
    assert.deepEqual(tail(["hebi", "fegege", "gege"]), ["fegege", "gege"])
  });
});