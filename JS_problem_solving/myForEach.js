// Implement a function myForEach that works like the native Array.prototype.forEach method

Array.prototype.myForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

const numbers = [1, 2, 3, 4, 5];

numbers.myForEach((number) => console.log(number * 2));
