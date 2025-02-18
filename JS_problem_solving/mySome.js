// Implement a function mySome that works like the native Array.prototype.some method

Array.prototype.mySome = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return true;
    }
  }

  return false;
};

const numbers = [1, 2, 3, 4, 5];
const letters = ["a", "b", "c", "d", "e"];

const hasEvenNumber = numbers.mySome((number) => number % 2 === 0);
const hasNegativeNumber = numbers.mySome((number) => number < 0);
const hasLetter = letters.mySome((letter) => letter === "a");

console.log(hasEvenNumber);
console.log(hasNegativeNumber);
console.log(hasLetter);
