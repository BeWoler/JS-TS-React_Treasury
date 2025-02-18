// Implement a function myFilter that works like the native Array.prototype.filter method

Array.prototype.myFilter = function (callback) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }

  return result;
};

const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.myFilter((number) => number % 2 === 0);
const filteredArr = numbers.myFilter((x) => x > 2);

console.log(evenNumbers);
console.log(filteredArr);
