# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @averenceanu/lotide`

**Require it:**

`const _ = require('@averenceanu/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function head`: Retrieves the first element from the array.
* `function tail`: Retrieves every element except the head of the array.
* `function middle`: Takes in an array and return the middle-most element(s) of the given array.
* `function assertArrayEqual`: A message of success or failure printed to the console, letting us know if two arrays are a perfect match. To be implemented with `eqArrays`. 
* `function assertEqual`: A message of success or failure printed to the console, letting us know if our functions are behaving as expected. 
* `function assertObjectsEqual`: Takes in two objects and console.log an appropriate message to the console base on if they are a perfect match. 
* `function countLetters`: Takes in a sentence (as a string) and then return a count of each of the letters in that sentence.
* `function countOnly`: When given an array and an object, it will return an object containing counts of everything that the input object listed.
* `function eqArrays`: Compares two arrays for a perfect match.
* `function eqObjects`: Takes in two objects and returns true or false, based on a perfect match.
* `function findKey`: Takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.
* `function findKeyByValue`: Takes in an object and a value. It returns the first key which contains the given value. If no key with that given value is found, then it should return undefined.
* `function letterPositions`: Returns all the indices (zero-based positions) in the string where each character is found.
* `function map`: It takes in two arguments: an array to map, a callback function. It returns a new array based on the results of the callback function. 
* `function takeUntil`: The function will return a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value.
* `function without`: Returns a subset of a given array, removing unwanted elements.
