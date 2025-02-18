// Implement a function that takes an array and returns an object with the count of repeated values

function countRepeatedValues(arr) {
  const result = {};

  arr.forEach((item) => {
    if (result[item]) {
      result[item]++;
    } else {
      result[item] = 1;
    }
  });

  return result;
}

console.log(countRepeatedValues(['Michael', 'John', 'Michael']));
