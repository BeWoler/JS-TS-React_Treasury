// Implement a function that takes a string and returns true if the string is a valid bracket sequence, otherwise returns false

function validateBrackets(str) {
  const stack = [];
  const bracketMap = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (let char of str) {
    if (bracketMap[char]) {
      stack.push(char);
    } else if (Object.values(bracketMap).includes(char)) {
      const lastOpen = stack.pop();

      if (bracketMap[lastOpen] !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
}
console.log(validateBrackets("()"));
console.log(validateBrackets("([])"));
console.log(validateBrackets("([)]"));
console.log(validateBrackets("{[]}"));
console.log(validateBrackets("{[]}"));
console.log(validateBrackets("}"));
