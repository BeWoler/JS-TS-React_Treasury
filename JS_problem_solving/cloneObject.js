// Implement a function that takes an object and returns a deep clone of the object

// #1 shallow copy
const obj = { a: 1, b: 2, c: 3 };
const copy = { ...obj };

console.log(copy);

// #2 shallow copy
const obj2 = { a: 1, b: 2, c: 3 };
const copy2 = Object.assign({}, obj2);

console.log(copy2);

// #3 deep copy with JSON
const obj3 = { a: 1, b: 2, c: 3, d: { e: 4 } };
const copy3 = JSON.parse(JSON.stringify(obj3));

console.log(copy3);

// #4 deep copy with recursion
function deepCopy(obj) {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  const copy = Array.isArray(obj) ? [] : {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepCopy(obj[key]);
    }
  }

  return copy;
}

const obj4 = { a: 1, b: 2, c: 3, d: { e: 4 } };
const copy4 = deepCopy(obj4);

console.log(copy4);

// #5 deep copy with structuredClone
const obj5 = { a: 1, b: 2, c: 3, d: { e: 4 } };
const copy5 = structuredClone(obj5);

console.log(copy5);
