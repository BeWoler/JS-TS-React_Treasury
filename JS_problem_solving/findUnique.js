// Implement a function that takes an array and returns 
// a new array with only unique values and preserving order

Array.prototype.findUnique = function () {
  const map = {};
  const result = [];

  this.forEach((el) => {
    map[el] = (map[el] || 0) + 1;
  });

  this.forEach((el) => {
    if (map[el] === 1) {
      result.push(el);
    }
  });

  return result;
};

console.log([10, 5, 10, 0, 0, 6, 6, 7, 2, 9, 9].findUnique());
console.log(['Michael', 'John', 'Michael', 'Alen'].findUnique())
