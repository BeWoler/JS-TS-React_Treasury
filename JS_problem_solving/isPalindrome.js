// Check if a string is a palindrome

// #1
function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}

// #2
function isPalindrome2(str) {
  for(let i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));

console.log(isPalindrome2("racecar"));
console.log(isPalindrome2("hello"));
