// Implement a function that takes an array and returns a new array with unique values

// #1
function uniqueValues(arr) {
  return [...new Set(arr)];
}

// #2
function uniqueValues2(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }

  return result;
}

console.log(uniqueValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5]));
console.log(uniqueValues2([1, 2, 3, 4, 5, 6, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5]));

console.log(uniqueValues(["Michael", "Michael", "John", "Jane", "Jane"]));
console.log(uniqueValues2(["Michael", "Michael", "John", "Jane", "Jane"]));
