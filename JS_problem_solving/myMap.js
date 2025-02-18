// Implement a function myMap that works like the native Array.prototype.map method

Array.prototype.myMap = function (callback) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }

  return result;
};

const numbers = [1, 2, 3, 4, 5];
const names = ["John", "Jane", "Jim", "Jill"];

const doubledNumbers = numbers.myMap((number) => number * 2);
const uppercaseNames = names.myMap((name) => name.toUpperCase());

console.log(doubledNumbers);
console.log(uppercaseNames);
