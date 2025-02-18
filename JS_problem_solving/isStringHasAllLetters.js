// Implement a function that takes a string and returns true if the string has all the letters of the alphabet, otherwise returns false

function isStrHasAllLetters(str) {
  const list = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  for(let i = 0; i < list.length; i++) {
    if(!str.includes(list[i])) {
      return false;
    }
  }

  return true;
}

console.log(isStrHasAllLetters('ABCDEFGHIJKLMNOPQRSTUVWXYZ'));
