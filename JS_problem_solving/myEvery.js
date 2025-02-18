// Implement a function myEvery that works like the native Array.prototype.every method

Array.prototype.myEvery = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (!callback(this[i], i, this)) {
      return false;
    }
  }

  return true;
};

const numbers = [1, 2, 3, 4, 5];
const names = ["John", "Jane", "Jim", "Jill"];

const allPositive = numbers.myEvery((number) => number > 0);
const allEven = numbers.myEvery((number) => number % 2 === 0);
const allNames = names.myEvery((name) => typeof name === "string");

console.log(allPositive);
console.log(allEven);
console.log(allNames);
